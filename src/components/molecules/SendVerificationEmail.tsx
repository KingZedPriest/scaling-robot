"use client"
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import { useSearchParams } from 'next/navigation'
import { useOtpStore } from "@/store/verification";




const SendVerificationEmail = () => {
//Zustand OTP Management
const { otpNumber } = useOtpStore()
const searchParams = useSearchParams()
const email = searchParams.get('email')
const fullName = searchParams.get('name')

const sendVerificationNumber = () => {
    const formData = {
      to: email,
      subject: "Your Verification Code",
      name: fullName,
      otp: otpNumber
    };
  
    toast.info("Sending verification code");
  
    makeApiRequest("/send-email", "post", formData, {
      onSuccess: () => {
        // Handle success
        toast.success("Verification code was sent successfully");
      },
      onError: (error: any) => {
        // Handle error
        toast.error(error.message);
      },
    });
  };

  return (
    <main className="text-[#161618] text-xs sm:text-sm xl:text-base my-4 cursor-pointer">
      <p onClick={sendVerificationNumber}>Get Verification Pin</p>
    </main>
  );
};

export default SendVerificationEmail;
