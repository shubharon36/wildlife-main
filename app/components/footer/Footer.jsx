import Image from 'next/image'
import React from 'react'
import Copy from '../Copy'

export default function Footer() {
  return (
    <div className='w-full bg-[#fff4e5] relative text-black mt-[-8vw]' style={{ fontFamily: 'var(--font-work-sans), sans-serif' }}>

      {/* ── Curved black header with title ── */}
      <div className='relative w-full'>
        <div className='w-full bg-black pb-[3vw] pt-[3vw] relative'>

          {/* Logo */}
          <div className='absolute left-[5vw] top-[1.5vw] w-[10vw] h-auto'>
            <Image src='/img/logo.png' alt='logo' width={400} height={400} className='w-full h-auto object-contain invert brightness-200' />
          </div>

          <div className='flex flex-col items-center'>
            <p className='text-[2.2vw] font-sansumi font-semibold tracking-tight text-center text-white'>Wildlife Sanctuary</p>
            <p className='text-[1vw] font-medium text-center text-white/70'>India</p>
          </div>
        </div>

        {/* Asymmetric wave curve with blue accent lines */}
        <div className='relative w-full' style={{ marginTop: '-1px' }}>
          <svg viewBox="0 0 1440 200" preserveAspectRatio="none" className='w-full h-[10vw] block'>
            {/* Black fill wave */}
            <path d="M0,0 L0,100 Q200,180 500,120 T1000,60 Q1200,30 1440,80 L1440,0 Z" fill="black" />
            {/* Blue accent line 1 */}
            <path d="M0,100 Q200,180 500,120 T1000,60 Q1200,30 1440,80" fill="none" stroke="#2196F3" strokeWidth="2.5" />
            {/* Blue accent line 2 — slightly offset */}
            <path d="M0,110 Q200,190 500,130 T1000,70 Q1200,40 1440,90" fill="none" stroke="#2196F3" strokeWidth="1.5" opacity="0.5" />
          </svg>
        </div>
      </div>

      {/* Spacer for the curve */}
      <div className='h-[1vw]' />

      {/* ── METHODOLOGY ── */}
      <div className='padd py-[3vw] flex flex-col items-center'>
        <Copy>
          <h2 className='text-[1.8vw] font-semibold tracking-[0.3em] uppercase text-center mb-[2vw]'>Methodology</h2>
        </Copy>

        <div className='flex flex-col items-center gap-[0.5vw] text-[0.95vw] text-center'>
          <Copy>
            <p><span className='font-semibold'>Layered Data</span> — Region, Habitat, Species, Conservation Status</p>
          </Copy>
          <Copy delay={0.05}>
            <p><span className='font-semibold'>Spatial Mapping</span> — Region-wise distribution across India</p>
          </Copy>
          <Copy delay={0.1}>
            <p><span className='font-semibold'>Habitat Classification</span> — Forest, Wetland, Grassland, Coastal, Mountain, Desert</p>
          </Copy>
          <Copy delay={0.15}>
            <p><span className='font-semibold'>Data Simplification</span> — Standardized counts and percentages</p>
          </Copy>
          <Copy delay={0.2}>
            <p><span className='font-semibold'>Visual Hierarchy</span> — Color (CE, EN, VU), scale, grouping</p>
          </Copy>
          <Copy delay={0.25}>
            <p><span className='font-semibold'>Endemism</span> — India-specific species highlighted</p>
          </Copy>
          <Copy delay={0.3}>
            <p><span className='font-semibold'>Insight Focus</span> — Patterns, hotspots, risk areas</p>
          </Copy>
        </div>

        <div className='mt-[2.5vw] text-[0.9vw] text-center max-w-[45vw] leading-[1.8] text-black/70'>
          <Copy delay={0.35}>
            <p>Wildlife data is translated into structured visual systems. Geographic distribution, habitat types, and species status are organized through spatial mapping, categorization, and classification. Hierarchy is built using color, scale, and grouping to highlight key patterns.</p>
          </Copy>
        </div>
      </div>

      {/* ── DATA SOURCES ── */}
      <div className='padd py-[3vw] flex flex-col items-center'>
        <Copy>
          <h2 className='text-[1.8vw] font-semibold text-center mb-[1.5vw]'>Data Sources</h2>
        </Copy>

        <div className='flex flex-col items-center gap-[0.4vw] text-[0.95vw] text-center'>
          <Copy delay={0.05}>
            <p className='font-medium  '>Ministry of Environment, Forest and Climate Change (MoEFCC)</p>
          </Copy>
          <Copy delay={0.1}>
            <p className='font-medium  '>wildlife sanctuaries of India (Wikipedia)</p>
          </Copy>
          <Copy delay={0.15}>
            <p className='font-medium  '>IUCN Red List (2025–2026)</p>
          </Copy>
          <Copy delay={0.2}>
            <p className='font-medium  '>National Wildlife Database Cell</p>
          </Copy>
          <Copy delay={0.25}>
            <p className='font-medium  '>Open Government Data platform India</p>
          </Copy>
          <Copy delay={0.3}>
            <p className='font-medium  '>Wildlife Institute of India (WII)</p>
          </Copy>
        </div>

        <div className='mt-[2vw] text-[0.85vw] text-center max-w-[38vw] leading-[1.8] text-black/60'>
          <Copy delay={0.35}>
            <p>The dataset includes sanctuary distribution, habitat types, species data, and conservation status. For clarity and consistency, the data has been curated, standardized, and simplified where necessary.</p>
          </Copy>
        </div>
      </div>

      {/* ── University Logo ── */}
      <div className='flex flex-col items-center py-[3vw]'>
        <Image src='/img/dau-logo.png' alt='Dhirubhai Ambani University' width={400} height={400} className='w-[12vw] h-auto object-contain' />
      </div>

      {/* ── Credits ── */}
      <div className='flex flex-col items-center pb-[4vw] pt-[2vw] gap-[1.2vw]'>
        <div className='text-center'>
          <Copy>
            <p className='text-[0.85vw] text-black/60'>Framework, Data research, visualisation and information Design</p>
          </Copy>
          <Copy delay={0.05}>
            <p className='text-[1.25vw] font-bold tracking-wide '>Priyanshi Chauhan</p>
          </Copy>
        </div>

        <div className='text-center'>
          <Copy delay={0.1}>
            <p className='text-[0.85vw] text-black/60'>Project Guide</p>
          </Copy>
          <Copy delay={0.15}>
            <p className='text-[1.25vw] font-bold tracking-wide'>Prof. Dr. Anupam Rana</p>
          </Copy>
        </div>
      </div>

      {/* ── Footer Image ── */}
      <div className='w-full'>
        <Image src='/img/footer-img.png' alt='footer decoration' width={1920} height={400} className='w-full h-auto object-cover' />
      </div>

    </div>
  )
}
