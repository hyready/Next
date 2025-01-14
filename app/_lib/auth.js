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
        email: {},
        fullName: {}
      },
      //有问题？？？
      authorize: async credentials => {
        if (!credentials.email || !credentials.fullName) {
          throw new Error('请输入email和fullName')
        }
        let user = null
        user = await getGuest(credentials.email)
        if (!user) {
          await createGuest({
            email: credentials.email,
            fullName: credentials.fullName
          })
        }
        return user
      }
    })
  ],
  callbacks: {
    // //auth的中间件
    authorized({ auth, request }) {
      console.log(auth, 'auth')
      return !!auth?.user
    },
    //有就放行，没有就创建用户

    // async signIn({ user }) {
    //   console.log(user, '建群user')
    //   try {
    //     const existingGuest = await getGuest(user.email)
    //     if (!existingGuest) {
    //       await createGuest({ email: user.email, fullName: user.name })
    //     }
    //     return true
    //   } catch (error) {
    //     return false
    //   }
    // },
    async session({ session, user }) {
      const guest = await getGuest(session.user.email)

      session.user.guestId = guest.id
      session.user = { ...session.user, ...guest, name: guest.fullName }
      return session
    }
  },
  pages: {
    signIn: '/login'
  }
})
