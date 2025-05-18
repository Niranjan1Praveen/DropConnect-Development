import { NextResponse } from "next/server";
import prisma from "@/app/utils/db";
import { eventSchema } from "@/lib/validations/event";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function PUT(req, { params }) {
  try {
    const { eventId } = params;
    const body = await req.json();

    const parsed = eventSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors.map((e) => e.message).join(", ") },
        { status: 400 }
      );
    }

    const {
      eventName,
      eventDescription,
      organizerName,
    } = parsed.data;

    const { getUser } = getKindeServerSession();
    const user = await getUser();

    if (!user || !user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const existingEvent = await prisma.Event.findUnique({
      where: { id: eventId },
    });

    if (!existingEvent) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    if (existingEvent.userId !== user.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 403 });
    }

    const updatedEvent = await prisma.Event.update({
      where: { id: eventId },
      data: {
        eventName,
        eventDescription: eventDescription || null,
        organizerName: organizerName || null,
      },
    });

    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.error("Update Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req, { params }) {
  try {
    const { eventId } = params;

    const event = await prisma.Event.findUnique({
      where: { id: eventId },
    });

    if (!event) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(event);
  } catch (error) {
    console.error("Fetch Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
