import Image from 'next/image'

//Import Needed Components
import Header from '@/components/PagesComponents/Header'
import Herosection from '@/components/PagesComponents/Herosection'
import Second from '@/components/PagesComponents/Second'
import Third from '@/components/PagesComponents/Third'
import Fourth from '@/components/PagesComponents/Fourth'
import Fifth from '@/components/PagesComponents/Fifth'

export default function Home() {
  return (
    <main className='manrope overflow-hidden'>

      <div className='bg-secondary px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16'>
        <Header />
        <Herosection />
      </div>
      <Second />
      <div className='bg-white'>
        <Third />
        <Fourth />
        <Fifth />
      </div>
    </main>
  )
}
