import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import {PrismaAdapter} from "@auth/prisma-adapter"
import { db } from "./lib/db"


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut

  /**
   * with prisma we cannot use the database session, because it doesn't work on the edge, so we only need too use jwt: Prisma is non edge supported
  */
} = NextAuth({
    adapter:PrismaAdapter(db),
    session:{strategy:"jwt"},
    ...authConfig
  
})