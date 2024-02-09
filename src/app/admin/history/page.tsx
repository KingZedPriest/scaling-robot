import getTransactions from "@/actions/getAllTransactions";
import Header from "@/components/AdminComponents/Header";
import AllTransactions from "@/components/AdminComponents/AllTransactions";

const page = async () => {

    const transactions = await getTransactions();

    return ( 
        <main>
           <Header page="Administration History" /> 
            <div className="px-4 md:px-6 xl:px-8 py-4">
                <AllTransactions transactions={transactions}/>
            </div>
        </main>
     );
}
 
export default page;