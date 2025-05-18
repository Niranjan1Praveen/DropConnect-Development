import { NextResponse } from "next/server";
import prisma from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { eventSchema } from "@/lib/validations/event";

export async function POST(req) {
  try {
    const body = await req.json();
    const parsed = eventSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.errors.map((e) => e.message).join(", ") },
        { status: 400 }
      );
    }

    const { eventName, eventDescription, organizerName,email, contact, eventLocation, volunteerCapacity, registrationLink } = parsed.data;
    const { getUser } = getKindeServerSession();
    const user = await getUser();
    const event = await prisma.Event.create({
      data: {
        eventName,
        eventDescription: eventDescription || null,
        organizerName: organizerName || null,
        email: email || null, 
        contact: contact || null,
        eventLocation: eventLocation || null,
        volunteerCapacity: volunteerCapacity ? Number(volunteerCapacity) : 0,
        registrationLink: registrationLink || null,
        userId: user.id,
      },
    });

    return NextResponse.json(event);
  } catch (error) {
    console.error("Server Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
