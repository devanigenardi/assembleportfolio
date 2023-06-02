import Image from 'next/image'
import VisualDesign from '../components/production/VisualDesign'
import MicroVideo from '../components/production/MicroVideo'
import Localization from '../components/production/Localization'

export default function Creative() {
  return (
    <main className='grid grid-cols-1 md:grid-cols-3 gap-10 py-14 px-4'>

      <div className='m-auto h-full'>
        <Image
            src="/content/visualdesign-thumb.png"
            width={390}
            height={85}
            alt="Picture of the author"
            loading="lazy"
        />
        <h2 className='text-[32px] font-bold text-[#1D1D1F] mt-4 mb-4'>Visual Design</h2>
        <VisualDesign/>
      </div>

      <div className='m-auto h-full'>
        <Image
            src="/content/microvideo-thumb.png"
            width={390}
            height={85}
            alt="Picture of the author"
            loading="lazy"
        />
        <h2 className='text-[32px] font-bold text-[#1D1D1F] mt-4 mb-4'>Micro Video</h2>
        <MicroVideo/>
      </div>

      <div className='m-auto h-full'>
        <Image
            src="/content/local-thumb.png"
            width={390}
            height={85}
            alt="Picture of the author"
            loading="lazy"
        />
        <h2 className='text-[32px] font-bold text-[#1D1D1F] mt-4 mb-4'>Localization</h2>
        <Localization/>
      </div>
    </main>
  )
}
