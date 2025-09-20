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
    // Count all visitors in the database
    const totalVisitors = await prisma.visitor.count();

    // Return a JSON object with the total count
    return NextResponse.json({ total: totalVisitors }, { status: 200 });
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
