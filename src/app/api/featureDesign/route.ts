import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Missing design id" }, { status: 400 });
    }

    // Count currently featured designs
    const featuredCount = await prisma.design.count({
      where: { featured: "featured" },
    });

    if (featuredCount >= 12) {
      return NextResponse.json(
        { error: "Cannot feature more than 12 designs" },
        { status: 400 }
      );
    }

    const design = await prisma.design.update({
      where: { id },
      data: { featured: "featured" },
    });

    // Log activity
    await prisma.activity.create({
      data: { activityType: "feature", description: `Featured design ${id}` },
    });

    // ✅ Always return valid JSON
    return NextResponse.json({ success: true, design });
  } catch (err) {
    console.error("Feature design error:", err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
