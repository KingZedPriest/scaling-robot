import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import Header from "@/components/DashboardComponents/Header";
import Transfer from "@/components/TransferComponents/Transfer";
import LastTransactions from "@/components/TransferComponents/LastTransactions";
import Convert from "@/components/TransferComponents/Convert";
import Balance from "@/components/TransferComponents/Balance";
import PaymentDetails from "@/components/TransferComponents/PaymentDetails";

export const revalidate = 30
const page = async () => {

    const { user } = await getUserDetails();
    //console.log({user})

    return ( 
        <main>
            <Header page="Transfers" profilePicSrc={user?.profileImgSrc}/>
            <div className="px-4 md:px-6 xl:px-8 flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between mt-5 lg:mt-10">
                <div className="lg:w-[49%] flex flex-col gap-y-10 border border-[#7676801F] rounded-lg p-4">
                    <Transfer />
                    <Convert />
                </div>
                <div className="lg:w-[49%] flex flex-col gap-y-10 border border-[#7676801F] rounded-lg p-4">
                    <Balance />
                    <PaymentDetails userid={user?.id} userPin={user?.transactionPin} name={`${user?.firstName} ${user?.lastName}`} email={user?.email}/>
                    <LastTransactions />
                </div>
            </div>
        </main>
     );
}
 
export default page;