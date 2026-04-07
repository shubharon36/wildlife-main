'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { stateData } from '../../data/statesData'

export default function StateInfoCard({ stateId }) {
  const state = stateId ? stateData[stateId] : null

  return (
    <div className='w-[22vw] min-h-[30vw] relative'>
      <AnimatePresence mode="wait">
        {state ? (
          <motion.div
            key={stateId}
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 30, scale: 0.96 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className='w-full bg-white rounded-[1.2vw] overflow-hidden shadow-xl border border-stone-200'
          >
            {/* State Image */}
            <div className='h-[12vw] w-full relative overflow-hidden'>
              <Image
                src={state.image}
                alt={state.name}
                width={600}
                height={400}
                className='w-full h-full object-cover'
              />
              {/* State name overlay */}
              <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-[1vw] pt-[3vw]'>
                <p className='text-white text-[1.6vw] font-sansumi font-semibold leading-tight'>{state.name}</p>
              </div>
            </div>

            {/* Info Content */}
            <div className='p-[1.2vw] space-y-[0.8vw]'>
              {/* Stats Row */}
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-[0.65vw] text-stone-400 uppercase tracking-widest'>Sanctuaries</p>
                  <p className='text-[1.4vw] font-sansumi font-bold text-stone-900'>{state.sanctuaries}</p>
                </div>
                <div className='text-right'>
                  <p className='text-[0.65vw] text-stone-400 uppercase tracking-widest'>Habitat</p>
                  <p className='text-[0.85vw] font-medium text-stone-700'>{state.habitat}</p>
                </div>
              </div>

              {/* Biogeographic Zone */}
              <div>
                <p className='text-[0.65vw] text-stone-400 uppercase tracking-widest'>Biogeographic Zone</p>
                <p className='text-[0.85vw] font-semibold text-stone-800'>{state.biogeographicZone}</p>
              </div>

              {/* Key Species */}
              <div>
                <p className='text-[0.65vw] text-stone-400 uppercase tracking-widest'>Key Species</p>
                <p className='text-[0.85vw] font-medium text-stone-700'>{state.keySpecies}</p>
              </div>

              {/* Notable Sanctuary */}
              <div className='flex items-start gap-[0.4vw] border-t border-stone-100 pt-[0.6vw]'>
                <svg className='w-[0.9vw] h-[0.9vw] mt-[0.15vw] text-red-500 shrink-0' viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <p className='text-[0.8vw] font-medium text-stone-700'>{state.notableSanctuary}</p>
              </div>

              {/* Habitat Tags */}
              <div className='flex flex-wrap gap-[0.4vw] pt-[0.2vw]'>
                {state.tags.map((tag) => (
                  <span
                    key={tag}
                    className='px-[0.7vw] py-[0.25vw] text-[0.65vw] font-medium rounded-full'
                    style={{
                      backgroundColor: getTagColor(tag).bg,
                      color: getTagColor(tag).text,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='w-full h-[30vw] flex items-center justify-center'
          >
            <div className='text-center space-y-[0.8vw]'>
              <div className='w-[3vw] h-[3vw] mx-auto rounded-full bg-stone-100 flex items-center justify-center'>
                <svg className='w-[1.5vw] h-[1.5vw] text-stone-300' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <p className='text-[0.9vw] text-stone-400 font-sansumi'>Hover over a state</p>
              <p className='text-[0.7vw] text-stone-300'>to view sanctuary details</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function getTagColor(tag) {
  const colors = {
    Forest: { bg: '#dcfce7', text: '#166534' },
    Wetland: { bg: '#dbeafe', text: '#1e40af' },
    Coastal: { bg: '#e0f2fe', text: '#0369a1' },
    Alpine: { bg: '#ede9fe', text: '#5b21b6' },
    Desert: { bg: '#fef3c7', text: '#92400e' },
    Grassland: { bg: '#f0fdf4', text: '#15803d' },
    Marine: { bg: '#cffafe', text: '#0e7490' },
    Coral: { bg: '#fce7f3', text: '#9d174d' },
    Mangrove: { bg: '#d1fae5', text: '#065f46' },
    Mountain: { bg: '#e0e7ff', text: '#3730a3' },
    Scrubland: { bg: '#fef9c3', text: '#854d0e' },
    Tribal: { bg: '#fee2e2', text: '#991b1b' },
    Urban: { bg: '#f3f4f6', text: '#374151' },
  }
  return colors[tag] || { bg: '#f5f5f4', text: '#57534e' }
}
