import { NextRequest, NextResponse } from "next/server";

// middleware.js
export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  // RSC pathname workaround, since ATM we can't access pathname in RSC
  requestHeaders.set("x-your-pathname", request.nextUrl.pathname);
  requestHeaders.set("x-your-query", request.nextUrl.searchParams.get("q") || ("" as string));

  return NextResponse.next({
    request: {
      headers: requestHeaders, // Overrided headers (including our x-your-pathname)
    },
  });
}
