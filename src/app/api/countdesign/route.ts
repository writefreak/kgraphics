import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const count = await prisma.design.count(); // counts all designs
    return NextResponse.json({ totalDesigns: count });
  } catch (error) {
    console.error("Error counting designs:", error);
    return NextResponse.json(
      { error: "Failed to count designs" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
