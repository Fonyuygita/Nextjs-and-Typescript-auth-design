import * as z from "zod"

// creating our login schemas
export const LoginSchemas=z.object({
    email:z.string().email({
        message:"Email is required dude"
    }),
    // No need to add min password to our password when login in as old users who are already logged might face issues, if later changes are done, so no need when login in, only necessary when registering
    password:z.string().min(2, {
        message:"Password is required"
    })
});