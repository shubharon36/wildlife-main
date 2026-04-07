import Image from 'next/image'

/**
 * Decorative panel image. Add `public/footer-form.jpg` (or pass `src`) for a photo;
 * until then uses a neutral gradient so layout matches the design.
 */
export default function ParallaxImage({ src, className = '' }) {
  if (src) {
    return (
      <Image
        src={src}
        alt=""
        fill
        sizes="30vw"
        className={`object-cover ${className}`}
        priority={false}
      />
    )
  }
  return (
    <div
      className={`h-full w-full bg-linear-to-br from-emerald-900/70 via-stone-900 to-amber-950/80 ${className}`}
      aria-hidden
    />
  )
}
