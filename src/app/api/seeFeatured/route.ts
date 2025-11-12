import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    // Fetch all designs where featured = "featured"
    const designs = await prisma.design.findMany({
      where: { featured: "featured" },
      orderBy: { createdAt: "desc" }, // optional: latest first
      select: {
        id: true,
        title: true,
        description: true,
        imageUrl: true,
        createdAt: true,
      },
    });

    return NextResponse.json({ success: true, designs });
  } catch (error) {
    console.error("Error fetching featured designs:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch featured designs" },
      { status: 500 }
    );
  }
}
