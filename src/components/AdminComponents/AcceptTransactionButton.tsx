"use client"
import { toast } from "sonner";

const AcceptTransactionButton = (id: any) => {
    return ( 
        <main>
            <form>
                <button type="submit" className="text-xs md:text-sm xl:text-base text-green-600 hover:underline duration-500">Confirm</button>
            </form>
        </main>
     );
}
 
export default AcceptTransactionButton;