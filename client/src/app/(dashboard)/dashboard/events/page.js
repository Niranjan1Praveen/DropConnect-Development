import { Button } from "@/components/ui/button";
import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  UsersIcon,
  ExternalLinkIcon,
  PlusIcon,
  FileIcon,
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
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import Image from "next/image";
import { Input } from "@/components/ui/input";
import AppSearchBar from "@/components/dashboard/AppSearchBar";
async function Page(props) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/api/auth/login");
  }
  async function getData() {
    const data = await prisma.Event.findMany({
      take: 10,
      orderBy: {
        createdAt: "desc",
      },
    });
    return data;
  }

  const data = await getData(user.id);
  console.log(data);
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

    return "/assets/images/ngo.png"; // <-- fallback return if no match
  }
  return (
    <>
      {data === undefined || data.length === 0 ? (
        <div className="flex flex-col items-center justify-center border border-dashed p-8 text-center animate-in fade-in-50 rounded-md">
          <div className="bg-primary/15 flex items-center justify-center rounded-full size-20 border-4 border-indigo-600">
            <FileIcon className="size-10 text-indigo-600" />
          </div>
          <h2 className="mt-6 font-semibold text-2xl">
            There are no events at the moment!
          </h2>
          <p className="mb-8 mt-2 text-center text-xl text-muted-foreground max-w-lg">
            There are currently no events here. Please create some so you can
            see them right here!
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
      ) : (
        <main className="flex flex-col gap-10 p-8">
          <div className="flex gap-4 flex-wrap md:flex-nowrap rounded-md items-center justify-center">
            <Input className={"p-5"} placeholder="🔍 Search Events" />
            <AppSearchBar />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 items-stretch">
            {data.map((item, index) => (
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
                      <Link href={`/dashboard/events/${item.id}`}>
                        View Entire Details
                      </Link>
                    </Button>
                    {item.userId === user.id && (
                      <Button
                        variant="secondary"
                        size="lg"
                        className="bg-indigo-600 text-white w-full md:w-auto"
                        asChild
                      >
                        <Link href={`/dashboard/events/update/${item.id}`}>
                          Update Details
                        </Link>
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </main>
      )}
    </>
  );
}

export default Page;
