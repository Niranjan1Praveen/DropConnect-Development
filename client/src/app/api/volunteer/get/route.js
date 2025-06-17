import { NextResponse } from "next/server";
import prisma from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function GET(request) {
  try {
    const { getUser } = getKindeServerSession();
    const kindeUser = await getUser();

    if (!kindeUser?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    if (!prisma.volunteer) {
      throw new Error("Prisma volunteer model not available");
    }

    const volunteer = await prisma.volunteer.findMany({
      select: {
        id: true,
        userId: true,
        salutation: true,
        firstName: true,
        lastName: true,
        dateOfBirth: true,
        gender: true,
        homeStreet: true,
        homeCity: true,
        homeState: true,
        postalCode: true,
        homeCountry: true,
        mobilePhone: true,
        employer: true,
        educationalLevel: true,
        maritalStatus: true,
        employmentStatus: true,
        willingTravelDistance: true,
        helpInDisaster: true,
        hasDisability: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    return NextResponse.json({ data: volunteer, status: "pending" }, { status: 200 });
  } catch (error) {
    console.error("Error fetching volunteer data:", error);
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