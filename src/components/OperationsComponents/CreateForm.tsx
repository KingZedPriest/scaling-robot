"use client"
import { useState } from "react";
import Image from "next/image";
import { useSearchParams } from 'next/navigation'


//Import Needed Icons
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

//Import Needed Images
import arrow from "../../../public/Images/arrowRight.svg";

const CreateForm = () => {
    
    const searchParams = useSearchParams()
    const role = searchParams.get('role')
    
    const [seen, setSeen] = useState<boolean>(false)
    const handleSeePassword = () => {
        setSeen ((prev) => (!prev))
    }

    return ( 
        <main className="text-xs md:text-sm xl:text-base text-textPrimary">
            <div>
                 <p className="font-bold text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl">
                    Operations Account Setup
                </p>
                <p className="font-semibold mt-2">Welcome, let&apos;s get started</p>
            </div>
        <div className="mt-14">
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
                <button type="submit" className="group mt-12 flex w-full items-center justify-center gap-x-1.5 rounded-md bg-secondary py-2 text-white md:py-3 lg:text-lg">
                    Create Account <Image src={arrow} alt="Right Arrow" className="transition duration-500 group-hover:translate-x-2" /> </button>
            </form> 
        </div>
    </main>
     );
}
 
export default CreateForm;