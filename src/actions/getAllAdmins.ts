import { prisma } from "@/lib/prismadb";

export default async function getUsers() {

  try {
    const admins = await prisma.admin.findMany({
      orderBy: {
        createdAt: "desc"
    }
    });

    return admins;
    
  } catch (error: any) {
    console.error(error);
    throw error;
  }

}
