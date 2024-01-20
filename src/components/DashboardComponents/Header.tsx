import { Page } from "@/lib/types";
const Header = ({page}: Page) => {
    return ( 
        <main className="">
            <div className="flex justify-between items-center px-4 md:px-6 xl:px-8 py-4 lg:border-b border-[#767680] border-opacity-10">
                <p className="text-xl xl:text-2xl font-semibold">{page}</p>
                <div className="size-9 md:size-12 xl:size-14 rounded-[50%] bg-red-600">

                </div>
            </div>
            
        </main>
     );
}
 
export default Header;