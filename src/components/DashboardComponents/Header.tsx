import { heading } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const Header = ({page, profilePicSrc}: heading) => {
    return ( 
        <main className="">
            <div className="flex justify-between items-center px-4 md:px-6 xl:px-8 py-4 lg:border-b border-[#767680] border-opacity-10">
                <p className="text-xl xl:text-2xl font-semibold">{page}</p>
                <Link href="/user/profile"><div className="size-10 md:size-12 xl:size-14 relative cursor-pointer">
                    <Image src={profilePicSrc} alt="Profile pic" fill className="absolute rounded-[50%]"/>
                </div></Link>             
            </div>
        </main>
     );
}
 
export default Header;