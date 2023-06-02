import Image from 'next/image'
import Web from '../components/production/WebDevelopment'

export default function web() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-3 gap-10 py-14 px-4'>

      <div className='md:block hidden'></div>

      <div className='m-auto h-full'>
        <Image
            src="/content/web-thumb.png"
            width={390}
            height={85}
            alt="Picture of the author"
            loading="lazy"
        />
        <h2 className='text-[32px] font-bold text-[#1D1D1F] mt-4 mb-4'>Web Development</h2>
        <Web/>
      </div>

      <div className='md:block hidden'> </div>
    </main>
  )
}
