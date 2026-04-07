import Image from 'next/image'
import React from 'react'
import Copy from './Copy'

export default function ProtectWhatProtectU() {
    const listItems = [
        'Support verified conservation organizations',
        'Volunteer for afforestation and wildlife programs',
        'Avoid products linked to habitat destruction',
        'Spread awareness through education and media',
        'Spread awareness through education and media',
        'Donate to wildlife conservation initiatives'
    ]

    return (
        <div className='relative h-screen  mb-[8vw] w-full'>
            <Image src='/img/dearimage.jpg' alt='protectwhatprotectu' width={1000} height={1000} className='w-full h-full object-cover brightness-75' />

            <div className='absolute top-0 flex items-center justify-center text-center flex-col left-0 w-full h-full padd'>
                <Copy>
                    <p className='text-[4vw] text-white! w-fit font-bold font-sansumi text-center tracking-tight'>Protect What Protects Us</p>
                </Copy>

                <div className='mt-[4vw] space-y-[1vw]'>
                    {listItems.map((item, index) => (
                        <div className='flex items-center gap-[2vw]'>
                            <div className='w-[1.5vw] h-[1.5vw] rounded-full bg-orange-500 flex items-center justify-center'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='w-[1vw] h-[1vw]' viewBox="0 0 24 24" fill="orange" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    {/* <polyline points="20 6 9 17 4 12"></polyline> */}
                                </svg>
                            </div>
                            <Copy>
                                <p className='text-[1.1vw block] text-white!'>{item}</p>
                            </Copy>

                        </div>
                    ))}
                </div>

                <Copy delay={0.8}>
                    <button
                        className='mt-[4vw] px-8 py-3 cursor-pointer text-sm rounded-tr-full rounded-bl-full tracking-wider border-2 border-white bg-black text-white transition-all duration-300 hover:bg-white/50 hover:text-black hover:scale-105 active:scale-95'
                    >
                        Be a part of Conservation
                    </button>
                </Copy>
            </div>
        </div>
    )
}
