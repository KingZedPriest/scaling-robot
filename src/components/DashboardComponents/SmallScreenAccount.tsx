"use client"
import { useState } from "react";
import { smallScreenAccount } from "@/lib/types";
import { toast } from "sonner";

//Import Needed Icons
import { Copy } from "iconsax-react";


const SmallScreenAccount = ({accountNumber, firstName, lastName}: smallScreenAccount) => {
    //State for the copied text
    const [isCopied, setIsCopied] = useState<boolean>(false)
    //Copy function
    const handleCopyClick = async () => {
        try {
          await navigator.clipboard.writeText(accountNumber);
          setIsCopied(true);
          toast.success("Account number copied to clipboard")
        } catch (err) {
          console.error('Unable to copy text', err);
        }
      };
      
    return ( 
        <main className="lg:hidden bg-[#EBEBF52E] border border-[#7676801F] h-20 rounded-lg p-4">
            <p className="text-secondary text-xs sm:text-sm md:text-base capitalize font-medium">{firstName} {lastName}</p>
            <div className="flex justify-between mt-4 items-center">
                <p className="text-xs md:text-sm text-[#8E8E93]">Capital savings account</p>
                <div className="flex items-center gap-x-1">
                    <p className="text-xs sm:text-sm md:text-base font-medium text-[#8E8E93]">{accountNumber}</p>
                    <Copy className={`${isCopied ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'} text-primary text-[8px] sm:text-[10px] md:text-[12px]`} onClick={!isCopied ? handleCopyClick : undefined}/>
                </div>
            </div>
        </main>
     );
}
 
export default SmallScreenAccount;