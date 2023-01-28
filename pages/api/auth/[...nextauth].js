import NextAuth from "next-auth"
import LineProvider from "next-auth/providers/line";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    LineProvider({
      clientId: process.env.NEXT_PUBLIC_LINE_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_LINE_AUTH_CLIENT_SECRET
    })
  ],
    callbacks: {
        // async jwt({ token, user, account }) {
        //     if (account && user) {
        //         return {
        //         ...token,
        //         accessToken: user.token,
        //         refreshToken: user.refreshToken,
        //         };
        //     }
        
        //     return token;
        // },
        async jwt({ token, account }) {
            if (account) {
              token.accessToken = account.access_token
            //   token.userId = account.userId
            //   token.idToken = account.id_token
            }
            return token
        },
        async session({ session, token }) {
            session.user.accessToken = token.accessToken;
            session.user.userId = token.userId;
            return session;
        },
    },
})