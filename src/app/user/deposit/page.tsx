import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import Header from "@/components/DashboardComponents/Header";
import DepositInfo from "@/components/DepositComponents/DepositInfo";
import SmallScreenAccount from "@/components/DashboardComponents/SmallScreenAccount";

const page = async () => {

    const { user } = await getUserDetails();

    return ( 
        <main>
            <Header page="Deposit" profilePicSrc={user?.profileImgSrc} name={`${user?.firstName} ${user?.lastName}`} accountNumber={user?.accountNumber}/>
            <div className="px-4 md:px-6 xl:px-8">
                <SmallScreenAccount firstName={user?.firstName} lastName={user?.lastName} accountNumber={user?.accountNumber}/>
                <DepositInfo />
            </div>
        </main>
     );
}
 
export default page;