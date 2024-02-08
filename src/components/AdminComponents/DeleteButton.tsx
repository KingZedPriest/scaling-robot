"use client"

type deleteProps = {
    userEmail: string
}
const DeleteButton = ({userEmail} :deleteProps) => {
    return ( 
        <main>
            <form>
                <button type="submit" className="text-xs md:text-sm xl:text-base border border-red-600 bg-red-600 rounded-lg px-4 md:px-8 xl:px-10 py-2 md:py-3 text-white hover:bg-white hover:text-red-600 duration-500">Delete</button>
            </form>
        </main>
     );
}
 
export default DeleteButton;