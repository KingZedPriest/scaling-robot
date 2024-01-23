import { create } from 'zustand';
import { generateOTPNumber } from "@/utils/AccountInfo";

type otpStore = {

    otpNumber: number;
    updateOtpNumber: (newOtp: number) => void;
}

export const useOtpStore = create<otpStore>((set) => ({

    otpNumber: 4442,
    updateOtpNumber: (newOtp: number) => set({ otpNumber : newOtp }),

 }))