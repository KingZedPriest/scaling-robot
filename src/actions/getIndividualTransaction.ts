import { prisma } from "@/lib/prismadb";

export default async function getIndividualTransaction(id: string) {
  try {
    const packageItem = await prisma.transaction.findMany({
      where: {
        id: id,
      },
    });

    return packageItem;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }
}
