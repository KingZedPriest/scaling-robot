import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const {
      userId,
      amount,
      accountName,
      accountNumber,
      depositMethod,
      bankName,
      swiftCode,
      description,
      iban,
      isSavebox,
      saveboxAmount,
      fee,
    } = body;

    if (
      !userId ||
      !amount ||
      !accountName ||
      !accountNumber ||
      !depositMethod ||
      !bankName
    ) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    const newTransaction = await prisma.transaction.create({
      data: {
        type: depositMethod,
        amount,
        targetAccount: accountNumber,
        targetName: accountName,
        targetBankName: bankName,
        swiftCode,
        iban,
        isSaveBox: isSavebox,
        saveBoxAmount: saveboxAmount,
        description,
        transferFee: fee,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return NextResponse.json(newTransaction);
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message);
    } else {
      return new NextResponse('Internal Server Error', { status: 500 });
    }
  }
}
