"use client"
import Image from "next/image";
import { useSavingsStore } from "@/store/savings";

//Import Needed Images
import germanFlag from "../../../public/Images/germany.svg";

const SavingDetails = () => {
    
    const {savingsType} = useSavingsStore()
    
    return ( 
        <main className={`${!savingsType && "hidden"}`}>
            <p className="text-sm lg:text-base text-[#06121B] font-semibold my-4">{savingsType === "capital" ? "Capital Wealth" : savingsType === "savebox" ? "Save Box" : "No Option"}</p>
            <div className="border border-[#7676801F] rounded-lg p-4">
                <p className="text-[#161929] text-[14px] lg:text-[16px] font-semibold">51,000.00</p>
                <div className="flex gap-x-1 items-center mt-4">
                    <Image src={germanFlag} alt="Flag"/>
                    <p className="text-[10px] md:text-[12px] xl:text-[14px] font-medium text-[#B2B3BA]">EUR</p>
                </div>
                <button className="mt-20 px-6 md:px-10 lg:px-14 py-2 md:py-3 border border-[#DDDDE0] text-sm md:text-base hover:bg-primary hover:text-[#DDDDE0] rounded-lg duration-500">Withdraw</button>
            </div>
        </main>
     );
}
 
export default SavingDetails;