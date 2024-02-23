import Image from "next/image";

//Import Needed Images
import fourthImg from "../../../public/Images/fourthImg.svg";
const Fourth = () => {
    return ( 
        <main className="py-14 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col-reverse gap-y-10 md:gap-y-0 md:flex-row md:justify-between items-center inter">
            <div className="md:w-[49%] flex justify-center">
                <Image src={fourthImg} alt="Dashboard Image" className="p-2 sm:p-4 md:p-6 xl:p-8 bg-[#EBEBF599] rounded-xl"/>
            </div>
            <div className="md:w-[49%] flex flex-col items-center">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] text-[#020100]">Borderless Transfers for Global Connectivity</p>
                <p className="text-[#56575C] text-xs sm:text-sm md:text-base xl:text-lg mt-6 font-medium w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%]">Experience the power of seamless global transactions with our Borderless Transfer feature. We understand that your financial connections extend beyond borders, and our innovative service is designed to make international transfers effortless and efficient.</p>
            </div>
            
        </main>
     );
}
 
export default Fourth;