// src/pages/api/countVisits.ts
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Count all unique visitors by IP + UserAgent
    const total = await prisma.visitor.count();

    return NextResponse.json({ total });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch total visits" },
      { status: 500 }
    );
  }
}
