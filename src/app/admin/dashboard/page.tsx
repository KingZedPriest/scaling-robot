import getTransactions from "@/actions/getAllTransactions";
//Import Needed Components
import Header from "@/components/AdminComponents/Header";
import Activity from "@/components/AdminComponents/Activity";
import LastTransactions from "@/components/AdminComponents/LastTransactions";

export const revalidate = 1
const page = async () => {

  const transactions = await await getTransactions()
  const lastSevenTransactions = transactions?.slice(-7)
  return (
    <main>
        <Header page="Administration Dashboard"/>
        <div className="px-4 md:px-6 xl:px-8 py-4">
            <Activity />
            <LastTransactions transactions={lastSevenTransactions}/>
        </div>
    </main>
  );
};

export default page;
