import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import Header from "@/components/DashboardComponents/Header";
import GeneralDetails from "@/components/ProfileComponents/GeneralDetails";
import SmallScreenAccount from "@/components/DashboardComponents/SmallScreenAccount";

export const revalidate = 1
const page = async () => {

    const { user } = await getUserDetails();

    return ( 
        <main>
           <Header page="Profile" profilePicSrc={user?.profileImgSrc} name={`${user?.firstName} ${user?.lastName}`} accountNumber={user?.accountNumber}/> 
           <div className="px-4 md:px-6 xl:px-8">
                <SmallScreenAccount firstName={user?.firstName} lastName={user?.lastName} accountNumber={user?.accountNumber}/>
            </div>
           <div>
            <GeneralDetails user={user}/>
           </div>
        </main>
     );
}
 
export default page;