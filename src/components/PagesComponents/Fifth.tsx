import Image from "next/image";

//Import Needed Images
import thirdImg from "../../../public/Images/fifthImg.svg";

const Fifth = () => {
    return ( 
        <main className="py-14 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col gap-y-10 md:gap-y-0 md:flex-row md:justify-between items-center inter">
            <div className="md:w-[49%] flex flex-col items-center">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] text-[#020100]">Virtual or physical ⎯ it&apos;s your choice</p>
                <p className="text-[#56575C] text-xs sm:text-sm md:text-base xl:text-lg mt-6 font-medium w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%]">Whether you&apos;re at home, at work, or on the go, our online banking platform is accessible from your computer, tablet, or mobile device. With our mobile banking app, you can even deposit checks and manage your accounts on the go.</p>
            </div>
            <div className="md:w-[49%] flex justify-center">
                <Image src={thirdImg} alt="Dashboard Image" className="p-2 sm:p-4 md:p-6 xl:p-8 bg-[#EBEBF599] rounded-xl"/>
            </div>
        </main>
     );
}
 
export default Fifth;