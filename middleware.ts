import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

export function middleware(request: NextRequest) {
  const cookie = getSessionCookie(request);
  if (!cookie) return NextResponse.redirect(new URL("/signin", request.url));
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*"] };
