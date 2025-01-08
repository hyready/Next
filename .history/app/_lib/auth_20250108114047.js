import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import { createGuest, getGuest } from './data-service'
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {}
      },
      authorize: async credentials => {
        let user = null
        user = await getGuest(credentials.email)
        if (!user) {
          throw new Error('Invalid credentials.')
        }
        return user
      }
    })
  ],

  pages: {
    signIn: '/login'
  }
})
