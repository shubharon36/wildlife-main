export default function LinkHoverEffect({ text, href = '#', fontSize = 'text-[1vw]', responsiveFontSizeSM = 'max-sm:text-[3vw]' }) {
  return (
    <a
      href={href}
      className={`group relative inline-block font-medium text-[#F0DEB4] ${fontSize} ${responsiveFontSizeSM}`}
    >
      <span className="relative z-10">{text}</span>
      <span className="absolute bottom-0 left-0 h-px w-0 bg-current transition-[width] duration-300 ease-out group-hover:w-full" />
    </a>
  )
}
