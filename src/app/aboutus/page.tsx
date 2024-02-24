//Import Needed Components
import Header from '@/components/PagesComponents/Header'
import AboutUsHeroSection from "@/components/PagesComponents/AboutUsHeroSection";
import Values from '@/components/PagesComponents/Values';
import WhatSetsUsApart from '@/components/PagesComponents/WhatSetsUsApart';
import CTA from '@/components/PagesComponents/CTA';
import Footer from '@/components/PagesComponents/Footer';


const page = () => {
    return ( 
        <main className="manrope">
            <div className='bg-secondary px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16'>
                <Header />
            </div>
            <AboutUsHeroSection /> 
            <Values />
            <WhatSetsUsApart />
            <CTA />
            <Footer />
        </main>
     );
}
 
export default page;