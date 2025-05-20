import prisma from "@/app/utils/db";

import { notFound } from "next/navigation";

export default async function EventIdRoute({ params }) {
  const { eventId } = params;
  console.log(eventId);

  if (!eventId) return notFound();

  const event = await prisma.Event.findUnique({
    where: {
      id: eventId,
    },
  });

  if (!event) return notFound();

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-3xl font-bold">{event.eventName}</h1>
      {event.organizerName && (
        <p className="text-lg text-muted-foreground">
          Organized by {event.organizerName}
        </p>
      )}
      {event.eventDescription && (
        <p className="text-base text-gray-700">{event.eventDescription}</p>
      )}
      <p className="text-sm text-gray-500 italic">
        Created at: {new Date(event.createdAt).toLocaleString()}
      </p>
      
    </div>
  );
}
