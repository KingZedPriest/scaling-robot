"use client"
import { toast } from "sonner";

const DeclineTransactionButton = (id: any) => {
    return ( 
        <main>
            <form>
                <button type="submit" className="text-xs md:text-sm xl:text-base text-red-600 hover:underline duration-500">Reject</button>
            </form>     
        </main>
     );
}
 
export default DeclineTransactionButton;