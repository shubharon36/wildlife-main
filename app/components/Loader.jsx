'use client'

import { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'

export default function Loader({ onEntered, onEnterClick }) {
  const overlayRef = useRef(null)
  const svgGroupRef = useRef(null)
  const progressRingRef = useRef(null)
  const textRef = useRef(null)
  const magneticRef = useRef(null)
  const cloud1Ref = useRef(null)
  const cloud2Ref = useRef(null)
  const cloud3Ref = useRef(null)
  const cloud4Ref = useRef(null)
  const [magneticPosition, setMagneticPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Animate the SVG group rotation
    if (svgGroupRef.current) {
      gsap.to(svgGroupRef.current, {
        rotation: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
        transformOrigin: '50% 50%',
      })
    }
  }, [])

  const handleMouseMove = (e) => {
    if (!magneticRef.current) return

    const rect = magneticRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const distanceX = e.clientX - centerX
    const distanceY = e.clientY - centerY

    const magnetStrength = 0.4

    setMagneticPosition({
      x: distanceX * magnetStrength,
      y: distanceY * magnetStrength
    })

    gsap.to(magneticRef.current, {
      x: distanceX * magnetStrength,
      y: distanceY * magnetStrength,
      duration: 0.3,
      ease: 'power2.out'
    })

    gsap.to(textRef.current, {
      x: distanceX * magnetStrength * 0.6,
      y: distanceY * magnetStrength * 0.6,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const handleMouseLeave = () => {
    gsap.to(magneticRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    })

    gsap.to(textRef.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'power2.out'
    })

    setMagneticPosition({ x: 0, y: 0 })
  }

  const animateExit = () => {
    // Fade out clouds first
    gsap.to([cloud1Ref.current, cloud2Ref.current, cloud3Ref.current, cloud4Ref.current], {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
      stagger: 0.1
    })

    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
      onComplete: () => {
        if (overlayRef.current) {
          overlayRef.current.style.pointerEvents = 'none'
          onEntered?.()
        }
      },
    })
  }

  const handleEnterWithSound = () => {
    onEnterClick?.()
    animateExit()
  }

  const handleEnterWithoutSound = () => {
    animateExit()
  }

  return (
    <div
      ref={overlayRef}
      className='h-screen w-full flex text-black! justify-center flex-col items-center fixed z-999 pointer-events-auto'
    >
      {/* Background clouds */}
      <div ref={cloud1Ref} className='absolute top-[0%] left-[0%] w-[55vw] opacity-40'>
        <Image src='/img/introcloud.png' alt='cloud' width={500} height={300} className='w-full h-auto object-contain' />
      </div>
      <div ref={cloud2Ref} className='absolute top-[70%] left-[0%] w-[60vw] opacity-40'>
        <Image src='/img/introcloud2.png' alt='cloud' width={500} height={300} className='w-full h-auto object-contain scale-x-[-1]' />
      </div>
        <div ref={cloud3Ref} className='absolute bottom-[0%] right-[0%] w-[52vw] opacity-40'>
        <Image src='/img/introcloud3.png' alt='cloud' width={500} height={300} className='w-full h-auto object-contain' />
      </div>
      <div ref={cloud4Ref} className='absolute top-[0%] right-[0%] w-[48vw] opacity-40'>
        <Image src='/img/introcloud.png' alt='cloud' width={500} height={300} className='w-full h-auto object-contain scale-x-[-1]' />
      </div>

      <div className='h-fit absolute top-[10%] left-1/2 -translate-x-1/2 text-center w-fit space-y-[1vw]'>
        <p className='text-[5vw] font-serif leading-none'>Wildlife Sanctuary</p>
        <p className='text-[2vw] font-serif mt-[-1.4vw]'>India</p>
      </div>

      <div
        ref={magneticRef}
        className='relative cursor-pointer mt-[5vw] flex items-center justify-center'
        onClick={handleEnterWithSound}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <svg
          viewBox="0 0 198 198"
          className="w-[10vw] h-[10vw]"
          style={{ transform: 'translate3d(0px, 0px, 0px)', transformOrigin: '50% 50%' }}
        >
          <g
            ref={svgGroupRef}
            style={{ opacity: 1, visibility: 'inherit' }}
          >
            <path
              d="M99.17 3.37a68 68 0 0130 2.32 58.89 58.89 0 0120.29 10.39c5.39 4.32 5.94 6 13.86 16.34 14.73 19.27 21.37 19.71 24.26 31.18 1.51 6-.09 6.75 2 15.84 2.61 11.47 5.61 12.29 7.19 19.58 1.27 5.89-2.28 16.66-9.43 38-3.24 9.64-4.8 13.43-8.16 17.71-4.61 5.87-10 9.35-13.91 11.82-8 5-10.41 4.39-17.77 9-8.51 5.3-7.37 7.48-14.21 12-.87.57-16.43 10.58-34.1 7.18-6.81-1.32-7.08-3.3-19-6.33-9.56-2.42-9.91-1.28-16.54-3-3.14-.83-23.51-6.46-33.95-23.21-2.31-3.72-1.67-4-5-9.41-5.83-9.59-10.86-13.58-14.35-17.82-11.85-14.47-9.3-35.7-8.72-40.59a69.25 69.25 0 0111.21-29.78c3.51-5.09 6.36-7.59 10.4-14.85 5.45-9.86 3.58-11.42 7.47-17.77 8.28-13.49 24-18.23 27.67-19.35 6.13-1.86 5.65-.5 17.33-3C90.05 6.6 90.48 4.7 99.17 3.37z"
              opacity=".2"
              stroke="#2c2a27"
              strokeWidth="2"
              fill="none"
              strokeMiterlimit="10"
            />
            <path
              d="M194.63 99.17a68 68 0 01-2.32 30 58.89 58.89 0 01-10.39 20.29c-4.32 5.39-6 5.94-16.34 13.86-19.27 14.73-19.71 21.37-31.18 24.26-6 1.51-6.75-.09-15.84 2-11.47 2.61-12.29 5.61-19.58 7.19-5.89 1.23-16.66-2.3-37.98-9.45-9.64-3.24-13.43-4.8-17.71-8.16-5.87-4.61-9.35-10-11.82-13.91-5-8-4.39-10.41-9-17.77-5.3-8.51-7.48-7.37-12-14.21-.57-.87-10.58-16.43-7.18-34.1 1.32-6.81 3.3-7.08 6.33-19 2.42-9.56 1.28-9.91 3-16.54.83-3.14 6.46-23.51 23.21-33.95 3.72-2.31 4-1.67 9.41-5 9.59-5.83 13.58-10.86 17.82-14.35 14.45-11.83 35.68-9.28 40.57-8.7a69.25 69.25 0 0129.78 11.21c5.09 3.51 7.55 6.36 14.85 10.4 9.86 5.45 11.42 3.58 17.77 7.47 13.49 8.28 18.23 24 19.35 27.67 1.86 6.13.5 5.65 3 17.33 3.02 14.34 4.92 14.77 6.25 23.46z"
              stroke="#2c2a27"
              strokeWidth="2"
              fill="none"
              strokeMiterlimit="10"
            />
          </g>
          <circle
            ref={progressRingRef}
            cx="99"
            cy="99"
            r="88.74"
            stroke="#e24d34"
            strokeWidth="5"
            fill="none"
            strokeMiterlimit="10"
            style={{ strokeDasharray: '557.57, 557.57', strokeDashoffset: '0px' }}
          />
        </svg>

        <h2
          ref={textRef}
          className='absolute text-2xl font-serif'
        >
          Let's go
        </h2>
      </div>
      <button
        type='button'
        onClick={handleEnterWithoutSound}
        className='text-[1.2vw] mt-[1.4vw] cursor-pointer opacity-80 hover:opacity-100 hover:scale-102 transition-all duration-300'
      >
        Begin without sound
      </button>
    </div>
  )
}
