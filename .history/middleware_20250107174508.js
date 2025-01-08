/*import { NextResponse } from "next/server";

export function middleware(request) {
  console.log(request);

  return NextResponse.redirect(new URL("/about", request.url));
}*/

import { auth } from '@/app/_lib/auth'

export const middleware = auth
//配置的保护路由
export const config = {
  matcher: ['/account1']
}
