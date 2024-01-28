"use client"
import { useTransactionStore } from "@/store/transactionStore";
const PaymentDetails = () => {
    //OnSubmit Function
    
    const {isSavebox, amount, accountName, accountNumber, depositMethod, bankName, swiftCode, description, iban} = useTransactionStore()
    return ( 
        <main className="text-xs md:text-sm xl:text-base">
            <p className="text-sm lg:text-base text-[#06121B] font-semibold mb-4">Payment Details</p>
            <div className="border border-[#7676801F] mt-4 p-4 rounded-lg">
                <div className="flex justify-between items-center">
                    <p className="text-[10px] xl:text-[12px] text-[#B2B3BA]">Transfer Fee</p>
                    <p className="font-medium text-[#06121B]">{depositMethod === "International_Wire_Transfer" ? "€5" : depositMethod === "Domestic_Wire_Transfer" ? "€0" : ""}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-[10px] xl:text-[12px] text-[#B2B3BA]">Account Name</p>
                    <p className="font-medium text-[#06121B]">{accountName}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-[10px] xl:text-[12px] text-[#B2B3BA]">Account Number</p>
                    <p className="font-medium text-[#06121B]">{accountNumber}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-[10px] xl:text-[12px] text-[#B2B3BA]">Bank Name</p>
                    <p className="font-medium text-[#06121B]">{bankName}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-[10px] xl:text-[12px] text-[#B2B3BA]">Deposit Method</p>
                    <p className="font-medium text-[#06121B]">{depositMethod === "International_Wire_Transfer" ? "International Wire Transfer" : depositMethod === "Domestic_Wire_Transfer" ? "Local Transfer" : ""}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-[10px] xl:text-[12px] text-[#B2B3BA]">Amount</p>
                    <p className="font-medium text-[#06121B]">{amount}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-[10px] xl:text-[12px] text-[#B2B3BA]">Description</p>
                    <p className="font-medium text-[#06121B]">{description}</p>
                </div>
                <div className="flex justify-between items-center mt-2">
                    <p className="text-[10px] xl:text-[12px] text-[#B2B3BA]">Save 1%</p>
                    <p className="font-medium text-[#06121B]">{isSavebox === true ? "Yes" : "No"}</p>
                </div>
                {depositMethod === "International_Wire_Transfer" && <div>
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-[10px] xl:text-[12px] text-[#B2B3BA]">Swift Code</p>
                        <p className="font-medium text-[#06121B]">{swiftCode}</p>
                    </div> 
                    <div className="flex justify-between items-center mt-2">
                        <p className="text-[10px] xl:text-[12px] text-[#B2B3BA]">IBAN</p>
                        <p className="font-medium text-[#06121B]">{iban}</p>
                    </div>
                </div>}
            </div>
            <form>
                <input type="submit" value="Confirm" className="bg-[#D56F3E] cursor-pointer mt-8 flex w-full items-center justify-center gap-x-1.5 rounded-md py-2 text-sm text-white sm:text-base md:py-3 lg:text-lg"/>
            </form>
        </main>
     );
}
 
export default PaymentDetails;