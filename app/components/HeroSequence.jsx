import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)

export default function HeroSequence({ lenis, ispressed }) {

    const moonRef = useRef(null)
    const leftcloudRef = useRef(null)
    const leftcloud2Ref = useRef(null)
    const rightcloudRef = useRef(null)
    const rightcloud2Ref = useRef(null)
    const baseRef = useRef(null)
    const birdsRef = useRef(null)
    const lionRef = useRef(null)

    const containerRef = useRef(null)
    const headingRef = useRef(null)
    const splitRef = useRef(null)

    useEffect(() => {
        gsap.set(baseRef.current, { yPercent: 100 })
        gsap.set(moonRef.current, { yPercent: 105 })
        gsap.set([leftcloudRef.current, leftcloud2Ref.current], { xPercent: -100 })
        gsap.set([rightcloudRef.current, rightcloud2Ref.current], { xPercent: 100 })
        gsap.set(birdsRef.current, { opacity: 0 })
        gsap.set(lionRef.current, { yPercent: 0, opacity: 0 })

        // Initialize SplitText for heading
        if (headingRef.current) {
            document.fonts.ready.then(() => {
                splitRef.current = SplitText.create(headingRef.current, {
                    type: "lines",
                    mask: "lines",
                    linesClass: "line++",
                })
                gsap.set(splitRef.current.lines, { y: "100%" })
            })
        }

        return () => {
            if (splitRef.current) {
                splitRef.current.revert()
            }
        }
    }, [])

    useEffect(() => {
        if (ispressed) {
            const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 1 } })
            tl.to(baseRef.current, { yPercent: 0 })

            // Animate heading lines
            if (splitRef.current && splitRef.current.lines) {
                tl.to(splitRef.current.lines, {
                    y: "0%",
                    duration: 0.8,
                    stagger: 0.1,
                    ease: "power4.out"
                }, '<+=0.3')
            }

            tl.to(lionRef.current, { yPercent: 0, duration: 1.5, opacity: 1 }, '<+=0.6')
                .to(birdsRef.current, {
                    opacity: 1, onComplete: () => {
                        lenis.start()
                    }
                }, '-=.5')

        }
    }, [ispressed])

    useEffect(() => {
        if (!ispressed) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top top',
                end: '85%',
                scrub: true,
                onComplete: () => {
                    gsap.set(containerRef.current, { opacity: 0 })
                }
            }
        })

        tl.to(moonRef.current, { yPercent: 0 })
            .to([leftcloudRef.current, leftcloud2Ref.current], { xPercent: 0 }, '-=0.5')
            .to([rightcloudRef.current, rightcloud2Ref.current], { xPercent: 0 }, '-=0.5')
            .to(headingRef.current, { opacity: 0, yPercent: -50 }, '-=0.5')
            .to(birdsRef.current, { opacity: 0, yPercent: -100, xPercent: 50 })
            .to(lionRef.current, { yPercent: 160 }, '-=0.5')
            .to(baseRef.current, { yPercent: 100 }, '-=0.4')
            .to(moonRef.current, { scale: 3.5, yPercent: -10 }, '-=0.5')
            .to([leftcloudRef.current, leftcloud2Ref.current], { xPercent: -100 }, '-=0.5')
            .to([rightcloudRef.current, rightcloud2Ref.current], { xPercent: 100 }, '-=0.5')
            .to(containerRef.current, { opacity: 0 })
    }, [ispressed])





    return (
        <div ref={containerRef} className='w-full h-[400vh]  bg-[#F1C05E] relative'>
            <section className='h-screen w-full sticky top-0'>
                {/* Heading */}
                <div className='absolute top-[5%] left-1/2 -translate-x-1/2 z-40 text-center'>
                    <h1 ref={headingRef} className='text-[2vw] font-sansumi leading-[1.2] text-[#3e2407]'>
                        Welcome to<br /><span  className='text-[3vw]'>India's Wildlife Sanctuaries</span>
                    </h1>
                </div>

                <div ref={baseRef} className='h-[10vw] absolute z-30 bottom-0 left-[-11vw] w-[120%]'>
                    <Image src='/img/basee.png' alt='land' width={1000} height={1000} className='w-full h-auto object-cover' />
                </div>

                <div ref={lionRef} className='absolute bottom-[8vw] left-[50%] -translate-x-1/2 z-20 w-[55vw] h-auto'>
                    <Image src='/img/group245.png' alt='wildlife silhouettes' width={1000} height={1000} className='w-full h-full object-contain' />
                </div>



                <div ref={birdsRef} className='h-[30vw] absolute z-10 top-[8vw] left-[50%] -translate-x-1/2 w-[30vw]'>
                    <Image src='/img/birds.png' alt='land' width={1000} height={1000} className='w-full h-auto object-contain' />
                </div>

                <div ref={moonRef} className='h-auto absolute bottom-[2vw] left-1/2 -translate-x-1/2 w-[50vw]'>
                    <Image src='/img/moon2.png' alt='moon' width={1000} height={1000} className='w-full h-auto object-cover' />
                </div>

                <div ref={leftcloudRef} className='h-auto absolute top-[5vw] left-0 w-[30vw]'>
                    <Image src='/img/leftcloud.png' alt='tree' width={1000} height={1000} className='w-full h-auto object-cover' />
                </div>
                <div ref={leftcloud2Ref} className='h-auto absolute top-[2vw] left-0 w-[30vw]'>
                    <Image src='/img/leftcloud2.png' alt='tree' width={1000} height={1000} className='w-full h-auto object-cover' />
                </div>
                <div ref={rightcloudRef} className='h-auto absolute top-[5vw] right-0 w-[25vw]'>
                    <Image src='/img/rightcloud.png' alt='tree' width={1000} height={1000} className='w-full h-auto object-cover' />
                </div>
                <div ref={rightcloud2Ref} className='h-auto absolute top-[1vw] right-0 w-[20vw]'>
                    <Image src='/img/rightcloud2.png' alt='tree' width={1000} height={1000} className='w-full h-auto object-cover' />
                </div>
            </section>
        </div>
    )
}
