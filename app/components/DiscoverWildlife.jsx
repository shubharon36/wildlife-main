'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Copy from './Copy'
import Image from 'next/image'

const wildlifeGallery = [
  // Endangered species (e1-e10)
  {
    id: 'tiger-1',
    name: 'Bengal Tiger',
    category: 'animal',
    location: 'Central India, Sundarbans',
    region: 'central',
    image: '/img/e1.png',
    habitat: 'Forests (tropical, mangrove, grassland)',
    conservationStatus: 'Endangered'
  },
  {
    id: 'lion-1',
    name: 'Asiatic Lion',
    category: 'animal',
    location: 'Gujarat (Gir)',
    region: 'west',
    image: '/img/e2.png',
    habitat: 'Dry deciduous forest',
    conservationStatus: 'Endangered'
  },
  {
    id: 'elephant-1',
    name: 'Asian Elephant',
    category: 'animal',
    location: 'South India, Northeast',
    region: 'south',
    image: '/img/e3.png',
    habitat: 'Forests & grasslands',
    conservationStatus: 'Endangered'
  },
  {
    id: 'dolphin-1',
    name: 'Ganges River Dolphin',
    category: 'animal',
    location: 'Ganga-Brahmaputra basin',
    region: 'north',
    image: '/img/e4.png',
    habitat: 'Freshwater rivers',
    conservationStatus: 'Endangered'
  },
  {
    id: 'snow-leopard-1',
    name: 'Snow Leopard',
    category: 'animal',
    location: 'Himalayas (Ladakh, Himachal)',
    region: 'north',
    image: '/img/e5.png',
    habitat: 'Alpine mountains',
    conservationStatus: 'Endangered'
  },
  {
    id: 'lion-tailed-macaque-1',
    name: 'Lion-tailed Macaque',
    category: 'animal',
    location: 'Western Ghats',
    region: 'south',
    image: '/img/e6.png',
    habitat: 'Tropical rainforest',
    conservationStatus: 'Endangered'
  },
  {
    id: 'red-panda-1',
    name: 'Red Panda',
    category: 'animal',
    location: 'Sikkim, Arunachal Pradesh',
    region: 'northeast',
    image: '/img/e7.png',
    habitat: 'Temperate forest',
    conservationStatus: 'Endangered'
  },
  {
    id: 'nilgiri-tahr-1',
    name: 'Nilgiri Tahr',
    category: 'animal',
    location: 'Western Ghats',
    region: 'south',
    image: '/img/e8.png',
    habitat: 'Montane grasslands',
    conservationStatus: 'Endangered'
  },
  {
    id: 'pangolin-1',
    name: 'Indian Pangolin',
    category: 'animal',
    location: 'Central & South India',
    region: 'central',
    image: '/img/e9.png',
    habitat: 'Forests & grasslands',
    conservationStatus: 'Endangered'
  },
  {
    id: 'dhole-1',
    name: 'Dhole (Indian Wild Dog)',
    category: 'animal',
    location: 'Central, South India',
    region: 'central',
    image: '/img/e10.png',
    habitat: 'Forests',
    conservationStatus: 'Endangered'
  },
  // Critically Endangered species (cd1-cd10)
  {
    id: 'great-indian-bustard-1',
    name: 'Great Indian Bustard',
    category: 'animal',
    location: 'Rajasthan, Gujarat',
    region: 'west',
    image: '/img/cd1.png',
    habitat: 'Grasslands',
    conservationStatus: 'Critically Endangered'
  },
  {
    id: 'bengal-florican-1',
    name: 'Bengal Florican',
    category: 'animal',
    location: 'Assam, Uttar Pradesh',
    region: 'northeast',
    image: '/img/cd2.png',
    habitat: 'Grasslands',
    conservationStatus: 'Critically Endangered'
  },
  {
    id: 'gharial-1',
    name: 'Gharial',
    category: 'animal',
    location: 'Chambal, Ganga basin',
    region: 'north',
    image: '/img/cd3.png',
    habitat: 'Rivers (freshwater)',
    conservationStatus: 'Critically Endangered'
  },
  {
    id: 'red-headed-vulture-1',
    name: 'Red-headed Vulture',
    category: 'animal',
    location: 'Central & Northern India',
    region: 'central',
    image: '/img/cd4.png',
    habitat: 'Open forests',
    conservationStatus: 'Critically Endangered'
  },
  {
    id: 'white-rumped-vulture-1',
    name: 'White-rumped Vulture',
    category: 'animal',
    location: 'North & Central India',
    region: 'north',
    image: '/img/cd5.png',
    habitat: 'Plains, open countryside',
    conservationStatus: 'Critically Endangered'
  },
  {
    id: 'jerdons-courser-1',
    name: "Jerdon's Courser",
    category: 'animal',
    location: 'Andhra Pradesh',
    region: 'south',
    image: '/img/cd6.png',
    habitat: 'Scrub forests',
    conservationStatus: 'Critically Endangered'
  },
  {
    id: 'white-bellied-heron-1',
    name: 'White-bellied Heron',
    category: 'animal',
    location: 'Northeast India',
    region: 'northeast',
    image: '/img/cd7.png',
    habitat: 'Riverine forests',
    conservationStatus: 'Critically Endangered'
  },
  {
    id: 'spoon-billed-sandpiper-1',
    name: 'Spoon-billed Sandpiper',
    category: 'animal',
    location: 'Eastern coast (Odisha, West Bengal)',
    region: 'east',
    image: '/img/cd8.png',
    habitat: 'Coastal wetlands',
    conservationStatus: 'Critically Endangered'
  },
  {
    id: 'malabar-civet-1',
    name: 'Malabar Civet',
    category: 'animal',
    location: 'Western Ghats',
    region: 'south',
    image: '/img/cd9.png',
    habitat: 'Tropical forests',
    conservationStatus: 'Critically Endangered'
  },
  {
    id: 'pygmy-hog-1',
    name: 'Pygmy Hog',
    category: 'animal',
    location: 'Assam',
    region: 'northeast',
    image: '/img/cd10.png',
    habitat: 'Tall grasslands',
    conservationStatus: 'Critically Endangered'
  },
  // Vulnerable species (v1-v10)
  {
    id: 'leopard-1',
    name: 'Indian Leopard',
    category: 'animal',
    location: 'Across India',
    region: 'central',
    image: '/img/v1.png',
    habitat: 'Forests, scrublands',
    conservationStatus: 'Vulnerable'
  },
  {
    id: 'sloth-bear-1',
    name: 'Sloth Bear',
    category: 'animal',
    location: 'Central & South India',
    region: 'central',
    image: '/img/v2.png',
    habitat: 'Dry forests',
    conservationStatus: 'Vulnerable'
  },
  {
    id: 'gaur-1',
    name: 'Gaur (Indian Bison)',
    category: 'animal',
    location: 'Central & South India',
    region: 'south',
    image: '/img/v3.png',
    habitat: 'Forests',
    conservationStatus: 'Vulnerable'
  },
  {
    id: 'barasingha-1',
    name: 'Barasingha (Swamp Deer)',
    category: 'animal',
    location: 'Central & North India',
    region: 'central',
    image: '/img/v4.png',
    habitat: 'Grasslands, wetlands',
    conservationStatus: 'Vulnerable'
  },
  {
    id: 'nilgiri-langur-1',
    name: 'Nilgiri Langur',
    category: 'animal',
    location: 'Western Ghats',
    region: 'south',
    image: '/img/v5.png',
    habitat: 'Tropical forest',
    conservationStatus: 'Vulnerable'
  },
  {
    id: 'olive-ridley-turtle-1',
    name: 'Olive Ridley Turtle',
    category: 'animal',
    location: 'Odisha coast',
    region: 'east',
    image: '/img/v6.png',
    habitat: 'Coastal waters',
    conservationStatus: 'Vulnerable'
  },
  {
    id: 'dugong-1',
    name: 'Dugong',
    category: 'animal',
    location: 'Andaman & Nicobar, Gulf of Mannar',
    region: 'south',
    image: '/img/v7.png',
    habitat: 'Seagrass beds',
    conservationStatus: 'Vulnerable'
  },
  {
    id: 'clouded-leopard-1',
    name: 'Clouded Leopard',
    category: 'animal',
    location: 'Northeast India',
    region: 'northeast',
    image: '/img/v8.png',
    habitat: 'Dense forests',
    conservationStatus: 'Vulnerable'
  },
  {
    id: 'four-horned-antelope-1',
    name: 'Four-horned Antelope (Chousingha)',
    category: 'animal',
    location: 'Central India',
    region: 'central',
    image: '/img/v9.png',
    habitat: 'Dry forests',
    conservationStatus: 'Vulnerable'
  },
  {
    id: 'smooth-coated-otter-1',
    name: 'Smooth-coated Otter',
    category: 'animal',
    location: 'North & Central India',
    region: 'north',
    image: '/img/v10.png',
    habitat: 'Rivers, wetlands',
    conservationStatus: 'Vulnerable'
  }
]

export default function DiscoverWildlife() {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [activeFilter, setActiveFilter] = useState('Critically Endangered')

  const filterOptions = [
    { label: 'Critically Endangered', value: 'Critically Endangered', color: 'bg-red-600' },
    { label: 'Endangered', value: 'Endangered', color: 'bg-orange-500' },
    { label: 'Vulnerable', value: 'Vulnerable', color: 'bg-yellow-500' }
  ]

  const filteredGallery = activeFilter
    ? wildlifeGallery.filter(item => item.conservationStatus === activeFilter)
    : wildlifeGallery

  // Get the hovered item data for center display
  const hoveredItemData = hoveredItem
    ? filteredGallery.find(item => item.id === hoveredItem)
    : null

  // Calculate positions for circular layout
  const getCircularPosition = (index, total, radius) => {
    const angle = (index / total) * 2 * Math.PI - Math.PI / 2 // Start from top
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius
    return { x, y }
  }

  const getStatusColor = (status) => {
    if (status === 'Critically Endangered') return 'bg-red-600'
    if (status === 'Endangered') return 'bg-orange-500'
    return 'bg-yellow-500'
  }

  const getStatusBorderColor = (status) => {
    if (status === 'Critically Endangered') return 'border-red-400'
    if (status === 'Endangered') return 'border-orange-400'
    return 'border-yellow-400'
  }

  return (
    <div className='bg-[#fff4e5] w-full text-black! py-[8vw]! pt-[10vw]! padd min-h-screen relative'>
      {/* Hover Image Overlay */}

      <div className='h-[100vh] w-auto flex items-center justify-center absolute top-0 right-0'>
        <Image src='/img/birdswithsun.png' alt='wildlife' width={1000} height={1000} className='w-full h-full object-contain' />
      </div>
      <Copy>
        <p className='text-[6vw] font-sansumi w-[75%] leading-none'>Threatened Species of <span className='text-transparent font-normal!' style={{ WebkitTextStroke: '2px var(--foreground)' }}>India.</span></p>
      </Copy>
      <Copy>
        <p className='text-[1.2vw] w-[60%] mt-4 mb-8 text-stone-600'>Explore species at risk of extinction, categorized by conservation status based on IUCN classification</p>
      </Copy>



      <div className='flex gap-4 mb-12'>
        {filterOptions.map((filter) => (
          <button
            key={filter.value}
            onClick={() => setActiveFilter(activeFilter === filter.value ? null : filter.value)}
            className={`px-8 py-3 cursor-pointer text-sm rounded-tr-full rounded-bl-full tracking-wider border-2 transition-all duration-300 flex items-center gap-3 ${activeFilter === filter.value
              ? 'bg-stone-900 text-white border-stone-900 shadow-lg'
              : 'bg-white/50 text-stone-900 border-stone-300 hover:border-stone-900 hover:bg-white'
              }`}
          >
            {/* <span className={`w-3 h-3 rounded-full ${filter.color}`} /> */}
            {filter.label}
          </button>
        ))}
      </div>

      <Copy>
        <div className='flex items-center gap-4 mb-10'>
          <p className='text-[1.1vw] uppercase tracking-widest text-stone-500'>Total Species</p>
          <span className='text-[2vw] font-bold text-stone-800'>{filteredGallery.length}</span>
        </div>
      </Copy>

      {/* Circular Layout Container */}
      <div className='relative w-full flex items-center justify-center' style={{ height: '70vw' }}>
        {/* Decorative rings */}
        <div className='absolute w-[65vw] h-[65vw] rounded-full border border-stone-300/30' />
        <div className='absolute w-[52vw] h-[52vw] rounded-full border border-stone-300/20' />

        {/* Center Circle - Info Display */}
        <div className='absolute z-10 w-[26vw] h-[26vw] rounded-full bg-gradient-to-br from-white to-[#f5f0e8] flex items-center justify-center shadow-2xl border-4 text-white! border-white overflow-hidden'>

          <AnimatePresence>
            {hoveredItemData && (
              <motion.img
                key={`bg-${hoveredItemData.id}`}
                initial={{ scale: 1.2, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 1.2, opacity: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                src={hoveredItemData.image}
                alt={hoveredItemData.name}
                className='absolute inset-0 w-full h-full object-cover brightness-50 pointer-events-none'
              />
            )}
          </AnimatePresence>
          <AnimatePresence mode="wait">
            {hoveredItemData ? (
              <motion.div
                key={hoveredItemData.id}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className='text-center p-8 flex flex-col items-center justify-center relative z-10'
              >



                <div className='text-[0.75vw] uppercase tracking-[0.2em]  mb-3'>
                  {hoveredItemData.category}
                </div>
                <div className='text-[1.6vw] font-semibold leading-tight mb-3 ' style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}>
                  {hoveredItemData.name}
                </div>
                <div className='text-[0.85vw]  mb-4 flex items-center gap-2'>
                  <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
                  </svg>
                  {hoveredItemData.location}
                </div>
                <div className='flex items-center gap-2 px-4 py-2 rounded-full bg-stone-100'>
                  <div className={`w-2.5 h-2.5 rounded-full ${getStatusColor(hoveredItemData.conservationStatus)} animate-pulse`} />
                  <span className='text-[0.75vw] font-medium text-stone-600'>{hoveredItemData.conservationStatus}</span>
                </div>
                <div className='text-[0.7vw]  mt-4 italic'>
                  {hoveredItemData.habitat}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className='text-center p-8'
              >
                <div className='w-16 h-16 mx-auto mb-4 rounded-full bg-stone-100 flex items-center justify-center'>
                  <svg className='w-8 h-8 text-stone-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                  </svg>
                </div>
                <div className='text-[1vw] text-stone-400'>Hover over a species</div>
                <div className='text-[0.75vw] text-stone-300 mt-2'>to learn more</div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Circular Images */}
        <div className='relative w-[70vw] h-[70vw]'>
          <AnimatePresence>
            {filteredGallery.map((item, index) => {
              const { x, y } = getCircularPosition(index, filteredGallery.length, 28) // increased radius
              const isHovered = hoveredItem === item.id

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.04, ease: 'backOut' }}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className='absolute cursor-pointer'
                  style={{
                    left: `calc(50% + ${x}vw - 6vw)`,
                    top: `calc(50% + ${y}vw - 6vw)`,
                  }}
                >
                  <motion.div
                    animate={{
                      scale: isHovered ? 1.25 : 1,
                      zIndex: isHovered ? 20 : 1
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={`w-[12vw] h-[12vw] rounded-full overflow-hidden border-[5px] ${isHovered ? getStatusBorderColor(item.conservationStatus) : 'border-white'}`}
                    style={{
                      boxShadow: isHovered
                        ? '0 20px 60px rgba(0,0,0,0.35), 0 0 0 4px rgba(255,255,255,0.5)'
                        : '0 8px 30px rgba(0,0,0,0.15)'
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-full h-full object-cover transition-transform duration-700'
                      style={{
                        transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                        filter: isHovered ? 'brightness(1.05)' : 'brightness(1)'
                      }}
                    />
                    {/* Status indicator dot */}
                    <div
                      className={`absolute bottom-2 right-2 w-3 h-3 rounded-full ${getStatusColor(item.conservationStatus)} border-2 border-white shadow-md`}
                      style={{ opacity: isHovered ? 0 : 1, transition: 'opacity 0.3s' }}
                    />
                  </motion.div>
                  {/* Name label on hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 5 }}
                    className='absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-stone-900 text-white px-3 py-1.5 rounded-full text-[0.7vw] font-medium shadow-lg'
                  >
                    {item.name}
                  </motion.div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}