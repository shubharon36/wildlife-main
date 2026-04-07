'use client'

import { useState } from 'react'

export default function SubmissionForm() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks — we’ll get back to you.')
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit} className="mt-[2vw] max-sm:mt-[4vw] flex flex-col gap-[1.2vw] max-sm:gap-[3vw]">
      <label className="sr-only" htmlFor="footer-name">
        Name
      </label>
      <input
        id="footer-name"
        name="name"
        required
        placeholder="Name"
        className="w-full rounded-xl border border-[#F0DEB4]/40 bg-stone-950/40 px-[1.2vw] max-sm:px-[3vw] py-[0.8vw] max-sm:py-[2.5vw] text-[0.95vw] max-sm:text-[3.5vw] text-white placeholder:text-white/45 outline-none focus:border-[#F0DEB4]"
      />
      <label className="sr-only" htmlFor="footer-email">
        Email
      </label>
      <input
        id="footer-email"
        name="email"
        type="email"
        required
        placeholder="Email"
        className="w-full rounded-xl border border-[#F0DEB4]/40 bg-stone-950/40 px-[1.2vw] max-sm:px-[3vw] py-[0.8vw] max-sm:py-[2.5vw] text-[0.95vw] max-sm:text-[3.5vw] text-white placeholder:text-white/45 outline-none focus:border-[#F0DEB4]"
      />
      <label className="sr-only" htmlFor="footer-message">
        Message
      </label>
      <textarea
        id="footer-message"
        name="message"
        required
        rows={3}
        placeholder="Tell us about your visit, partnership, or conservation idea"
        className="w-full resize-none rounded-xl border border-[#F0DEB4]/40 bg-stone-950/40 px-[1.2vw] max-sm:px-[3vw] py-[0.8vw] max-sm:py-[2.5vw] text-[0.95vw] max-sm:text-[3.5vw] text-white placeholder:text-white/45 outline-none focus:border-[#F0DEB4]"
      />
      <button
        type="submit"
        className="mt-[0.5vw] w-fit rounded-full border border-[#F0DEB4] bg-[#F0DEB4]/10 px-[1.8vw] max-sm:px-[5vw] py-[0.55vw] max-sm:py-[2vw] text-[0.85vw] max-sm:text-[3.2vw] font-medium text-[#F0DEB4] transition-colors hover:bg-[#F0DEB4]/20"
      >
        Send message
      </button>
      {status ? <p className="text-[0.8vw] max-sm:text-[2.8vw] text-[#F0DEB4]/90">{status}</p> : null}
    </form>
  )
}
