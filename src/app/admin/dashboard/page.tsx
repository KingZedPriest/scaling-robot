//Import Needed Components
import Header from "@/components/AdminComponents/Header";
import Activity from "@/components/AdminComponents/Activity";

const page = () => {
  return (
    <main>
        <Header page="Administration Dashboard"/>
        <div className="px-4 md:px-6 xl:px-8 py-4">
            <Activity />
        </div>
    </main>
  );
};

export default page;
