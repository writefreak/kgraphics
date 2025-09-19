import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function middleware(req: NextRequest) {
  // Get visitor IP safely
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown"; // fallback for localhost or dev

  // Get user agent
  const userAgent = req.headers.get("user-agent") || "unknown";

  try {
    // Only create if combination of IP + userAgent doesn't exist
    const exists = await prisma.visitor.findFirst({
      where: { ip, userAgent },
    });

    if (!exists) {
      await prisma.visitor.create({
        data: { ip, userAgent },
      });
    }
  } catch (err) {
    console.error("Error logging visitor:", err);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"], // track all pages
};
