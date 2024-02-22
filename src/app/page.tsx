import Image from 'next/image'

//Import Needed Components
import Header from '@/components/PagesComponents/Header'
import Herosection from '@/components/PagesComponents/Herosection'
import Second from '@/components/PagesComponents/Second'

export default function Home() {
  return (
    <main>

      <div className='bg-secondary px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 manrope'>
        <Header />
        <Herosection />
      </div>
      <Second />
      
    </main>
  )
}
