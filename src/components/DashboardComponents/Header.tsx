"use client"
import { useState } from "react";
import { heading } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown3, LogoutCurve, ProfileCircle } from "iconsax-react";

//Import Needed Icons


const Header = ({page, profilePicSrc}: heading) => {
    //Modal State
    const [seeModal, setSeeModal] = useState<boolean>(false)
    //Modal Function
    const handleModal = () => {
        setSeeModal((prev) => !prev)
    }
    return ( 
        <main className="relative">
            <div className="flex justify-between items-center px-4 md:px-6 xl:px-8 py-4 lg:border-b border-[#767680] border-opacity-10">
                <p className="text-xl xl:text-2xl font-semibold">{page}</p>
                <div className="flex gap-x-1 items-center cursor-pointer"onClick={handleModal}>
                    <ArrowDown3 size="20" color="#D56F3E" className="xl:hidden"/>
                    <div className="size-10 md:size-12 xl:size-14 relative">
                        <Image src={profilePicSrc} alt="Profile pic" fill className="absolute rounded-[50%]"/>
                    </div> 
                </div>
                {seeModal && <div className="lg:hidden text-sm p-4 absolute top-[3.5rem] right-10 z-[99] flex flex-col gap-y-5 rounded-md bg-white border border-[#767680] border-opacity-20 shadow">
                        <Link href="/user/profile" className="flex items-center gap-x-2 text-primary hover:bg-primary hover:text-secondary duration-500 py-2 px-4 cursor-pointer rounded-md">
                            <ProfileCircle size="20"/>
                            <p>Profile</p>
                        </Link>
                        <Link href="/user/logout" className="flex items-center gap-x-2 text-primary hover:bg-primary hover:text-secondary duration-500 py-2 px-4 cursor-pointer rounded-md">
                            <LogoutCurve size="20"/>
                            <p>Logout</p>
                        </Link>
                    </div> }          
            </div>
        </main>
     );
}
 
export default Header;