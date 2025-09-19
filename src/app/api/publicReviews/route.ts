import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const approvedReviews = await prisma.review.findMany({
      where: { status: "approved" },
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        businessName: true,
        reviewText: true,
        createdAt: true,
      },
    });

    return NextResponse.json(approvedReviews, { status: 200 });
  } catch (err) {
    console.error("Error fetching reviews", err);
    return NextResponse.json(
      { error: "Failed to fetch approved reviews" },
      { status: 500 }
    );
  }
}
