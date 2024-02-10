import Header from "@/components/AdminComponents/Header";
import getUsers from "@/actions/getAllUsers";

//Import Needed Components
import TransactionForm from "@/components/AdminComponents/TransactionForm";

export const revalidate = 1;
const page = async () => {

    const allUsers = await getUsers()
    const userNames = allUsers.map(user => `${user.firstName} ${user.lastName}`);
    //console.log(userNames);
    //console.log({allUsers})

    return ( 
        <main>
            <Header page="Administration Transfer" />
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <TransactionForm allUsers={allUsers}/>
            </div>
        </main>
     );
}
 
export default page;