import Link from "next/link";
import Image from "next/image";
//Import needed icons
import { Add, ArrowRight2, MoneyRecive, MoneySend } from "iconsax-react";


const TransferHistory = () => {
    return ( 
        <main className="border border-[#7676801F] rounded-xl px-3 md:px-4 xl:px-6 py-6">
            <p className="text-sm xl:text-base text-[#06121B] font-semibold">Send money to</p>
            <div className="flex gap-x-10 bg-[#EBEBF52E] border border-[#7676801F] px-8 py-6 mt-5 rounded-lg overflow-x-auto special">
                <Link href="/user/transfer">
                    <div className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-[#B9BAC0] flex items-center justify-center rounded-[50%] cursor-pointer">
                        <Add size="16" color="#FFF"/>
                    </div>
                </Link>
                <div className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-red-600 rounded-[50%]">
                        
                </div>
                <div className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-red-600 rounded-[50%]">
                    
                </div>
                <div className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-red-600 rounded-[50%]">
                    
                </div>
                <div className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-red-600 rounded-[50%]">
                    
                </div>
                <div className="min-w-[3rem] min-h-[3rem] size-8 md:size-10 lg:size-12 bg-red-600 rounded-[50%]">
                    
                </div>
            </div>
            <div className="mt-8">
                <div className="flex justify-between items-center">
                    <p className="text-sm xl:text-base text-[#06121B] font-semibold">Transaction History</p> 
                    <p className="text-[0.65rem] md:text-xs text-primary">Last Five(5)</p>
                </div>
                <div className="flex flex-col">
                    {/* <div className="flex items-center justify-between py-4">
                        <div className="flex gap-x-1 items-center">
                            <div className="bg-[#2DE3001A] rounded-[50%] p-2">
                                <MoneyRecive size="24" color="#198754"/>
                            </div>
                
                            <div className="flex flex-col gap-y-0.5">
                                <p className="text-[#141619] text-[10px] md:text-[12px] xl:text-[14px] font-medium capitalize">Wire transfer</p>
                                <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">Aug 24, 2023.</p>
                            </div>
                        </div>
                        <p className="text-[#198754] text-xs md:text-sm xl:text-base font-medium">+$300.00</p>
                    </div>
                    <div className="flex items-center justify-between py-4">
                        <div className="flex gap-x-1 items-center">
                            <div className="bg-[#DB64641A] rounded-[50%] p-2">
                                <MoneySend size="24" color="#DC3545"/>
                            </div>
                
                            <div className="flex flex-col gap-y-0.5">
                                <p className="text-[#141619] text-[10px] md:text-[12px] xl:text-[14px] font-medium capitalize">Withdrawal</p>
                                <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">Aug 24, 2023.</p>
                            </div>
                        </div>
                        <p className="text-[#DC3545] text-xs md:text-sm xl:text-base font-medium">-$300.00</p>
                    </div> */}
                    <div className="flex justify-center py-4">
                        <p className="text-sm xl:text-base text-secondary text-center">No Transaction Yet</p>
                    </div>
                </div>
                <div className="group flex justify-end gap-x-1 text-[#1C1F33] text-xs xl:text-sm items-center cursor-pointer">
                    <Link href="/user/history">View all</Link>
                    <ArrowRight2 size="14" color="#1C1F33" className="group-hover:translate-x-1 transition  duration-500"/>
                </div>
            </div>
        </main>
     );
}
 
export default TransferHistory;