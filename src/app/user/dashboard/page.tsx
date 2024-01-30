import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import Header from "@/components/DashboardComponents/Header";
import SmallScreenAccount from "@/components/DashboardComponents/SmallScreenAccount";
import AccountDetails from "@/components/DashboardComponents/AccountDetails";
import Activity from "@/components/DashboardComponents/Activity";
import TransferHistory from "@/components/DashboardComponents/TransferHistory";
import AccountSummary from "@/components/DashboardComponents/AccountSummary";
import ATM from "@/components/DashboardComponents/ATM";

export const revalidate = 30
const page = async () => {

    const { user } = await getUserDetails();
    const transactions = user?.transactions
    const lastFiveTransactions = transactions?.slice(-5);
    const wireTransferTransactions = transactions?.filter((transaction) => transaction.type.includes('Wire_Transfer'));
    const deposits = transactions?.filter((transaction) => transaction.type === "Deposit");

    return ( 
        <main>
            <Header page="Dashboard" profilePicSrc={user?.profileImgSrc}/>
            <div className="px-4 md:px-6 xl:px-8">
                <SmallScreenAccount firstName={user?.firstName} lastName={user?.lastName} accountNumber={user?.accountNumber}/>
            </div>
            <div className="px-4 md:px-6 xl:px-8 flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between mt-5 lg:mt-10">
                <div className="lg:w-[49%] flex flex-col gap-y-10 ">
                    <AccountDetails />
                    <TransferHistory transactions={lastFiveTransactions}/>
                </div>
                <div className="lg:w-[49%] flex flex-col gap-y-10 ">
                    <Activity wireTransfer={wireTransferTransactions} deposits={deposits}/>
                    <AccountSummary firstName={user?.firstName} lastName={user?.lastName} accountNumber={user?.accountNumber}/>
                    <ATM email={user?.email} hasRequested={user?.atmRequest} name={`${user?.firstName} ${user?.lastName}`}/>
                </div>
            </div>
        </main>
     );
}
 
export default page;