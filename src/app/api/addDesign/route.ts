import { PrismaClient } from "@prisma/client";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const { title, description, imageUrl, uploadedBy } = await req.json();

    if (!title || !imageUrl) {
      return NextResponse.json(
        { error: "Title and Image Url are required" },
        { status: 400 }
      );
    }

    const design = await prisma.design.create({
      data: {
        title,
        description: description || "",
        imageUrl,
      },
    });
    return NextResponse.json({ success: true, design }, { status: 201 });
  } catch (error: any) {
    console.error("Error uploading design:", error);
    return NextResponse.json(
      { error: "Failed to upload design" },
      { status: 500 }
    );
  }
}
