
import Image from "next/image";
import Link from "next/link";

//Import Needed Icons
import { ArrowRight2 } from "iconsax-react";

const LastTransactions = () => {
    return ( 
        <main className="text-xs md:text-sm xl:text-base">
            <p className="text-sm lg:text-base text-[#06121B] font-semibold my-4">Recent Transactions</p>
            <div className="flex gap-x-10 bg-[#EBEBF52E] border border-[#7676801F] px-8 py-6 mt-5 rounded-lg overflow-x-auto special">
                <div className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-red-600 rounded-[50%]"></div> 
                <div className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-red-600 rounded-[50%]"></div>
                <div className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-red-600 rounded-[50%]"></div>
                <div className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-red-600 rounded-[50%]"></div>
                <div className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-red-600 rounded-[50%]"></div>
            </div>   
            <Link href="/user/history" className="flex gap-x-0.5 items-center my-4 justify-end cursor-pointer group">View all <ArrowRight2 size={16} className="text-secondary transition group-hover:translate-x-1 duration-500"/></Link> 
        </main>
     );
}
 
export default LastTransactions;