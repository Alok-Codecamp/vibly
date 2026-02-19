"use server"
import { cookies } from "next/headers"


const delteCookies = async()=>{
    (await cookies()).delete("refreshToken")
}

export default delteCookies