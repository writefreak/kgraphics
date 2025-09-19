import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

// Approve review
export async function PUT(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Missing Id" }, { status: 400 });
    }

    const approvedReview = await prisma.review.update({
      where: { id },
      data: { status: "approved" },
    });

    return NextResponse.json(approvedReview); // 200 OK by default
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}

// Delete review
export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "Missing Id" }, { status: 400 });
    }

    await prisma.review.delete({ where: { id } });

    return NextResponse.json(null, { status: 204 }); // No content
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
