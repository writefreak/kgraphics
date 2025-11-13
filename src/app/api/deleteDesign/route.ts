import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Design ID is required" },
        { status: 400 }
      );
    }

    await prisma.design.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Design deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting design:", error);
    return NextResponse.json(
      { error: "Failed to delete design" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
