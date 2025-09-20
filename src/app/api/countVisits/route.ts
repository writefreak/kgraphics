import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { ip, userAgent } = await req.json();

    if (!ip || !userAgent) {
      return NextResponse.json(
        { message: "Missing IP or user agent" },
        { status: 400 }
      );
    }

    // Only create if combination of IP + userAgent doesn't exist
    const exists = await prisma.visitor.findFirst({
      where: { ip, userAgent },
    });

    if (!exists) {
      await prisma.visitor.create({
        data: { ip, userAgent },
      });
    }

    return NextResponse.json(
      { message: "Visitor logged successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error logging visitor:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(req: NextRequest) {
  try {
    const allVisitors = await prisma.visitor.findMany({
      select: {
        visitedAt: true,
      },
    });

    const aggregatedData: { [key: string]: number } = {};

    allVisitors.forEach((visitor) => {
      // Get the date in YYYY-MM-DD format
      const date = visitor.visitedAt.toISOString().split("T")[0];

      if (!aggregatedData[date]) {
        aggregatedData[date] = 0;
      }
      aggregatedData[date]++;
    });

    const formattedData = Object.keys(aggregatedData).map((date) => ({
      date,
      count: aggregatedData[date],
    }));

    return NextResponse.json(formattedData, { status: 200 });
  } catch (err) {
    console.error("Error counting visitors:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
