"use server"

import { LoginSchemas } from "@/schemas";
import { z } from "zod";

//  VALIDATING OUR LOGIN FORM ON THE SERVER SIDE
export const login = async(values:z.infer<typeof LoginSchemas>)=>{
    const validateFields=LoginSchemas.safeParse(values)
    if(!validateFields.success){
        return {error: "Invalid fields"}
    }

    return {success: "Email sent!"};
    console.log(values);
}