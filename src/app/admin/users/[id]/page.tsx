import Image from "next/image";

import getIndividualUser from "@/actions/getIndividualUser";
import getIndividualUserTransaction from "@/actions/getIndividualUserTransaction";
import { formatDate, formatDateTime } from "@/lib/dateTimeUtils";
import Link from "next/link";

//Import Needed Components
import Header from "@/components/AdminComponents/Header";
import { Bill, MoneyRecive, MoneySend, WalletMoney } from "iconsax-react";


export const revalidate = 1;
const page = async ({ params }: { params: { id: string } }) => {

    const userId = params.id;
    const currentUserArray = await getIndividualUser(userId)
    const currentUser = currentUserArray[0]
    const userTransaction = await getIndividualUserTransaction(userId)
    //console.log({userTransaction})

    return ( 
        <main>
           <Header page="User Profile" />
           <div className="px-4 md:px-6 xl:px-8 py-4">
                <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row lg:justify-between">
                    <div className="lg:w-[40%] border border-[#7676801F] p-4 rounded-xl">
                        <p className="text-xs md:text-sm xl:text-base font-semibold text-[#141619]">Personal Information</p>
                        <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row lg:gap-x-4 mt-8">
                            <div className="relative size-10 md:size-12 xl:size-16 rounded-[50%]">
                                <Image src={currentUser.profileImgSrc} alt={`${currentUser.firstName} picture`} className="rounded-[50%] absolute" fill/>
                            </div>
                            <div className="flex flex-col gap-y-2 text-[#141619] text-xs md:text-sm xl:text-base">
                                <p className="capitalize">{currentUser.firstName} {currentUser.lastName}</p>
                                <p>{currentUser.email}</p>
                                <p>{formatDateTime(currentUser.dateOfBirth)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-[58%] border border-[#7676801F] p-4 rounded-xl">
                        <p className="text-xs md:text-sm xl:text-base font-semibold text-[#141619]">Contact Information</p>
                        <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row lg:gap-x-2 mt-8 text-[#141619] text-xs md:text-sm xl:text-base">
                            <div className="flex flex-col gap-y-2">
                                <div className="flex gap-x-1">
                                    <p className="text-[#B9BAC0]">City:</p>
                                    <p>{currentUser.city}</p>
                                </div>
                                <div className="flex gap-x-1">
                                    <p className="text-[#B9BAC0]">State:</p>
                                    <p>{currentUser.state}</p>
                                </div>
                                <div className="flex gap-x-1">
                                    <p className="text-[#B9BAC0]">Mobile Number:</p>
                                    <p>{currentUser.mobileNumber}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-y-2">
                                <div className="flex gap-x-1">
                                    <p className="text-[#B9BAC0]">Address:</p>
                                    <p>{currentUser.address}</p>
                                </div>
                                <div className="flex gap-x-1">
                                    <p className="text-[#B9BAC0]">Country:</p>
                                    <p>{currentUser.country}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row lg:justify-between mt-8">
                    <div className="lg:w-[49%] border border-[#7676801F] p-4 rounded-xl">
                        <p className="text-xs md:text-sm xl:text-base font-semibold text-[#141619]">Security details</p>
                        <div className="mt-8 flex flex-col gap-y-2 text-[#141619] text-xs md:text-sm xl:text-base">
                                <div className="flex gap-x-1">
                                    <p className="text-[#B9BAC0]">ID Type:</p>
                                    <p>{currentUser.idType}</p>
                                </div> 
                                <div className="flex gap-x-1">
                                    <p className="text-[#B9BAC0]">ID Number:</p>
                                    <p>{currentUser.idNumber}</p>
                                </div>
                                <div className="flex gap-x-1">
                                    <p className="text-[#B9BAC0]">Date of Expiration:</p>
                                    <p>{formatDateTime(currentUser.dateOfExpiry)}</p>
                                </div>
                        </div>
                    </div>
                    <div className="lg:w-[49%] border border-[#7676801F] p-4 rounded-xl">
                        <p className="text-xs md:text-sm xl:text-base font-semibold text-[#141619]">IDs</p>
                        <div className="flex justify-between mt-8">
                            <div className="relative rounded-lg w-[49%] h-60">
                                <Image src={currentUser.idCardFrontImgSrc} alt={`${currentUser.firstName} Front ID`} className="rounded-lg absolute" fill/>
                            </div>
                            <div className="relative rounded-lg w-[49%] h-60">
                                <Image src={currentUser.idCardBackImgSrc} alt={`${currentUser.firstName} Back ID`} className="rounded-lg absolute" fill/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3 lg:gap-y-0 lg:flex-row lg:justify-between mt-8">
                    <div className="lg:w-[49%] border border-[#7676801F] p-4 rounded-xl">
                        <p className="text-xs md:text-sm xl:text-base font-semibold text-[#141619]">Activity</p> 
                    </div>
                    <div className="lg:w-[49%] border border-[#7676801F] p-4 rounded-xl">
                        <p className="text-xs md:text-sm xl:text-base font-semibold text-[#141619]">Transaction History</p>
                        {userTransaction && userTransaction.map((transaction: any) => (
                    <Link key={transaction.id} href={`/user/history`}>
                        <div className="flex items-center justify-between py-4">
                            <div className="flex gap-x-1 items-center">
                                <div className={`${ transaction.type === "Deposit" ? "bg-[#2DE3001A]" : "bg-[#DB64641A]"}  rounded-[50%] p-2`}>
                                    {transaction.type === "Deposit" ? <MoneyRecive size="24" color="#198754"/> : transaction.type.includes('Wire_Transfer') ? <MoneySend size="24" color="#DC3545"/> : transaction.type === "Utility_Bill" ? <Bill size="24" color="#DC3545"/> : <WalletMoney size="24" color="#DC3545"/> }
                                </div>
                    
                                <div className="flex flex-col gap-y-0.5">
                                    <p className="text-[#141619] text-[12px] md:text-[14px] xl:text-[16px] font-semibold capitalize">{transaction.type === "Deposit" ? "Deposit" : transaction.type === "Domestic_Wire_Transfer" ? "Local Wire Transfer" : transaction.type === "International_Wire_Transfer" ? "International Wire Transfer" : transaction.type === "Utility_Bill" ? "Utility Bill" : "Savings"}</p>
                                    <p className="text-[#9EA0A3] text-[0.6rem] xl:text-xs">{transaction.doneByAdmin ? formatDate(transaction.customCreatedTime) : formatDate(transaction.createdAt)}.</p>
                                </div>
                            </div>
                            <p className={`${transaction.type === "Deposit" ? "text-[#198754]" : "text-[#DC3545]"} text-xs md:text-sm xl:text-base font-medium`}>{transaction.type === "Deposit" ? `+€${transaction.amount}` : `-€${transaction.amount}`}</p>
                        </div>
                    </Link>
                ))}
                    </div>
                </div>
            </div> 
        </main>
     );
}
 
export default page;