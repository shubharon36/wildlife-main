'use client'

function sizeClasses(size) {
  switch (size) {
    case 'small':
      return 'w-[10vw] h-[10vw]'
    case 'medium':
      return 'w-[12vw] h-[12vw]'
    case 'large':
      return 'w-[14vw] h-[14vw]'
    default:
      return 'w-[12vw] h-[12vw]'
  }
}

function ringSize(size) {
  switch (size) {
    case 'small':
      return 'w-[12vw] h-[12vw]'
    case 'medium':
      return 'w-[14.5vw] h-[14.5vw]'
    case 'large':
      return 'w-[17vw] h-[17vw]'
    default:
      return 'w-[14.5vw] h-[14.5vw]'
  }
}

export default function RegionBubble({ region, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(region)}
      className={`group absolute ${sizeClasses(region.size)} rounded-full flex flex-col items-center justify-center text-white cursor-pointer transition-all duration-300 ease-out hover:scale-105 active:scale-95`}
      style={{
        backgroundColor: region.color,
        top: region.top,
        left: region.left,
      }}
    >
      {/* Ring that expands on hover */}
      <span
        className={`absolute ${ringSize(region.size)} rounded-full border-2 pointer-events-none transition-all duration-300 ease-out scale-90 opacity-0 group-hover:scale-95 group-hover:opacity-20`}
        style={{ borderColor: region.color }}
      />

      <span className="text-[0.7vw] opacity-80 transition-transform duration-300 group-hover:-translate-y-0.5">
        {region.subtitle}
      </span>
      <span className="text-[2vw] font-serif font-medium transition-transform duration-300 group-hover:scale-105">
        {region.name}
      </span>
      <span className="text-[0.8vw] opacity-90 transition-all duration-300 group-hover:translate-y-0.5 group-hover:opacity-100">
        {region.count} Sanctuaries
      </span>
    </button>
  )
}
