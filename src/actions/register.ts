"use server"
import bcrypt from "bcrypt"
import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import { db } from "@/lib/db";

//  VALIDATING OUR REGISTER FORM ON THE SERVER SIDE
export const register = async(values:z.infer<typeof RegisterSchema>)=>{
    const validateFields=RegisterSchema.safeParse(values)
    if(!validateFields.success){
        return {error: "Invalid fields"}
    }

// get validated fields
console.log(validateFields);
const {email, password, name}=validateFields.data
// hash our password
const hashedPassword=await bcrypt.hash(password, 10);
// check if user already exist
const existingUser=await db.user.findUnique({
    where:{
        email
    }
})

if(existingUser) {
    return {error:"User already exist "}
}
// else we want to create a user and  store the user in our database
await db.user.create({
    data:{
        name,
         email, 
         password:hashedPassword
    }
})
//  AFTER WE WANT TO SEND VERIFICATION TOKEN EMAIL


    return {success: "register successful!"};

}