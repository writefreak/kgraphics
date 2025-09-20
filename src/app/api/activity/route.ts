import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Fetch 10 most recent activities
    const recent = await prisma.activity.findMany({
      orderBy: { createdAt: "desc" },
      take: 10,
      include: { user: { select: { id: true, name: true } } }, // optional user info
    });

    return NextResponse.json({ recent }, { status: 200 });
  } catch (err) {
    console.error("Failed to fetch recent activity:", err);
    return NextResponse.json(
      { message: "Failed to fetch recent activity" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
