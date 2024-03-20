// import GitHub from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import type { NextAuthConfig } from "next-auth"
import { LoginSchemas } from "./schemas"
import { findUserByEmail } from "./data/user";

export default {
  // providers: [GitHub],
  providers:[Credentials({

    async authorize(credentials){
      // validate our field again
      const validatedFields=LoginSchemas.safeParse(credentials);
      if(validatedFields.success){
        const {email, password}=validatedFields.data;
        // check if the email, pass in the credentials provider is actually connected to any user in our database
        const user=await findUserByEmail(email)
        // now, if user logged in our social media, then obviously, they do not need to send their password to our database, so we need to check if user password really exist in our database
        if(!user || !user.password){
          return null
        }
const passwordMatch=await bcrypt.compare(
  password, 
  user.password
);

if(passwordMatch) return user;

      }
      return null
    }

  })],
} satisfies NextAuthConfig