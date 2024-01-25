import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import Header from "@/components/DashboardComponents/Header";
import AccountDetails from "@/components/DashboardComponents/AccountDetails";

const page = async () => {

    const { user } = await getUserDetails();

    return ( 
        <main>
            <Header page="Dashboard" profilePicSrc={user?.profileImgSrc}/>
            <div className="px-4 md:px-6 xl:px-8 flex flex-col gap-y-5 lg:gap-y-0 lg:flex-row justify-between mt-10">
                <div className="lg:w-[49%] flex flex-col gap-y-5 ">
                    <AccountDetails />
                </div>
                <div className="lg:w-[49%] flex flex-col gap-y-5 ">

                </div>
            </div>
        </main>
     );
}
 
export default page;