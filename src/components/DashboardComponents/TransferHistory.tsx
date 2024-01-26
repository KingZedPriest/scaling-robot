//Import needed icons
import { Add } from "iconsax-react";

const TransferHistory = () => {
    return ( 
        <main className="border border-[#7676801F] rounded-xl px-3 md:px-4 xl:px-6 py-6">
            <p className="text-sm xl:text-base text-[#06121B] font-semibold">Send money to</p>
            <div className="flex gap-x-10 bg-[#EBEBF52E] border border-[#7676801F] px-8 py-6 mt-5 rounded-lg">
                <div className="size-8 md:size-10 lg:size-12 bg-[#B9BAC0] flex items-center justify-center rounded-[50%]">
                    <Add size="16" color="#FFF"/>
                </div>
            </div>
        </main>
     );
}
 
export default TransferHistory;