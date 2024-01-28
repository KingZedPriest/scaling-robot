"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { fetchExchangeRate } from "@/lib/currencyConverter";

//Import Needed Icons
import { ArrowDown2, ArrowRight3 } from "iconsax-react";
//Import Images
import germanFlag from "../../../public/Images/germany.svg";
import ukFlag from "../../../public/Images/united kingdom.svg";
import usFlag from "../../../public/Images/united states.svg";
import chinaFlag from "../../../public/Images/china.svg";
import canadaFlag from "../../../public/Images/canada.svg";
import japanFlag from "../../../public/Images/japan.svg";


const Convert = () => {
    //Currency state
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [chosenCurrency, setChosenCurrency] = useState<string>("united")
    const [convertedAmount, setConvertedAmount] = useState<number>(0)
    const [toConvertAmount, setToConvertAmount] = useState<number>(0)
    const [flag, setFlag] = useState(ukFlag)
    const [country, setCountry] = useState<string>("united")
    const [countrySymbol, setCountrySymbol] = useState<string>("GBP")

    //Functions
    const openModal = () => {
        setModalOpen((prev) => !prev)
    }
//Currency switch statement
useEffect(() => {
    
    switch (chosenCurrency) {
    case "united":
        setFlag (ukFlag)
        setCountry ("United Kingdom")
        setCountrySymbol ("GBP")
        break;
    case "america":
        setFlag (usFlag)
        setCountry ("United States")
        setCountrySymbol ("USD")
        break;
    case "canada":
        setFlag (canadaFlag)
        setCountry ("Canada")
        setCountrySymbol ("CAD")
        break;
    case "china":
        setFlag (canadaFlag)
        setCountry ("China")
        setCountrySymbol ("CNY")
        break;
    case "japan":
        setFlag (japanFlag)
        setCountry ("Japan")
        setCountrySymbol ("JPY")
        break;
    default:
        setFlag (ukFlag)
        setCountry ("United Kingdom")
        setCountrySymbol ("GBP")
        break;
    } 
}, [chosenCurrency])
//Currency conversion
useEffect (() => {
    const fromCurrency = 'EUR';
    fetchExchangeRate({toConvertAmount, fromCurrency, countrySymbol})
    .then((exchangeRate) => {
    setConvertedAmount(exchangeRate)
  })
  .catch((error) => {
    // Handle error
    console.error(error);
  });
    
}, [countrySymbol, toConvertAmount])
    return ( 
        <main>
            <p className="text-sm lg:text-base text-[#06121B] font-semibold my-4">Convert Amount</p>
            <div className=" flex flex-col gap-y-5 2xl:gap-y-0 2xl:flex-row 2xl:justify-between 2xl:items-center">
                <div className="min-w-[14rem] 2xl:w-[39%]">
                    <div className=" bg-[#EBEBF52E] p-3 border border-[#7676801F] flex items-center justify-between rounded-lg">
                        <p className="text-xs 2xl:text-sm text-[#B2B3BA]">From:</p>
                        <div className="flex items-center gap-x-2">
                            <Image src={germanFlag} alt="German Flag"/>
                            <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">German</p>
                        </div>
                    </div>
                    <div className="bg-[#EBEBF52E] p-3 border border-[#7676801F] flex justify-between items-center mt-4 rounded-lg">
                        <div className="w-[80%] flex flex-col gap-y-1">
                            <p className="text-xs 2xl:text-sm text-[#B2B3BA]">You send:</p>
                            <input type="number" 
                            onChange={(e : any) => {setToConvertAmount(e.target.value)}}
                            name="convertAmount" 
                            id="convertAmount"
                            className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none placeholder:text-xs xl:placeholder:text-sm placeholder:text-[#9EA0A3]" 
                            />
                        </div>
                        <p className="text-[10px] md:text-[12px] xl:text-[14px] text-secondary font-semibold">EUR</p>
                    </div>
                </div>
                
                <div className="size-10 rounded-[50%] flex items-center justify-center text-[#F2F2F7] bg-secondary mx-auto cursor-pointer border border-secondary hover:text-secondary hover:bg-white duration-500">
                    <ArrowRight3 size="20" className=" -rotate-[30deg] xl:rotate-0"/>
                </div>
                <div className="relative min-w-[14rem] 2xl:w-[39%] cursor-pointer" onClick={openModal}>
                    <div className=" bg-[#EBEBF52E] p-3 border border-[#7676801F] flex items-center justify-between rounded-lg">
                        <p className="text-xs 2xl:text-sm text-[#B2B3BA]">To:</p>
                        <div className="flex items-center gap-x-1">
                            <Image src={flag ?? ukFlag} alt="German Flag"/>
                            <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">{country}</p>
                            <ArrowDown2 size="20" className={`${modalOpen && "rotate-180"} duration-200`}/>
                        </div>
                    </div>
                    <div className="bg-[#EBEBF52E] p-3 border border-[#7676801F] flex justify-between items-center mt-4 rounded-lg">
                        <div className="w-[80%] flex flex-col gap-y-1">
                            <p className="text-xs 2xl:text-sm text-[#B2B3BA]">Recipient gets:</p>
                            <p className="text-lg xl:text-xl font-semibold py-2 md:py-3">{convertedAmount}</p>
                        </div>
                        <p className="text-[10px] md:text-[12px] xl:text-[14px] text-secondary font-semibold">{countrySymbol}</p>
                    </div>
                {modalOpen && 
                        <div className="bg-white border border-[#7676801F] absolute p-4 w-full top-14 flex flex-col gap-y-1 rounded-lg z-[999999]">
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("america"); openModal}}>
                                <Image src={usFlag} alt="US flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">United States</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("canada"); openModal}}>
                                <Image src={canadaFlag} alt="Canada flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Canada</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("china"); openModal}}>
                                <Image src={chinaFlag} alt="Chinese flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">China</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("united"); openModal}}>
                                <Image src={ukFlag} alt="United Kingdom Flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">United Kingdom</p>
                            </div>
                            <div className="flex gap-x-2 hover:bg-[#EBEBF52B] rounded-md duration-500 p-3 items-center cursor-pointer" onClick={() => {setChosenCurrency("japan"); openModal}}>
                                <Image src={japanFlag} alt="Japanese flag"/>
                                <p className="font-medium text-[12px] md:text-[14px] xl:text-[16px]">Japan</p>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </main>
     );
}
 
export default Convert;