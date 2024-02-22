//Import Needed Icons
import { Star } from "iconsax-react";

type cardProps = {
    title: string,
    body: string,
}

const SecondCard = ({title, body}: cardProps) => {
    return ( 
        <main className="bg-white w-[30%] min-w-[20rem] h-60 rounded-lg group flex flex-col items-center p-4 border border-[#CDCED2] inter text-[#1C1F33] text-center hover:bg-primary duration-500">
            <div className="rounded-[50%] border border-[#B2B3BA] p-2 md:p-3 xl:p-4 bg-secondary group-hover:border-2 group-hover:border-[#F2D2C3] group-hover:bg-white"><Star size="24" color="#FF8A65" className="text-white group-hover:text-primary"/></div>
            <p className="mt-6 text-base sm:text-lg md:text-xl xl:text-2xl font-bold group-hover:text-white duration-500">{title}</p>
            <p className="text-xs md:text-sm xl:text-base mt-6 group-hover:text-white duration-500">{body}</p>
        </main>
     );
}
 
export default SecondCard;