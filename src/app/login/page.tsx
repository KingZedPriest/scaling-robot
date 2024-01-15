import Image from "next/image";

//Import Needed Images
import logo from "../../../public/Images/logo.svg";

//Import needed components
import LoginForm from "@/components/AuthComponents/LoginForm";

const page = () => {
    return ( 
        <main className="createBackground h-screen flex items-center justify-center">
            <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] bg-white shadow py-8 px-4 md:px-6 xl:px-8">
                <div className="flex gap-x-1">
                    <Image src={logo} alt="Capital Sphere Bank Logo" priority={true}/>
                    <div className="text-[#1C1F33] font-semibold text-xs sm:text-sm xl:text-base">
                        <p>Capital</p>
                        <p className="-mt-1">Sphere</p>
                        <p className="-mt-1">Bank</p>
                    </div>
                </div>
                <div className="text-[#161618] mt-10">
                    <p className="text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold">Sign In</p>
                    <p className="text-xs sm:text-sm xl:text-base font-semibold mt-2">Welcome back</p>
                </div>
                <LoginForm />
            </div>
        </main>
     );
}
 
export default page;