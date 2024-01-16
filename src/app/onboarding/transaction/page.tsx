"use client"
import { useState } from "react";
import Image from "next/image";

//Import Needed Images
import logo from "../../../../public/Images/logo.svg";
import arrow from "../../../../public/Images/arrowRight.svg";

//Import Icons
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";

const Page = () => {
    const [seen, setSeen] = useState<boolean>(false)
    const [seen1, setSeen1] = useState<boolean>(false)

    const handleSeePassword = () => {
        setSeen ((prev) => (!prev))
    }

    const handleSeePassword1 = () => {
        setSeen1 ((prev) => (!prev))
    }

  return (
    <main className="h-screen lg:flex">
      <div className="flex h-full flex-col justify-center px-6 sm:px-8 md:px-10 lg:w-1/2 lg:px-12 xl:px-14 2xl:px-16">
        <div className="flex gap-x-1">
          <Image src={logo} alt="Capital Sphere Bank Logo" priority={true} />
          <div className="text-[#1C1F33] font-semibold text-xs sm:text-sm xl:text-base">
            <p>Capital</p>
            <p className="-mt-1">Sphere</p>
            <p className="-mt-1">Bank</p>
          </div>
          </div>
          <div>
            <p className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl mt-14">
              Transaction Pin
            </p>
            <p className="font-medium text-xs sm:text-sm xl:text-base mt-4">
                Finish setting up your account, by entering your four(4) digit pin
            </p>
          </div>
        <form action="" className="mt-10">
            <div className="relative flex flex-col gap-y-1">
              <label className="cursor-pointer" htmlFor="pin">Pin</label>
              <input type={seen ? "number" : "password"} maxLength={4} name="pin" id="pin" className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none" placeholder="XXXX"/>
              <div className="absolute top-[55%] right-4 cursor-pointer text-base sm:text-lg md:text-xl xl:text-2xl" onClick={handleSeePassword}>{seen ? <BsEyeSlash /> : <BsEye />}</div>
            </div>
            <div className="relative flex flex-col gap-y-1 mt-6">
              <label className="cursor-pointer" htmlFor="confirmPin">Confirm Pin</label>
              <input type={seen1 ? "number" : "password"} maxLength={4} name="confirmPin" id="confirmPin" className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none" placeholder="XXXX"/>
              <div className="absolute top-[55%] right-4 cursor-pointer text-base sm:text-lg md:text-xl xl:text-2xl" onClick={handleSeePassword1}>{seen1 ? <BsEyeSlash /> : <BsEye />}</div>
            </div>
            <button type="submit" className="group mt-14 flex w-full items-center justify-center gap-x-1.5 rounded-md bg-secondary py-2 text-sm text-white sm:text-base md:py-3 lg:text-lg">
                Finish
                <Image src={arrow} alt="Right Arrow" className="transition duration-500 group-hover:translate-x-2"/>
            </button>
        </form>
      </div>
      <div className="createBackground hidden lg:block lg:w-1/2"></div>
    </main>
  );
};

export default Page;
