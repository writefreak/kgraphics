import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Count all reviews with status 'approved'
    const total = await prisma.review.count({
      where: { status: "approved" },
    });

    return NextResponse.json({ total }, { status: 200 });
  } catch (err) {
    console.error("Error fetching total reviews:", err);
    return NextResponse.json(
      { error: "Failed to fetch total reviews" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
