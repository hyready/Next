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

        // logic to verify if the user exists
        user = await getGuest(credentials.email)

        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error('Invalid credentials.')
        }

        // return user object with their profile data
        return user
      }
    })
  ],
  // callbacks: {
  //   //auth的中间件
  //   authorized(auth, request) {
  //     return !!auth?.user
  //   },
  //   //有就放行，没有就创建用户

  //   async signIn({ user }) {
  //     try {
  //       const existingGuest = await getGuest(user.email)
  //       if (!existingGuest) {
  //         await createGuest({ email: user.email, fullName: user.name })
  //       }
  //       return true
  //     } catch (error) {
  //       return false
  //     }
  //   },
  //   async session({ session, user }) {
  //     await getGuest(session.user.email)
  //     session.user.guestId = guest.id
  //     return session
  //   }
  // },
  pages: {
    signIn: '/login'
  }
})
