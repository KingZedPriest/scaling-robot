import getAdmins from "@/actions/getAllAdmins";
import getAdminTransactions from "@/actions/getAdminTransactions";

//Import Needed Components
import AllAdmins from "@/components/AdminComponents/AllAdmins";
import Header from "@/components/AdminComponents/Header";

const page = async () => {

    const admins = await getAdmins()
    const adminTransactions = await getAdminTransactions()

    return ( 
        <main>
            <Header page="Administration Staff" /> 
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <AllAdmins admins={admins} transactions={adminTransactions}/>
            </div>
        </main>
     );
}
 
export default page;