'use client'
import { ArrowDown, ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import Copy from './Copy'

export default function WildLifeSantuaries() {
    const scrollTextRef = useRef(null)

    // Rotating scroll text effect
    useEffect(() => {
        const scrollText = scrollTextRef.current
        if (!scrollText) return

        let rotation = 0
        const animate = () => {
            rotation += 0.3
            scrollText.style.transform = `translate3d(0px, 0px, 0px) rotate(${rotation}deg)`
            requestAnimationFrame(animate)
        }
        const animationId = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationId)
    }, [])

    return (
        <div className='relative text-black! h-screen w-full padd'>
            <div className='flex items-start gap-[1vw]'>
                <div className='h-[2vw] relative w-auto'>
                    <Image src='/paw.svg' alt='logo' width={1000} height={1000} className='w-full mt-[1vw] h-auto object-cover' />
                </div>
                <Copy>

                    <p className='h-fit w-[80%] font-sansumi text-[6vw] leading-none'>Wildlife Sanctuaries of <span className='text-transparent font-normal!' style={{ WebkitTextStroke: '2px var(--foreground)' }}>India.</span></p>
                </Copy>
            </div>
            <div className='flex h-full w-full items-center justify-between'>
                <div className='flex h-full pl-[5.5vw] w-full flex-col items-start pt-[5vw]'>
                    <Copy>

                        <p className='w-[80%] text-[1vw]'>Protected under the Wildlife Protection Act, 1972, India's wildlife sanctuaries form a critical network of conserved landscapes dedicated to safeguarding diverse fauna, flora, and ecological systems. <br /><br />Collectively, they span approximately 1,25,000 km² across the country.</p>
                    </Copy>

                    <div className='mt-[10vw] flex w-full items-center gap-[5vw]'>
                        <div className='relative flex h-fit w-fit items-center leading-none'>
                            <span className='absolute left-0 top-[1vw] h-[85%] w-[2px] bg-black' />
                            <div className='ml-[1vw] flex flex-col items-start gap-[1vw]'>
                                <Copy>

                                    <p className=' font-semibold text-[5vw]'>573</p>
                                </Copy>
                                <Copy>

                                    <p className='text-[1.2vw]'>Total Sanctuaries</p>
                                </Copy>
                            </div>
                        </div>
                        <div className='relative flex h-fit w-fit items-center leading-none'>
                            <span className='absolute left-0 top-[1vw] h-[85%] w-[2px] bg-black' />
                            <div className='ml-[1vw] flex flex-col items-start gap-[1vw]'>
                                <Copy>

                                    <p className='font-semibold text-[5vw]'>3.7%</p>
                                </Copy>
                                <Copy>

                                    <p className='text-[1.2vw]'>of India's Land</p>
                                </Copy>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='h-full w-full'>
                    <div className='h-[30vw] w-full overflow-hidden rounded-full relative'>
                        <Image
                            src='/img/leopard.png'
                            alt='tiger'
                            width={1000}
                            height={1000}
                            className='w-full h-full object-cover'
                        />
                    </div>
                </div>

            </div>
            {/* Circular rotating scroll indicator */}
            <div className='h-[10vw] w-[10vw] absolute bottom-[6vw] left-[55%] -translate-x-1/2'>
                <div className='badge__inner relative w-full h-full'>
                    {/* Outer SVG */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                        <defs>
                            <clipPath id="clipCircleOuter">
                                <circle cx="50" cy="50" r="50"></circle>
                            </clipPath>
                            <clipPath id="clipArcOuter">
                                <path id="arcPathOuter" d="M 0 50 a 50 50 0 1 0 100 0 a 50 50 0 1 0 -100 0z"></path>
                            </clipPath>
                        </defs>
                        <g clipPath="url(#clipCircleOuter)">
                            <image x="0" y="0" width="100%" height="100%" xlinkHref="https://lewahouse.com/wp-content/themes/lewa/public/images/scroll-badge/outer.png" clipPath="url(#clipArcOuter)"></image>
                        </g>
                    </svg>
                    {/* Inner SVG */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
                        <defs>
                            <clipPath id="clipCircleInner">
                                <circle cx="50" cy="50" r="50" transform="translate(50, 0) rotate(90 25 25)"></circle>
                            </clipPath>
                            <clipPath id="clipArcInner">
                                <path id="arcPathInner" d="M 0 50 a 50 50 0 1 0 100 0 a 50 50 0 1 0 -100 0z" transform="translate(50, 0) rotate(90 25 25)"></path>
                            </clipPath>
                        </defs>
                        <g clipPath="url(#clipCircleInner)">
                            <image x="0" y="0" width="100%" height="100%" xlinkHref="https://lewahouse.com/wp-content/themes/lewa/public/images/scroll-badge/inner.png" clipPath="url(#clipArcInner)"></image>
                        </g>
                    </svg>
                    {/* Rotating text */}
                    <img
                        ref={scrollTextRef}
                        className="absolute inset-0 w-full h-full"
                        src="https://lewahouse.com/wp-content/themes/lewa/public/images/scroll-badge/text.png"
                        alt=""
                        style={{ opacity: 1, visibility: 'inherit' }}
                    />
                    {/* Tree icon */}
                    <div className="absolute inset-0 brightness-70 flex items-center justify-center">
                        <img
                            className="w-[40%]  h-[40%] object-contain"
                            src="img/pawred.svg"
                            alt=""
                            style={{ opacity: 1, visibility: 'inherit' }}
                        />
                    </div>
                </div>


            </div>
           
        </div>
    )
}
