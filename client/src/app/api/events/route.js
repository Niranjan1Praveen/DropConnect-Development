// app/api/events/route.ts
import { NextResponse } from 'next/server';
import prisma from '@/app/utils/db';

export async function POST(req) {
  try {
    const data = await req.json();

    const newEvent = await prisma.event.create({
      data: {
        eventName: data.eventName,
        eventDescription: data.eventDescription,
        organizerName: data.organizerName,
        email: data.email,
        phone: data.phone,
        location: data.location,
        date: new Date(data.date),
        time: data.time,
        category: data.category,
        requirements: data.requirements,
        capacity: parseInt(data.capacity),
        registrationLink: data.registrationLink || null,
      },
    });

    return NextResponse.json(newEvent, { status: 201 });
  } catch (error) {
    console.error('[EVENT_CREATE_ERROR]', error);
    return NextResponse.json({ message: 'Error creating event' }, { status: 500 });
  }
}
