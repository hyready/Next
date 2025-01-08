import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub],
  callbacks: {
    //auth的中间件
    authorized(auth, request) {
      return !!auth?.user
    },
    //有就放行，没有就创建用户

    async signIn({ user, account, profile, email }) {
      const existingGuest = await getGuest(email)
    }
  },
  pages: {
    signIn: '/login'
  }
})
