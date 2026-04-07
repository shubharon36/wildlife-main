'use client'

const BIRDS_SRC = '/birds.mp3'

let audio

/**
 * Plays birds ambience from `public/birds.mp3`.
 * Call from a click/tap handler so the browser allows playback.
 */
export function playBirdsSound() {
  if (typeof window === 'undefined') return
  if (!audio) {
    audio = new Audio(BIRDS_SRC)
    audio.loop = true
  }
  audio.play().catch(() => {})
}
