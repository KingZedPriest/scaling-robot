"use client"

import { ChangeEvent, FormEvent, useState } from "react";
import { makeApiRequest } from "@/lib/apiUtils";
import { toast } from "sonner";
import Image from "next/image";

//Import Needed Images
import contactUs from "../../../public/Images/contactImg.svg";


const ContactUs = () => {
    const [loading, setLoading] = useState<boolean>(false)

    //Form Details
    const [enteredEmail, setEnteredEmail] = useState<string>("")
    const [enteredSubject, setEnteredSubject] = useState<string>("")
    const [enteredMessage, setEnteredMessage] = useState<string>("")

    const clearForm = () => {
        setEnteredEmail("")
        setEnteredSubject("")
        setEnteredMessage("")
    }

    //On Submit Function
    const onSubmit = (event: FormEvent) => {

        event.preventDefault()
        setLoading(true)
        const formData = {email: enteredEmail, subject: enteredSubject, message: enteredMessage }
        console.log({formData})
        makeApiRequest("/support", "post", formData, {
            onSuccess: () => {
                setLoading(false)
                toast.success("Support requested successfully.")
                clearForm()
            },
        onError: (error: any) => {
            setLoading(false)
            toast.error("Unable to request for support now, please, try again later.")
        }})
    }
    return ( 
        <main className="py-14 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 flex flex-col gap-y-10 md:gap-y-0 md:flex-row md:justify-between items-center inter">
            <div className="md:w-[49%] flex flex-col items-center">
                <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%] text-[#020100]">Have any questions? Contact us</p>
                <form className="text-xs md:text-sm xl:text-base mt-10 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[65%]" onSubmit={onSubmit}>
                <div className="flex flex-col gap-y-1">
                  <label className="cursor-pointer" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    id="email"
                    value={enteredEmail}
                    className="border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none"
                    placeholder="Enter Your Email Address"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEnteredEmail(e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-y-1 mt-6">
                  <label className="cursor-pointer" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    required
                    type="text"
                    name="subject"
                    id="subject"
                    value={enteredSubject}
                    className="border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none"
                    placeholder="Enter Your Subject"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setEnteredSubject(e.target.value)
                    }
                  />
                </div>
                <div className="flex flex-col gap-y-1 mt-6">
                    <label className="cursor-pointer" htmlFor="message">
                        Message
                    </label>
                    <textarea required value={enteredMessage} onChange={(e: any) =>
                        setEnteredMessage(e.target.value)
                    } className="h-20 border border-[#E6E7E8] px-2 xl:px-4 py-3 focus:border-primary rounded-md focus:outline-none resize-none" placeholder="Enter Your Message Here" maxLength={200} name="message" id="message"></textarea>
                </div>
                <div className="flex justify-end mt-10">
                    <input type="submit" value={loading ? "Sending..." : "Send Message"} className="w-full cursor-pointer bg-primary py-3 text-sm md:text-base rounded-lg text-white border border-primary hover:bg-white hover:text-primary duration-500"/>
                </div>
            </form>
            </div>
            <div className="md:w-[49%] flex flex-col items-center">
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold w-[95%] md:w-[80%] lg:w-[72%] text-[#020100]">Contact us</p>
                <p className="text-[#636366] text-xs mt-2 md:text-sm xl:text-base w-[95%] md:w-[80%] lg:w-[72%]">Have some question about our product? fill out the form and our customer support will reach out to you.</p>
                <Image src={contactUs} loading="eager" alt="Image" className="mt-6 rounded-2xl"/>
            </div>
        </main>
     );
}
 
export default ContactUs;