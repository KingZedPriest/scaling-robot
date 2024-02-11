"use client"
import { useState } from "react";
import { heading } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { I24Support, LogoutCurve, ProfileCircle } from "iconsax-react";

//Import Needed Icons


const Header = ({page, profilePicSrc, name, accountNumber }: heading) => {
    //Modal State
    const [seeModal, setSeeModal] = useState<boolean>(false)
    //Modal Function
    const handleModal = () => {
        setSeeModal((prev) => !prev)
    }
    return ( 
        <main className="relative">
            <div className="flex justify-between items-center px-4 md:px-6 xl:px-8 py-4 lg:border-b border-[#767680] border-opacity-10 text-xs md:text-sm xl:text-base">
                <p className="text-xl xl:text-2xl font-semibold text-[#020100]">{page}</p>
                <div className="flex gap-x-1 items-center cursor-pointer"onClick={handleModal}>
                    <div className="size-10 md:size-12 xl:size-14 relative">
                        <Image src={profilePicSrc} alt="Profile pic" fill className="absolute rounded-[50%]"/>
                    </div> 
                </div>
                {seeModal && <div className="text-sm p-4 absolute top-[3.5rem] right-1 z-[99] flex flex-col gap-y-5 rounded-md bg-white border border-[#767680] border-opacity-20 shadow">
                        <div className="flex gap-x-2">
                            <div className="relative size-20">
                               <Image src={profilePicSrc} alt="Profile Pic" fill className="absolute rounded-lg"/> 
                            </div>
                           <div className="flex flex-col gap-y-1">
                                <p className="text-[12px] md:text-[12px] xl:text-[14px] text-[#767680] capitalize">{name}</p>
                                <p>{accountNumber}</p>
                                <Link href="/user/deposit" className="text-white hover:text-textPrimary px-4 py-2 hover:bg-primary bg-sidebar duration-500 text-center rounded-lg">Deposit</Link>
                           </div> 
                        </div>
                        <div>
                           <Link href="/user/profile" className="flex items-center gap-x-2 text-primary hover:bg-primary hover:text-secondary duration-500 py-2 px-4 cursor-pointer rounded-md">
                                <ProfileCircle size="20"/>
                                <p>Profile</p>
                            </Link>
                            <Link href="/user/support" className="flex items-center gap-x-2 text-primary hover:bg-primary hover:text-secondary duration-500 py-2 px-4 cursor-pointer rounded-md">
                                <I24Support size="20"/>
                                <p>Support</p>
                            </Link>
                            <Link href="/user/logout" className="flex items-center gap-x-2 text-primary hover:bg-primary hover:text-secondary duration-500 py-2 px-4 cursor-pointer rounded-md">
                                <LogoutCurve size="20"/>
                                <p>Logout</p>
                            </Link> 
                        </div>
                        
                    </div> }          
            </div>
        </main>
     );
}
 
export default Header;