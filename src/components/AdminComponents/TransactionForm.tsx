"use client";
import { useTransactionStore } from "@/store/AdminTransactionStore";

//Import Needed Components
import Dropdown from "./Dropdown";
import DepositDropDown from "./DepositDropDown";

const TransactionForm = ({allUsers}: any) => {
  const {
    amount,
    accountName,
    accountNumber,
    depositMethod,
    bankName,
    swiftCode,
    description,
    iban,
    isSavebox,
    doneByAdmin,
    adminEmail,
    userId,
  } = useTransactionStore();
  const {
    updateAmount,
    updateAccountName,
    updateAccountNumber,
    updateDepositMethod,
    updateBankName,
    updateSwiftCode,
    updateDescription,
    updateIban,
    updateSaveBox,
    updateAdminEmail,
    reset,
  } = useTransactionStore();

  return (
    <main className="text-xs md:text-sm xl:text-base">
       <form>
        <Dropdown allUsers={allUsers}/>
        <DepositDropDown />
        
        {depositMethod && depositMethod !== "Deposit" && depositMethod !== "Capital_Wealth" && depositMethod !== "Utility_Bill" &&

            <div className="flex flex-col gap-y-1 mt-4">
            <label htmlFor="accountNumber" className="text-sm lg:text-base text-[#06121B] cursor-pointer">
                Account number
            </label>
            <input value={accountNumber} onChange={(e) => { updateAccountNumber(e.target.value) }}
              required
              placeholder="0930202020"
              pattern="\d{10}"
              type="text"
              title="Please enter a 10 digit account number"
              name="accountNumber"
              id="accountNumber"
              max={10}
              className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
            />
        </div>
        }
        
      </form>
    </main>
  );
};

export default TransactionForm;
