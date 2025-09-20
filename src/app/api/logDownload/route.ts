import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { type } = await req.json();

    if (!type) {
      return NextResponse.json(
        { message: "Missing download type" },
        { status: 400 }
      );
    }

    await prisma.download.create({
      data: {
        type,
      },
    });

    await prisma.activity.create({
      data: {
        activityType: "download",
        description: "Downloaded the brand story",
      },
    });

    return NextResponse.json(
      { message: "Download logged successfully" },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error logging download:", err);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

// GET: return total downloads
export async function GET() {
  try {
    const total = await prisma.download.count(); // count all download records
    return NextResponse.json({ total }, { status: 200 });
  } catch (err) {
    console.error("Error fetching downloads:", err);
    return NextResponse.json(
      { message: "Failed to fetch total downloads" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
