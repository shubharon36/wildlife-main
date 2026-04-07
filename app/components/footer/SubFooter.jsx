export default function SubFooter() {
  return (
    <div className="border-t border-white/10 bg-stone-950 px-[5vw] py-[1.5vw] max-sm:py-[4vw]">
      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-[1vw] text-center text-[0.75vw] max-sm:text-[2.8vw] text-white/55 sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Wildlife — India’s sanctuaries & conservation.</p>
        <p className="max-sm:hidden">Crafted with care for nature</p>
      </div>
    </div>
  )
}
