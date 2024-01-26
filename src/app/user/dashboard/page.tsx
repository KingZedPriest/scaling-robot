import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import Header from "@/components/DashboardComponents/Header";
import SmallScreenAccount from "@/components/DashboardComponents/SmallScreenAccount";
import AccountDetails from "@/components/DashboardComponents/AccountDetails";
import Activity from "@/components/DashboardComponents/Activity";
import TransferHistory from "@/components/DashboardComponents/TransferHistory";
import AccountSummary from "@/components/DashboardComponents/AccountSummary";

const page = async () => {

    const { user } = await getUserDetails();

    return ( 
        <main>
            <Header page="Dashboard" profilePicSrc={user?.profileImgSrc}/>
            <div className="px-4 md:px-6 xl:px-8">
                <SmallScreenAccount firstName={user?.firstName} lastName={user?.lastName} accountNumber={user?.accountNumber}/>
            </div>
            <div className="px-4 md:px-6 xl:px-8 flex flex-col gap-y-10 lg:gap-y-0 lg:flex-row justify-between mt-5 lg:mt-10">
                <div className="lg:w-[49%] flex flex-col gap-y-10 ">
                    <AccountDetails />
                    <TransferHistory />
                </div>
                <div className="lg:w-[49%] flex flex-col gap-y-10 ">
                    <Activity />
                    <AccountSummary firstName={user?.firstName} lastName={user?.lastName} accountNumber={user?.accountNumber}/>
                </div>
            </div>
        </main>
     );
}
 
export default page;