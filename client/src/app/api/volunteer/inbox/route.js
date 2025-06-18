import { NextResponse } from "next/server";
import prisma from "@/app/utils/db";

export async function POST(request) {
  try {
    const { eventId, eventName, eventDescription, organizerName } = await request.json();

    if (!eventId || !eventName || !eventDescription || !organizerName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ❗ Check for existing application with the same eventId
    const existingEntry = await prisma.inbox.findFirst({
      where: { eventId },
    });

    if (existingEntry) {
      return NextResponse.json(
        { error: "You have already applied for this opportunity." },
        { status: 409 } // Conflict
      );
    }

    const newInboxEntry = await prisma.inbox.create({
      data: {
        eventId,
        eventName,
        eventDescription,
        organizerName,
        status: "pending",
      },
    });

    return NextResponse.json(newInboxEntry, { status: 201 });
  } catch (error) {
    console.error("Error creating inbox entry:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function GET() {
  try {
    const inboxEntries = await prisma.inbox.findMany({
      orderBy: {
        id: "desc",
      },
    });

    return NextResponse.json(inboxEntries);
  } catch (error) {
    console.error("Error fetching inbox entries:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
