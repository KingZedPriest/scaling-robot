"use client"
import Image from "next/image";
import { useSavingsStore } from "@/store/savings";
import { useBalanceStore } from "@/store/BalanceDetails";
import { toast } from "sonner";


const SavingDetails = ({currentCurrency}: any) => {
    
    const {capitalWealthBalance, saveboxBalance} = useBalanceStore()
    const {savingsType} = useSavingsStore()

    return ( 
        <main className={`${!savingsType && "hidden"} mb-20`}>
            <p className="text-sm lg:text-base text-[#06121B] font-semibold my-4">{savingsType === "capital" ? "Capital Wealth" : savingsType === "savebox" ? "Save Box" : "No Option"}</p>
            <div className="border border-[#7676801F] rounded-lg p-4">
                <p className="text-primary text-lg md:text-xl xl:text-2xl font-bold">{currentCurrency ?? "€"}{savingsType === "capital" ? `${capitalWealthBalance.toLocaleString()}` : savingsType === "savebox" ? `${saveboxBalance.toLocaleString()}` : ""}</p>
                <button onClick={ () => toast.info("Kindly contact your account officer, if you wish to withdraw your savings.")} className="mt-20 px-6 md:px-10 lg:px-14 py-2 md:py-3 border border-[#DDDDE0] text-sm md:text-base hover:bg-primary hover:text-[#DDDDE0] rounded-lg duration-500">Withdraw</button>
            </div>
        </main>
     );
}
 
export default SavingDetails;