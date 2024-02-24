//Import Needed Components
import Header from '@/components/PagesComponents/Header'
import AboutUsHeroSection from "@/components/PagesComponents/AboutUsHeroSection";

const page = () => {
    return ( 
        <main className="manrope">
            <div className='bg-secondary px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16'>
                <Header />
            </div>
            <AboutUsHeroSection /> 
        </main>
     );
}
 
export default page;