import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import { prismaClient } from "../../lib/db";


const handler = NextAuth({
  // adapter: PrismaAdapter(prismaClient),
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({ 
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn(params){
      if(!params.user.email) return false

      try{
        await prismaClient.user.create({
          data:{
            name: params.user.name ?? "",
            email: params.user.email ?? "",
            provider: "GOOGLE",
          }
        })
      } catch(e){

      }
      return true
    }
  },
  secret: process.env.NEXTAUTH_SECRET,
})

export { handler as GET , handler as POST };