import Link from "next/link";
import { usePathname } from "next/navigation";


//Import Needed Icons
import { ArrowSwapHorizontal, Chart2, Element3, I24Support, WalletMoney } from "iconsax-react";


const Downbar = () => {
    const pathName = usePathname()

    return ( 
        <main className="lg:hidden">
            <div className="text-[#8E8E93] fixed bottom-0 py-4 px-2 bg-white downbarShadow w-full flex gap-x-2 justify-between text-center">
                <div className={`${pathName === "/user/dashboard" ? "text-sidebarHover" : ""} flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-sidebarHover duration-500`}>
                    <Element3 size={20}/>
                    <Link href="/user/dashboard" className="text-xs">Home</Link>
                </div> 
                <div className={`${pathName === "/user/transfer" ? "text-sidebarHover" : ""} flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-sidebarHover duration-500`}>
                    <ArrowSwapHorizontal size={20}/>
                    <Link href="/user/transfer" className="text-xs">Transfer</Link>
                </div>   
                <div className={`${pathName === "/user/history" ? "text-sidebarHover" : ""} flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-sidebarHover duration-500`}>
                    <Chart2 size={20}/>
                    <Link href="/user/history" className="text-xs">History</Link>
                </div>  
                <div className={`${pathName === "/user/savings" ? "text-sidebarHover" : ""} flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-sidebarHover duration-500`}>
                    <WalletMoney size={20}/>
                    <Link href="/user/savings" className="text-xs">Savings</Link>
                </div>  
                <div className={`${pathName === "/user/support" ? "text-sidebarHover" : ""} flex flex-col gap-y-2 w-1/5 items-center cursor-pointer hover:text-sidebarHover duration-500`}>
                    <I24Support size={20}/>
                    <Link href="/user/support" className="text-xs">Support</Link>
                </div>  
            </div>
        </main>
     );
}
 
export default Downbar;