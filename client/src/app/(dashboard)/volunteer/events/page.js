import { Button } from "@/components/ui/button";
import { FileIcon, PlusIcon, SearchCheckIcon, SearchIcon } from "lucide-react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import React from "react";
import { redirect } from "next/navigation";
import prisma from "@/app/utils/db";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Input } from "@/components/ui/input";
async function Page(props) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/api/auth/login");
  }
  async function getData(userId) {
    const data = await prisma.Event.findMany({
      where: {
        userId: user.id,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return data;
  }
  const data = await getData(user.id);
  console.log(data);

  return (
    <>
      {data === undefined || data.length === 0 ? (
        <div className="flex flex-col items-center justify-center border border-dashed p-8 text-center animate-in fade-in-50 rounded-md">
          <div className="bg-primary/15 flex items-center justify-center rounded-full size-20">
            <FileIcon className="size-10 text-indigo-600" />
          </div>
          <h2 className="mt-6 font-semibold text-2xl">
            You dont have any events created
          </h2>
          <p className="mb-8 mt-2 text-center text-xl text-muted-foreground max-w-lg">
            You currently dont have any events. Please create some so you can
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
            <Input className={"p-5"} placeholder="Search Events" />
            <Button
              variant="secondary"
              size="lg"
              className="bg-indigo-600 text-white max-w-sm"
              asChild
            >
              <Link href="/volunteer/events/new">
                <PlusIcon className="mr-2" />
                Create a New Event
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {data.map((item, index) => (
              <Card className="p-0 pb-5" key={item.id}>
                <Image
                  src={item.imgUrl ?? "/assets/images/ngo.png"}
                  width={800}
                  height={200}
                  alt={item.eventName}
                  className="rounded-t-lg object-cover w-full h-[200px]"
                />
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{item.eventName}</CardTitle>
                    <p className="text-sm">Organized by {item.organizerName}</p>
                  </div>
                  <CardDescription>{item.eventDescription}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex w-full justify-between flex-wrap gap-4">
                    <Button
                      variant="secondary"
                      size="lg"
                      className="bg-indigo-600 text-white w-full md:w-auto"
                      asChild
                    >
                      <Link href={`/volunteer/events/${item.id}`}>
                        View Entire Details
                      </Link>
                    </Button>
                    <Button
                      variant="secondary"
                      size="lg"
                      className="bg-indigo-600 text-white w-full md:w-auto"
                      asChild
                    >
                      <Link href={`/volunteer/events/update/${item.id}`}>
                        Update Details
                      </Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Button
            variant={"secondary"}
            size={"lg"}
            className={"bg-indigo-600 text-white max-w-sm mx-auto"}
            asChild
          >
            <Link href={"/volunteer/events/new"}>
              <PlusIcon />
              Create a New Event
            </Link>
          </Button>
        </main>
      )}
    </>
  );
}

export default Page;
