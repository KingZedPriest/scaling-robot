import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import Header from "@/components/DashboardComponents/Header";
import GeneralDetails from "@/components/ProfileComponents/GeneralDetails";

const page = async () => {

    const { user } = await getUserDetails();

    return ( 
        <main>
           <Header page="Profile" profilePicSrc={user?.profileImgSrc}/> 
           <div>
            <GeneralDetails />
           </div>
        </main>
     );
}
 
export default page;