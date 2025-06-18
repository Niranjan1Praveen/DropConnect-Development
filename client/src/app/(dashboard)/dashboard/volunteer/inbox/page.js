
import { InboxIcon } from "lucide-react";
import React from "react";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import prisma from "@/app/utils/db";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

async function Page() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/api/auth/login");
  }

  const inboxEntries = await prisma.inbox.findMany({
    orderBy: { id: "desc" },
  });

  return (
    <div className="p-6">
      <Card className={"bg-transparent"}>
        <CardHeader>
          <CardTitle className={"text-3xl font-bold"}>Inbox Applications</CardTitle>
        </CardHeader>
        <CardContent>
          {inboxEntries.length > 0 ? (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className={"mb-5"}>
                  <TableRow>
                    <TableHead>Event Name</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Organizer</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody >
                  {inboxEntries.map((entry) => (
                    <TableRow key={entry.id} >
                      <TableCell>{entry.eventName}</TableCell>
                      <TableCell className="max-w-xs truncate">{entry.eventDescription}</TableCell>
                      <TableCell>{entry.organizerName}</TableCell>
                      <TableCell>
                        <span
                          className={`px-2 py-1 rounded text-white ${
                            entry.status === "pending"
                              ? "bg-yellow-500"
                              : entry.status === "approved"
                              ? "bg-green-500"
                              : "bg-red-500"
                          }`}
                        >
                          {entry.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center animate-in fade-in-50 rounded-md">
              <div className="bg-primary/15 flex items-center justify-center rounded-full size-20 border-4 border-indigo-600">
                <InboxIcon className="size-10 text-indigo-600" />
              </div>
              <h2 className="mt-6 font-semibold text-2xl">Your inbox is empty</h2>
              <p className="mb-8 mt-2 text-center text-xl text-muted-foreground max-w-xl">
                You haven’t received any messages yet. Once you do, you’ll see them
                here. Meanwhile, start engaging in events to get updates!
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default Page;
