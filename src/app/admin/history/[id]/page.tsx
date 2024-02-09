import getIndividualTransaction from "@/actions/getIndividualTransaction";
import getIndividualUser from "@/actions/getIndividualUser";
import Link from "next/link";

//Import Needed Icons
import { AddCircle } from "iconsax-react";

export const revalidate = 1;
const page = async ({ params }: { params: { id: string } }) => {

    const transactionId = params.id;
    const currentTransactionArray = await getIndividualTransaction(transactionId)
    console.log({currentTransactionArray})

    return ( 
        <main className="fixed h-screen w-full bg-black bg-opacity-80 flex items-center justify-center z-[700] top-0 left-0">
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[40%] p-2 sm:p-4 md:p-6 xl:p-8 bg-white flex flex-col gap-y-3 rounded-lg">
                <div className="flex items-center justify-between">
                    <p className="tex-base md:text-xl xl:text-2xl text-[#020100] font-semibold mt-4">
                      Transaction details
                    </p>
                    <Link href="/admin/history"><AddCircle size="32" variant="Bold" className="rotate-45 text-primary"/></Link>
                </div>
            </div>
        </main>
     );
}
 
export default page;