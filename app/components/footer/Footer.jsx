import Image from 'next/image'
import React from 'react'
import Copy from '../Copy'

export default function Footer() {
  return (
    <div className='w-full h-screen overflow-hidden bg-[#fff4e5] relative padd text-black!'>

      <div>
        <Copy>
          <p className='text-[2vw] font-sansumi font-semibold tracking-tight text-center'>Wildlife Sanctuary</p>
        </Copy>
        <Copy delay={0.1}>
          <p className='text-[1.5vw] font-sansumi font-medium text-center'>India</p>
        </Copy>
      </div>

      <div className=' h-fit flex items-center mt-[8vw] justify-start w-full py-[4vw]'>
        <Copy>
          <p className='text-[3vw] font-sansumi leading-[1.2] font-medium tracking-tight w-[60%]'><span style={{ WebkitTextStroke: '2px var(--foreground)' }}>"</span>The continued existence of wildlife and wilderness is important to the quality of life of humans.<span style={{ WebkitTextStroke: '2px var(--foreground)' }}>"</span></p>
        </Copy>
      </div>

      <div className='h-[2vw] absolute left-[5vw] top-[2vw] w-auto'>
        <Image src='/paw.svg' alt='logo' width={1000} height={1000} className='w-full mt-[1vw] h-auto object-cover' />
      </div>
      <div className='h-full w-[40vw] absolute right-[-2vw] bottom-0 flex items-center justify-center'>
        <Image
          src='/img/panther2.png'
          alt='footer-image'
          width={1000}
          height={1000}
          className='w-full h-full object-contain'
        />
      </div>

      <div className='flex items-center  absolute left-[5vw] bottom-[2vw] gap-[5vw]'>
        <Copy delay={0.2}>
          <p className='text-[1.2vw] font-medium'>Explore Region</p>
        </Copy>
        <Copy delay={0.3}>
          <p className='text-[1.2vw] font-medium'>Explore Map</p>
        </Copy>
        <Copy delay={0.4}>
          <p className='text-[1.2vw] font-medium'>Sanctuaries</p>
        </Copy>
      </div>

    </div>
  )
}
