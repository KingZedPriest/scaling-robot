import Image from "next/image";

//Import Needed Components
import Progress from "@/components/AuthComponents/Progress";

//Import Needed Images
import logo from "../../../public/Images/logo.svg";
import arrow from "../../../public/Images/arrowRight.svg";

const VerificationForm = () => {
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
        <div className="text-[#161618] mt-10 mb-4">
            <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">
              Set up your account
            </p>
            <p className="text-xs sm:text-sm xl:text-base font-semibold mt-4">
              Welcome, let&apos;s get started
            </p>
        </div>
        <Progress activeDiv={3} />
            <p className="font-bold text-lg sm:text-xl md:text-2xl xl:text-3xl mt-14">
              Verification
            </p>
            <p className="font-medium text-xs sm:text-sm xl:text-base mt-4">
              You will receive an e-mail OTP. Input OTP to open up your account.
            </p>
        <form action="">
          <div className="flex flex-col gap-y-1 mt-10">
            <label className="cursor-pointer" htmlFor="otp">
              OTP
            </label>
            <input
              type="number"
              name="otp"
              id="otp"
              className="border border-[#E6E7E8] px-2 xl:px-4 py-2 md:py-3 focus:border-primary rounded-md focus:outline-none"
              placeholder="Enter The OTP"
            />
          </div>
          <button
            type="submit"
            className="group mt-12 flex w-full items-center justify-center gap-x-1.5 rounded-md bg-secondary py-2 text-sm text-white sm:text-base md:py-3 lg:text-lg"
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
);
}
 
export default VerificationForm;