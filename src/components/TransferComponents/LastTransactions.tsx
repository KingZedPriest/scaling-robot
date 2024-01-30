import Image from "next/image";
import Link from "next/link";
import { getRandomAvatar } from "@/lib/getRandomAvatar";

//Import Needed Icons
import { ArrowRight2, Bill, WalletMoney } from "iconsax-react";



const LastTransactions = ({transactions}: any) => {
    return ( 
        <main className="text-xs md:text-sm xl:text-base mb-20 lg:mb-0">
            <p className="text-sm lg:text-base text-[#06121B] font-semibold mb-4">Recent Transactions</p>
            <div className="flex gap-x-10 bg-[#EBEBF52E] border border-[#7676801F] px-8 py-6 mt-5 rounded-lg overflow-x-auto special">
                {transactions.map((transaction: any) => ( 
                    <Link href={`history/${transaction.id}`} key={transaction.id} className="relative min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 rounded-[50%]">
                        {transaction.type.includes('Wire_Transfer') ? <Image src={getRandomAvatar()} alt="User Icon"  fill className="rounded-[50%]"/> : transaction.type === "Utility_Bill" ? <Bill size="32" color="#D56F3E" /> : transaction.type === "Deposit" ? <Image src={getRandomAvatar()} alt="User Icon" fill className="rounded-[50%]"/> :  <WalletMoney size="32" color="#D56F3E"/>}
                    </Link>
                ))}
                    
            </div>   
            <Link href="/user/history" className="flex gap-x-0.5 items-center my-4 justify-end cursor-pointer group">View all <ArrowRight2 size={16} className="text-secondary transition group-hover:translate-x-1 duration-500"/></Link> 
        </main>
     );
}
 
export default LastTransactions;

