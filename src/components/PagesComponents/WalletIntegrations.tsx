import Image from "next/image";

//Import Needed Icon
import { Money2 } from "iconsax-react";

//Import Needed Images
import applePay from "../../../public/Images/applePay.png";
import paypal from "../../../public/Images/PayPal.png";
import stripe from "../../../public/Images/stripe.png";
import wise from "../../../public/Images/wise.png";

const WalletIntegrations = () => {
    return ( 
        <main className="py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col gap-y-10 md:gap-y-0 md:flex-row md:justify-between items-center inter">
            <div className="md:w-[49%] flex flex-col gap-y-5 items-center">
                <div className="w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%]">
                    <div className="bg-[#FBF1EC] rounded-[50%] size-16 flex justify-center items-center">
                        <Money2 size="30" className="text-primary" variant="Bold"/>
                    </div>
                </div>
                
                <p className="text-[#020100] font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%]">Wallet Integrations</p>
                <p className="text-[#48484A] text-xs md:text-sm xl:text-base w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%]">Whether you&apos;re at home, at work, or on the go, our online banking platform is accessible from your computer, tablet, or mobile device. With our mobile banking app, you can even deposit checks and manage your accounts on the go.</p>
            </div>
            <div className="md:w-[49%] flex justify-center gap-x-5">
                <div className="w-1/2 flex flex-col gap-y-10">
                    <div>
                        <Image src={applePay} alt="Apple Pay Logo" className="w-10 md:w-14 xl:w-20"/>
                        <p className="text-[#48484A] text-xs md:text-sm xl:text-base mt-4">Make secure payments in stores, online, and in apps with just a touch of your Apple device.</p>
                    </div>
                    <div>
                        <Image src={stripe} alt="Stripe Logo" className="w-10 md:w-14 xl:w-20"/>
                        <p className="text-[#48484A] text-xs md:text-sm xl:text-base mt-4">Accept payments from customers around the world directly from your online banking platform.</p>
                    </div>
                </div>
                <div className="w-1/2 flex flex-col gap-y-10">
                    <div>
                        <Image src={paypal} alt="Paypal Logo" className="w-16 md:w-20 xl:w-[7rem]"/>
                        <p className="text-[#48484A] text-xs md:text-sm xl:text-base mt-4">Easily link your PayPal account to your online banking for seamless and secure online payments.</p>
                    </div>
                    <div>
                        <Image src={wise} alt="Wise Logo" className="w-12 md:w-16 xl:w-[6rem]"/>
                        <p className="text-[#48484A] text-xs md:text-sm xl:text-base mt-4">Easily and securely transfer funds to over 70 countries around the world at competitive rates.</p>
                    </div>
                </div>
            </div>
        </main>
     );
}
 
export default WalletIntegrations;