import WelcomeTemplate from "../../../../emails/WelcomeTemplate";

import { render } from "@react-email/render";
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";


export async function POST(request: Request) {
    const body = await request.json();
    try {
        const { to, subject, name, otp } = body;

        if (!to || !subject || !name || !otp) {

            throw new Error('Fill in the fields')
        }

    const emailHtml = render(WelcomeTemplate({userName: name, verificationCode: otp}));

      await sendEmail({
        to,
        subject,
        html: emailHtml,
      });

      return new NextResponse('Email Send Successfully', { status: 200 })

    }catch (error) {
        if (error instanceof Error) {
          return new NextResponse(error.message);
        } else {
          return new NextResponse('Internal Server Error', { status: 500 });
        }
      }
}
