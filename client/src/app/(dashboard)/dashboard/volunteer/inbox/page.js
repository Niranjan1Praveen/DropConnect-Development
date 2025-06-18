import { InboxIcon } from "lucide-react";
import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/app/utils/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

async function Page({ searchParams }) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/api/auth/login");
  }

  let event = null;
  if (searchParams.eventId) {
    event = await prisma.Event.findUnique({
      where: { id: searchParams.eventId },
    });
  }

  return (
    <>
      {event ? (
        <Card>
          <CardHeader>
            <CardTitle>{event.eventName}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>{event.eventDescription}</p>
            <p>Location: {event.eventLocation}</p>
            <p>Organizer: {event.organizerName}</p>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col items-center justify-center border border-dashed p-8 text-center animate-in fade-in-50 rounded-md">
          <div className="bg-primary/15 flex items-center justify-center rounded-full size-20 border-4 border-indigo-600">
            <InboxIcon className="size-10 text-indigo-600" />
          </div>
          <h2 className="mt-6 font-semibold text-2xl">Your inbox is empty</h2>
          <p className="mb-8 mt-2 text-center text-xl text-muted-foreground max-w-xl">
            You haven’t received any messages yet. Once you do, you’ll see them
            here. Meanwhile, start engaging or creating events to get updates!
          </p>
        </div>
      )}
    </>
  );
}

export default Page;