import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { createGuest, getGuest } from './data-service'
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    //auth的中间件
    authorized(auth, request) {
      return !!auth?.user
    },
    //有就放行，没有就创建用户

    async signIn({ user }) {
      try {
        const existingGuest = await getGuest(user.email)
        if (!existingGuest) {
          await createGuest({ email: user.email, fullName: user.name })
        }
        return true
      } catch (error) {
        return false
      }
    },
    async session({ session, user }) {
      await getGuest(session.user.email)
      session.user.guestId = guest.id
      return session
    }
  },
  pages: {
    signIn: '/login'
  }
})
