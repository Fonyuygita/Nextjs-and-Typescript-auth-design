"use server"

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/route";
import { LoginSchemas } from "@/schemas";
import { AuthError } from "next-auth";
import { z } from "zod";

//  VALIDATING OUR LOGIN FORM ON THE SERVER SIDE
export const login = async(values:z.infer<typeof LoginSchemas>)=>{
    const validateFields=LoginSchemas.safeParse(values)
    if(!validateFields.success){
        return {error: "Invalid fields"}
    }

  const {email, password}=validateFields.data;

  try {
    await signIn("credentials",  {email, password, redirectTo:DEFAULT_LOGIN_REDIRECT})
    
  } catch (error) {
    if(error instanceof AuthError){
        switch(error.type){
            case "CredentialsSignin":
                return {error: "Invalid credentials"}
            default :
               return {error: "Something went wrong"};
               }
        }

        throw error;
    }
    
  }
