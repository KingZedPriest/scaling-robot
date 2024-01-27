"use client"
import { useState, useEffect } from "react";

//Import Needed Icons
import { ArrowRotateRight } from "iconsax-react";

const Transfer = () => {
    //States for the input
    const [inputValue, setInputValue] = useState<string>('');
    const [showInputField, setShowInputField] = useState<boolean>(false)
    const [showIcon, setShowIcon] = useState<boolean>(false);

    //Use Effect for the Input field
    useEffect(() => {

        if (inputValue.length > 0) {

          setShowIcon(true)
          
    
          const timeoutId = setTimeout(() => {
            setShowIcon(false);
            setShowInputField(true)
          }, 12000);
    
          return () => clearTimeout(timeoutId);
        } else {
          // If the input value is empty, hide the icon
          setShowIcon(false);
        }
      }, [inputValue]);

  return (
    <main className="text-xs md:text-sm xl:text-base">
      <form>
        <div className="flex flex-col gap-y-1">
          <label
            htmlFor="accountNumber"
            className="text-sm lg:text-base text-[#06121B] font-semibold cursor-pointer"
          >
            Account number
          </label>
          <input
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)}
            required
            placeholder="0930202020"
            pattern="\d{10}"
            type="text"
            title="Please enter a 10 digit account number"
            name="accountNumber"
            id="accountNumber"
            className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
          />
        </div>
        {showIcon &&
        <div className="flex gap-x-2 items-center mt-4">
            <ArrowRotateRight size="24" className="text-primary animate-spin"/>
            <p className="text-xs xl:text-sm text-textPrimary">Fetching Account Details</p>
        </div> }
        {showInputField && 
        <div className="mt-6">
            <p className="text-red-600 text-xs xl:text-sm mb-4">Couldn&apos;t fetch account details, kindly enter them below</p>
            <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="bankName"
                  className="text-sm lg:text-base text-[#06121B] font-semibold cursor-pointer"
                >
                  Bank name
                </label>
                <input
                    required
                    placeholder="Deutsche Bank"
                    type="text"
                    title="Please enter a 10 digit account number"
                    name="bankName"
                    id="bankName"
                    className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
                />
            </div>
            <div className="flex flex-col gap-y-1 mt-4">
                <label
                  htmlFor="accountName"
                  className="text-sm lg:text-base text-[#06121B] font-semibold cursor-pointer"
                >
                  Account name
                </label>
                <input
                    required
                    placeholder="John Doe"
                    type="text"
                    name="accountName"
                    id="accountName"
                    className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]"
                />
            </div>
        </div>
        }
      </form>
    </main>
  );
};

export default Transfer;


//pattern="\d+"
