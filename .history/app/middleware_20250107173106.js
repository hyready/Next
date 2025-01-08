import { auth } from './_lib/auth'

export default async function middleware(NextRequest) {
  return auth
}
