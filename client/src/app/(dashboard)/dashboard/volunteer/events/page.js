import { Button } from "@/components/ui/button";
import {
  MapPinIcon,
  UsersIcon,
  ExternalLinkIcon,
  PlusIcon,
  FileIcon,
  Send,
} from "lucide-react";
import veltrix from "@/assets/images/eventImg/1.svg";
import noventra from "@/assets/images/eventImg/2.svg";
import aurevia from "@/assets/images/eventImg/3.svg";
import zentara from "@/assets/images/eventImg/4.svg";
import trionyx from "@/assets/images/eventImg/5.svg";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation";
import prisma from "@/app/utils/db";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import Image from "next/image";
import { AppSearchEvents } from "@/components/dashboard/AppSearchEvents";

const ITEMS_PER_PAGE = 10;

async function Page({ searchParams }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/api/auth/login");
  }

  const currentPage = Number(searchParams?.page) || 1;
  const searchQuery = searchParams?.search || "";
  const locationFilter = searchParams?.location === 'all' ? '' : searchParams?.location || '';

  async function getData() {
    const whereClause = {};
    
    if (searchQuery) {
      whereClause.eventName = {
        contains: searchQuery,
        mode: 'insensitive'
      };
    }
    
    if (locationFilter) {
      whereClause.eventLocation = {
        equals: locationFilter,
        mode: 'insensitive'
      };
    }
    
    const [data, totalCount, locations] = await Promise.all([
      prisma.Event.findMany({
        where: whereClause,
        skip: (currentPage - 1) * ITEMS_PER_PAGE,
        take: ITEMS_PER_PAGE,
        orderBy: {
          createdAt: "desc",
        },
        distinct: ['eventLocation'] // For getting unique locations
      }),
      prisma.Event.count({ where: whereClause }),
      prisma.Event.findMany({
        select: {
          eventLocation: true
        },
        distinct: ['eventLocation']
      })
    ]);

    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
    const uniqueLocations = [...new Set(locations.map(l => l.eventLocation))].filter(Boolean);
    
    return { data, totalPages, locations: uniqueLocations.length > 0 ? uniqueLocations : [] };
  }
  const { data, totalPages,locations } = await getData();

  function handleSearchSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const search = formData.get("search");
    const params = new URLSearchParams(searchParams);

    if (search) {
      params.set("search", search);
      params.set("page", "1");
    } else {
      params.delete("search");
    }
    window.history.pushState(null, "", `?${params.toString()}`);
  }
  const getPaginationLinks = () => {
    const links = [];
    const maxVisiblePages = 5;

    let startPage, endPage;
    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      const maxPagesBeforeCurrent = Math.floor(maxVisiblePages / 2);
      const maxPagesAfterCurrent = Math.ceil(maxVisiblePages / 2) - 1;

      if (currentPage <= maxPagesBeforeCurrent) {
        startPage = 1;
        endPage = maxVisiblePages;
      } else if (currentPage + maxPagesAfterCurrent >= totalPages) {
        startPage = totalPages - maxVisiblePages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - maxPagesBeforeCurrent;
        endPage = currentPage + maxPagesAfterCurrent;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      links.push(
        <PaginationItem key={i}>
          <PaginationLink href={`?page=${i}`} isActive={i === currentPage}>
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }

    return links;
  };

  function getEventImg(companyName) {
    if (!companyName || typeof companyName !== "string") {
      return "/assets/images/ngo.png";
    }

    const normalized = companyName.toLowerCase().trim();

    if (normalized.includes("trionyx")) return trionyx;
    if (normalized.includes("aurevia")) return aurevia;
    if (normalized.includes("noventra")) return noventra;
    if (normalized.includes("veltrix")) return veltrix;
    if (normalized.includes("zentara")) return zentara;

    return "/assets/images/ngo.png";
  }

  if (data === undefined || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center border border-dashed p-8 text-center animate-in fade-in-50 rounded-md">
        <div className="bg-primary/15 flex items-center justify-center rounded-full size-20 border-4 border-indigo-600">
          <FileIcon className="size-10 text-indigo-600" />
        </div>
        <h2 className="mt-6 font-semibold text-2xl">
          There are no events at the moment!
        </h2>
        <p className="mb-8 mt-2 text-center text-xl text-muted-foreground max-w-lg">
          There are currently no events here. Please create some so you can see
          them right here!
        </p>
        <Button
          variant={"secondary"}
          size={"lg"}
          className={"bg-indigo-600 text-white"}
          asChild
        >
          <Link href={"events/new"}>
            <PlusIcon />
            Create
          </Link>
        </Button>
      </div>
    );
  }
  return (
    <main className="flex flex-col gap-10 p-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Match with events that suit you best</h2>
        <AppSearchEvents locations={locations}/>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 items-stretch">
        {data.map((item) => (
          <Card className="p-0 pb-5 flex flex-col h-full" key={item.id}>
            <Image
              src={getEventImg(item.organizerName)}
              width={800}
              height={200}
              alt={item.eventName}
              className="rounded-t-lg object-cover w-full h-[300px]"
            />
            <CardHeader>
              <CardTitle className={"text-2xl"}>{item.eventName}</CardTitle>
              <CardDescription>{item.eventDescription}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <strong>Organized by:</strong> {item.organizerName}
              </div>

              <div className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" />
                <span>{item.eventLocation}</span>
              </div>

              <div className="flex items-center gap-2">
                <UsersIcon className="h-4 w-4" />
                <span>{item.volunteerCapacity} Volunteers</span>
              </div>

              {item.registrationLink && (
                <div className="flex items-center gap-2">
                  <ExternalLinkIcon className="h-4 w-4 text-blue-600" />
                  <a
                    href={item.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600"
                  >
                    Registration Link
                  </a>
                </div>
              )}
            </CardContent>

            <CardFooter>
              <div className="flex w-full justify-between flex-wrap gap-4">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-indigo-600 text-white w-full md:w-auto"
                  asChild
                >
                  <Link href={`/dashboard/volunteer/events/${item.id}`}>
                    <Send />
                    Apply Now
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>

      {totalPages > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href={`?page=${Math.max(1, currentPage - 1)}`}
                aria-disabled={currentPage <= 1}
              />
            </PaginationItem>

            {getPaginationLinks()}

            <PaginationItem>
              <PaginationNext
                href={`?page=${Math.min(totalPages, currentPage + 1)}`}
                aria-disabled={currentPage >= totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </main>
  );
}

export default Page;
