import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  // Get visitor IP safely
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

  // Get user agent
  const userAgent = req.headers.get("user-agent") || "unknown";

  // Make an API call to a dedicated route that handles the database logic
  // This route will run in a Node.js environment, which is compatible with Prisma.
  try {
    fetch(`${req.nextUrl.origin}/api/countVisits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ip, userAgent }),
    });
  } catch (err) {
    console.error("Error calling log-visitor API:", err);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/"],
};
