import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import Header from "@/components/DashboardComponents/Header";
import Balance from "@/components/TransferComponents/Balance";
import CapitalWealth from "@/components/SavingsComponents/CapitalWealth";

const page = async () => {

    const { user } = await getUserDetails();

    return ( 
        <main>
            <Header page="Savings" profilePicSrc={user?.profileImgSrc}/>
            <div className="px-4 md:px-6 xl:px-8 flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between mt-5 lg:mt-10">
                <div className="lg:w-[49%] border border-[#7676801F] rounded-lg p-4">
                    <div className="flex justify-between items-center mb-4">
                        <p className="text-sm lg:text-base text-[#06121B] font-semibold">Total savings</p>
                        <p className="text-sm lg:text-base text-[#06121B] font-semibold">€0.00</p>
                    </div>
                    <div className="flex flex-wrap gap-5">
                        <CapitalWealth />
                    </div>
                </div>
                <div className="lg:w-[49%] flex flex-col gap-y-10 border border-[#7676801F] rounded-lg p-4">
                    <Balance />
                </div>
            </div>
        </main>
     );
}
 
export default page;