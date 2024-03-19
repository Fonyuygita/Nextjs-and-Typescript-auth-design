/**
 * setting up our middleware
 * 
*/

import NextAuth from "next-auth";
import authConfig from "@/auth.config";

const {auth}=NextAuth(authConfig);

export default auth((req) => {
    // check if user is logged in
    const isLoggedIn=!!req.auth;
    console.log(isLoggedIn)
    console.log("ROUTE: ", req.nextUrl.pathname);
  // req.auth
})


export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)","/(api|trpc)(.*)"]
  }