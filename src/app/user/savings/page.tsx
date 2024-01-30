import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import Header from "@/components/DashboardComponents/Header";

const page = async () => {

    const { user } = await getUserDetails();

    return ( 
        <main>
            <Header page="Savings" profilePicSrc={user?.profileImgSrc}/>
        </main>
     );
}
 
export default page;