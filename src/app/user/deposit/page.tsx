import { getUserDetails } from "@/providers/userDetails";

//Import Needed Components
import Header from "@/components/DashboardComponents/Header";

const page = async () => {

    const { user } = await getUserDetails();

    return ( 
        <main>
            <Header page="Deposit" profilePicSrc={user?.profileImgSrc} name={`${user?.firstName} ${user?.lastName}`} accountNumber={user?.accountNumber}/>
        </main>
     );
}
 
export default page;