const DeleteTransactionButton = ({id}: any) => {
    return ( 
        <main>
            <form>
                <button type="submit" className="text-xs md:text-sm xl:text-base text-primary hover:underline duration-500">Delete</button>
            </form>
        </main>
     );
}
 
export default DeleteTransactionButton;