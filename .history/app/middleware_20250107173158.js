/*import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);

  return NextResponse.redirect(new URL("/about", request.url));
}*/

import { auth } from './_lib/auth'

export default async function middleware(NextRequest) {
  return auth
}
