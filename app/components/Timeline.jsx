import Image from 'next/image'
import React from 'react'

export default function Timeline() {
  return (
    <div className='h-fit w-full flex items-center my-[10vw] justify-center flex-col z-700 min-h-screen relative'>
      <p className='text-[4vw] font-sansumi leading-[1.2]'>Conservation Timeline</p>
      <p className='mt-[2vw]'>
        From Exploitation to Conservation
      </p>

      <div className='h-[200vh] w-full mt-[-5vw] '>
        <Image src='/img/timeline.png' alt='timeline' width={1000} height={1000} className='w-full h-full object-contain' />
      </div>
    </div>
  )
}
