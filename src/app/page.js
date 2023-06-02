
import Image from 'next/image'
import Banner from './components/production/Banners'
import RichMedia from './components/production/RichMedia'
import Emails from './components/production/Emails'

export default function Home() {
  return (
    <main className={`grid grid-cols-1 md:grid-cols-3 gap-10 py-14 px-4`}>
      <div className='m-auto h-full'>
        <Image
            src="/content/banner-thumb.png"
            width={390}
            height={85}
            alt="Picture of the author"
            loading="lazy"
        />
        <h2 className='text-[32px] font-bold text-[#1D1D1F] mt-4 mb-4'>Banners</h2>
        <Banner/>
      </div>

      <div className='m-auto h-full'>
        <Image
            src="/content/richmedia-thumb.png"
            width={390}
            height={85}
            alt="Picture of the author"
            loading="lazy"
        />
        <h2 className='text-[32px] font-bold text-[#1D1D1F] mt-4 mb-4'>Richmedia</h2>
        <RichMedia/>
      </div>

      <div className='m-auto h-full'>
        <Image
            src="/content/emails-thumb.png"
            width={390}
            height={85}
            alt="Picture of the author"
            loading="lazy"
        />
        <h2 className='text-[32px] font-bold text-[#1D1D1F] mt-4 mb-4'>Emails</h2>
        <Emails/>
      </div>
    </main>
  )
}
