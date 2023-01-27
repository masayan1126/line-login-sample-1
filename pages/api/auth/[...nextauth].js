import NextAuth from "next-auth"
import LineProvider from "next-auth/providers/line";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    LineProvider({
      clientId: process.env.NEXT_PUBLIC_LINE_AUTH_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_LINE_AUTH_CLIENT_SECRET
    })
  ]
})