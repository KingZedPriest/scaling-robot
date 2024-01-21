import  bcrypt  from 'bcrypt';
import { NextResponse } from "next/server";
import { prisma } from '@/lib/prismadb';

export async function POST(request: Request) {

  try {
    const body = await request.json();
    
    const { accountNumber, 
        firstName, 
        lastName, 
        email, 
        password, 
        dateOfBirth, 
        profileImgSrc, 
        country, 
        city, 
        state, 
        address, 
        mobileNumber, 
        idType, 
        idNumber, 
        dateOfExpiry, 
        idCardFrontImgSrc, 
        idCardBackImgSrc } = body;

    const lowercasedEmail = email.toLowerCase();

    const existingUser = await prisma.user.findUnique({
      where: {
        email: lowercasedEmail,
      },
    });

    if (existingUser) {
      throw new Error('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email: lowercasedEmail,
        hashedPassword,
        accountNumber, 
        firstName, 
        lastName, 
        dateOfBirth, 
        profileImgSrc, 
        country, 
        city, 
        state, 
        address, 
        mobileNumber, 
        idType, 
        idNumber, 
        dateOfExpiry, 
        idCardFrontImgSrc, 
        idCardBackImgSrc
      },
    });

    return NextResponse.json(user);
    
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message, {
        status: determineStatusCode(error.message),
      });
    } else {
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  }
}

function determineStatusCode(errorMessage: string): number {
  switch (errorMessage) {
    case 'Email already exists':
      return 409;
    default:
      return 500;
  }
}
