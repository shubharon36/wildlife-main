'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { X } from 'lucide-react'
import { useLenis } from 'lenis/react'

export default function RegionSideDrawer({
  open,
  onRequestClose,
  onExitComplete,
  children,
  /** Optional: e.g. selected region object — exposed on the panel as `data-selected-region` for your UI */
  selection,
  overlayClassName = '',
  panelClassName = '',
  /** Stack multiple drawers: higher values sit above lower ones */
  zOverlay = 200,
  closeUI = true,
  zPanel = 201,
}) {
  const drawerRef = useRef(null)
  const overlayRef = useRef(null)
  const didMount = useRef(false)
  const onExitCompleteRef = useRef(onExitComplete)
  onExitCompleteRef.current = onExitComplete
  const lenis = useLenis()

  // Stop/start lenis based on drawer open state
  useEffect(() => {
    if (!lenis) return
    if (open) {
      lenis.stop()
    } else {
      lenis.start()
    }
  }, [open, lenis])

  useEffect(() => {
    const overlay = overlayRef.current
    const drawer = drawerRef.current
    if (!overlay || !drawer) return

    if (!didMount.current) {
      didMount.current = true
      gsap.set(overlay, { opacity: 0, pointerEvents: 'none' })
      gsap.set(drawer, { x: '100%' })
      if (open) {
        gsap.to(overlay, {
          opacity: 1,
          duration: 0.3,
          ease: 'power2.out',
          pointerEvents: 'auto',
        })
        gsap.to(drawer, {
          x: 0,
          duration: 0.5,
          ease: 'power3.out',
        })
      }
      return
    }

    if (open) {
      gsap.to(overlay, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        pointerEvents: 'auto',
      })
      gsap.to(drawer, {
        x: 0,
        duration: 0.5,
        ease: 'power3.out',
      })
    } else {
      gsap.to(drawer, {
        x: '100%',
        duration: 0.4,
        ease: 'power3.in',
      })
      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        pointerEvents: 'none',
        onComplete: () => onExitCompleteRef.current?.(),
      })
    }
  }, [open])

  return (
    <>
      <div
        ref={overlayRef}
        onClick={onRequestClose}
        style={{ zIndex: zOverlay }}
        className={`fixed top-0 left-0 h-[120%] z-800 w-full bg-black/40 backdrop-blur-sm opacity-0 pointer-events-none ${overlayClassName}`}
        aria-hidden={!open}
      />
      <div
        ref={drawerRef}
        data-selected-region={selection?.name ?? ''}
        data-lenis-prevent
        style={{ zIndex: zPanel }}
        className={`fixed top-0 right-0 h-full z-900! max-h-dvh w-[45vw] bg-[#F0DEB4] shadow-2xl translate-x-full ${panelClassName}`}
      >

        <div className=' overflow-y-auto overscroll-y-contain  h-full w-full'>

          <button
            onClick={onRequestClose}
            className="absolute top-[1.5vw] right-[1.5vw] p-[0.5vw] cursor-pointer z-10"
            aria-label="Close drawer"
          >
            {
              closeUI ? (
                <>
                  <X strokeWidth={1.5} className="w-[2.5vw] h-auto duration-300 hover:rotate-90 transition-all" />

                </>
              ) : (
                <>
                <X strokeWidth={1.5} className="w-[2.5vw] h-auto duration-300 hover:rotate-90 transition-all" />

              </>
              )
            }
          </button>
          {children}
        </div>

      </div>
    </>
  )
}
