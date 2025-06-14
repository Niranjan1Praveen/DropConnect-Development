import { NextResponse } from "next/server";
import prisma from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function PUT(request) {
  try {
    const { getUser } = getKindeServerSession();
    const kindeUser = await getUser();

    console.log("Kinde User:", kindeUser);

    if (!kindeUser?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();
    console.log("Incoming data:", data);

    if (data.dateOfBirth) {
      data.dateOfBirth = new Date(data.dateOfBirth);
    }

    if (!prisma.Volunteer) {
      throw new Error("Prisma volunteer model not available");
    }

    const existing = await prisma.volunteer.findUnique({
      where: { userId: kindeUser.id },
    });

    const volunteer = existing
      ? await prisma.volunteer.update({
          where: { userId: kindeUser.id },
          data: data,
        })
      : await prisma.volunteer.create({
          data: {
            ...data,
            userId: kindeUser.id,
            homeCountry: data.homeCountry || "India",
          },
        });
    console.log("Saved volunteer data:", volunteer);
    return NextResponse.json(volunteer);
  } catch (error) {
    console.error("Detailed error saving volunteer data:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        message: error.message,
        stack: process.env.NODE_ENV === "development" ? error.stack : undefined,
      },
      { status: 500 }
    );
  }
}
