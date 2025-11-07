import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Design Id required" },
        { status: 400 }
      );
    }

    //all other designs are unfeatured

    await prisma.design.updateMany({
      data: { featured: false },
    });

    const updated = await prisma.design.update({
      where: { id },
      data: { featured: true },
    });
    console.log(updated);
    return NextResponse.json({ message: "Design Featured", design: updated });
  } catch (error) {
    console.error("Error featuring design:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
