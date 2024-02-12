import getSuspendedUser from "@/actions/getAllSuspendedUsers";

//Import Needed Components
import Header from "@/components/AdminComponents/Header";

const page = async () => {

    return ( 
        <main>
            <Header page="Administration Suspension" />
            <div className="px-4 md:px-6 xl:px-8 py-4">

            </div>
        </main>
     );
}
 
export default page;