import { useCreateUserStore } from "@/store/accountCreation";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";

const formData = {
  to: "Charleschukwuemeka47@gmail.com",
  subject: "Your Verification Code",
};

const sendVerificationNumber = () => {
  makeApiRequest("/send-email", "post", formData, {
    onSuccess: () => {
      // Handle success
      toast.success("Email was sent successfully");
    },
    onError: (error: any) => {
      // Handle error
      toast.error(error.message);
    },
  });
};

const SendVerificationEmail = () => {
  // const { email } = useCreateUserStore()

  return (
    <main className="text-[#161618] text-xs sm:text-sm xl:text-base">
      <p onClick={sendVerificationNumber}>Get Verification Pin</p>
    </main>
  );
};

export default SendVerificationEmail;
