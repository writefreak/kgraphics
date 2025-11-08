import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const design = await prisma.design.findMany({
      orderBy: { createdAt: "desc" },
    });
    console.log("Fetched designs:", design);
    return NextResponse.json(design, { status: 200 });
  } catch (error: any) {
    console.error("❌ Prisma GET error:", error);
    return NextResponse.json(
      { message: error.message || "Error" },
      { status: 500 }
    );
  }
}
