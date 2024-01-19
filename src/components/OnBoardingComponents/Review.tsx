import Image from "next/image";

//Import Needed Images
import logo from "../../../public/Images/logo.svg";

const Review = () => {
    return ( 
        <main>
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
                    Application under review
                 </p>
            </div>
            <div className="font-medium text-xs sm:text-sm xl:text-base mt-10">
                <p>We have received your application and It is being reviewed. You will receive an email after review. If your application is accepted you can proceed to log in.
               <br /><br /> This might take 1 - 3 business days.</p>
            </div>
        </main>
     );
}
 
export default Review;