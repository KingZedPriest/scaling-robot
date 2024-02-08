"use client"

type suspendProps ={
    userEmail: string,
    userSuspended: boolean,
    accountNumber: string,
}
//.slice(-4)
const SuspendButton = ({userEmail, userSuspended, accountNumber}: suspendProps) => {
    return ( 
        <main>
            <form>
                <button type="submit" className="text-xs md:text-sm xl:text-base border border-primary bg-primary rounded-lg px-4 md:px-8 xl:px-10 py-2 md:py-3 text-white hover:bg-white hover:text-primary duration-500">{userSuspended ? "Resume" : "Suspend"}</button>
            </form>
        </main>
     );
}
 
export default SuspendButton;