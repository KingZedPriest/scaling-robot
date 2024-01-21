import type { AuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/lib/prismadb"; 
import bcrypt from "bcrypt";


export const authOptions:AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            credentials: {
                email: {label:"email", type: "email"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials){

                //Check if there is an email or password
                if(!credentials?.email || !credentials?.password){
                    throw new Error("Missing Fields") 
                }

                //Checks the email in the Database
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email.toLowerCase()
                    }
                })
                //Checks if the user has a hashed password in the DB
                if (!user || !user?.hashedPassword){
                    throw new Error("Invalid Credentials")
                }
                //Compare the provided password with the hashed password
                const isCorrect = await bcrypt.compare(
                    credentials.password,
                    user.hashedPassword
                )

                //If the password comparison failed
                if (!isCorrect){
                    throw new Error ("Invalid Credentials")
                }
                //If every checks was successfully passed
                return user
            }
        })
    ],
    pages: {
        signIn:"/login"
    },

    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET
}