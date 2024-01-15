"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

//Import Needed ICons
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

//Import Needed Images
import arrow from "../../../public/Images/arrowRight.svg";


const LoginForm = () => {
    const [seen, setSeen] = useState<boolean>(false)
    const handleSeePassword = () => {
        setSeen ((prev) => (!prev))
      }
    return ( 
        <main className="mt-12 text-xs md:text-sm xl:text-base text-[#161618]">
            <form>
                <div className="flex flex-col gap-y-1">
                    <label className="cursor-pointer" htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none" placeholder="example@gmail.com"/>
                </div>
                <div className="relative flex flex-col gap-y-1 mt-6">
                    <label className="cursor-pointer" htmlFor="phoneNumber">Password</label>
                    <input type={seen ? "text" : "password"} name="password" id="password" className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none" placeholder="xxxxxxxxxxxxx"/>
                    <div className="absolute top-[55%] right-4 cursor-pointer text-base sm:text-lg md:text-xl xl:text-2xl" onClick={handleSeePassword}>{seen ? <BsEyeSlash /> : <BsEye />}</div>
                </div>
                <p className="mt-4">First time using Capital sphere bank?<span className="text-primary hover:underline duration-500"><Link href="/create"> Sign up</Link></span></p>
                <button type="submit" className="group mt-12 flex w-full items-center justify-center gap-x-1.5 rounded-md bg-secondary py-2 text-white md:py-3 lg:text-lg">
                    Continue <Image src={arrow} alt="Right Arrow" className="transition duration-500 group-hover:translate-x-2" /> </button>
            </form>
        </main>
     );
}
 
export default LoginForm;