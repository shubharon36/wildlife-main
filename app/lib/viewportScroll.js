'use client'

import { useLayoutEffect } from 'react'

export function scrollDocumentToTop() {
  if (typeof window === 'undefined') return
  window.scrollTo(0, 0)
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

/** Full reload; after load, scroll is forced to top via `scrollRestoration` + `scrollDocumentToTop`. */
export function reloadToTop() {
  if (typeof window === 'undefined') return
  window.history.scrollRestoration = 'manual'
  scrollDocumentToTop()
  window.location.reload()
}

export function useViewportScrollAndReload() {
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    window.history.scrollRestoration = 'manual'
    scrollDocumentToTop()
  }, [])

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return
    let resizeTimer
    const scheduleReload = () => {
      clearTimeout(resizeTimer)
      resizeTimer = window.setTimeout(() => reloadToTop(), 250)
    }
    const onOrientation = () => reloadToTop()
    const onPageShow = (e) => {
      if (e.persisted) scrollDocumentToTop()
    }
    window.addEventListener('resize', scheduleReload)
    window.addEventListener('orientationchange', onOrientation)
    window.addEventListener('pageshow', onPageShow)
    return () => {
      clearTimeout(resizeTimer)
      window.removeEventListener('resize', scheduleReload)
      window.removeEventListener('orientationchange', onOrientation)
      window.removeEventListener('pageshow', onPageShow)
    }
  }, [])
}
