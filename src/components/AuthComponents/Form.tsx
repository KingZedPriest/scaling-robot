"use client";
import { ChangeEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
//Import Needed Components
import Progress from "@/components/AuthComponents/Progress";

//Import Needed Images
import arrow from "../../../public/Images/arrowRight.svg";
import uploadIcon from "../../../public/Images/uploadIcon.svg";

const Form = () => {
//Divs state
    const totalDivs =  2
  const [activeDiv, setActiveDiv] = useState(0);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const handleNext = () => {
    setActiveDiv((prev) => (prev + 1) % totalDivs);
  };

  const handlePrev = () => {
    setActiveDiv((prev) => (prev - 1 + totalDivs) % totalDivs);
  };
  return (
    <><Progress activeDiv={activeDiv}/>
    <main className="mt-16 text-xs md:text-sm xl:text-base text-[#161618]">
      <form action="">
        <div className="w-full flex overflow-x-hidden transition-transform duration-300 ease-in-out transform">
          <div className={`w-full shrink-0 ${activeDiv === 0 ? 'translate-x-0' : '-translate-x-full'} duration-500`}> 
            <div className="flex justify-between">
              <div className="w-[49%] flex flex-col gap-y-1">
                <label className="cursor-pointer" htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" className="border border-[#E6E7E8] px-2 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"placeholder="John"/>
              </div>
              <div className="w-[49%] flex flex-col gap-y-1">
                <label className="cursor-pointer" htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" className="border border-[#E6E7E8] px-2 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none" placeholder="Doe"/>
              </div>
            </div>
            <div className="flex flex-col gap-y-1 mt-6">
              <label className="cursor-pointer" htmlFor="email">Email</label>
              <input type="email" name="email" id="email" className="border border-[#E6E7E8] px-2 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none" placeholder="example@gmail.com"/>
            </div>
            <div className="flex flex-col gap-y-1 mt-6">
              <label className="cursor-pointer" htmlFor="date">Date of Birth</label>
              <input type="date" name="date" id="date" className="border border-[#E6E7E8] px-2 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"/>
            </div>
            <div className="flex flex-row gap-x-2 items-center mt-4">
              <label htmlFor="profilePicture" className="cursor-pointer flex gap-x-1.5 text-xs md:text-sm text-primary">Upload Picture <Image src={uploadIcon} alt="Upload Icon" /></label>
              <input type="file" accept="image/*" name="profilePicture" id="profilePicture" className="hidden"
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                  const file = e.target.files?.[0] || null;
                  setSelectedFile(file);
                }}
              />
              {selectedFile && (
                <Image
                  src={URL.createObjectURL(selectedFile)}
                  alt="Preview"
                  className="w-10 h-10 rounded-md"
                  width={80}
                  height={80}
                />
              )}
            </div>
          </div>
          <div className={`w-full shrink-0 ${activeDiv === 0 ? 'translate-x-0' : '-translate-x-full'} duration-500`}>
            <div className="flex justify-between">
              <div className="w-[49%] flex flex-col gap-y-1">
                <label className="cursor-pointer" htmlFor="city">City</label>
                <input type="text" name="city" id="city" className="border border-[#E6E7E8] px-2 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none" placeholder="City"/>
              </div>
              <div className="w-[49%] flex flex-col gap-y-1">
                <label className="cursor-pointer" htmlFor="state">State</label>
                <input type="text" name="state" id="state" className="border border-[#E6E7E8] px-2 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none" placeholder="State" />
              </div>
            </div>
            <div className="flex flex-col gap-y-1 mt-6">
              <label className="cursor-pointer" htmlFor="address">Address</label>
              <input type="text" name="address" id="address" className="border border-[#E6E7E8] px-2 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none" placeholder="Address"/>
            </div>
          </div>
        </div>

        <div className="my-8 flex justify-between">
          <p className={`cursor-pointer underline hover:-translate-x-2 duration-500 transition ${activeDiv > 0 ? "" : "text-gray-400 cursor-not-allowed"}`} onClick={activeDiv > 0 ? handlePrev : undefined}>Prev</p>
          <p className={`cursor-pointer underline hover:translate-x-2 duration-500 transition ${activeDiv == (totalDivs - 1) ? "text-gray-400 cursor-not-allowed" : ""} `} onClick={activeDiv < (totalDivs - 1) ? handleNext : undefined}>Next</p>
        </div>
        <p className="my-4">Already using Capital sphere bank?<span className="text-primary hover:underline duration-500"><Link href="/login"> Sign in here</Link></span></p>
        <button
          type="submit"
          className="group mt-8 flex w-full items-center justify-center gap-x-1.5 rounded-md bg-secondary py-2 text-sm text-white sm:text-base md:py-3 lg:text-lg"
        >
          Continue
          <Image
            src={arrow}
            alt="Right Arrow"
            className="transition duration-500 group-hover:translate-x-2"
          />
        </button>
      </form>
    </main>
    </>
  );
};

export default Form;
