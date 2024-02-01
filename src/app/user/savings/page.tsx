import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import Header from "@/components/DashboardComponents/Header";
import Balance from "@/components/TransferComponents/Balance";
import CapitalWealth from "@/components/SavingsComponents/CapitalWealth";
import Savebox from "@/components/SavingsComponents/Savebox";
import TargetSavings from "@/components/SavingsComponents/TargetSavings";
import SavingDetails from "@/components/SavingsComponents/SavingDetails";
import SavingsHeader from "@/components/SavingsComponents/SavingsHeader";


export const revalidate = 30
const page = async () => {

    const { user } = await getUserDetails();

    return ( 
        <main>
            <Header page="Savings" profilePicSrc={user?.profileImgSrc}/>
            <div className="px-4 md:px-6 xl:px-8 flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between mt-5 lg:mt-10">
                <div className="lg:w-[49%] border border-[#7676801F] rounded-lg p-4">
                    <SavingsHeader />
                    <div className="flex flex-wrap justify-between gap-y-5">
                        <CapitalWealth />
                        <Savebox />
                        <TargetSavings />
                    </div>
                </div>
                <div className="lg:w-[49%] flex flex-col gap-y-10 border border-[#7676801F] rounded-lg p-4">
                    <Balance />
                    <SavingDetails />
                </div>
            </div>
        </main>
     );
}
 
export default page;