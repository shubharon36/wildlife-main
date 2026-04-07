'use client'

import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { getFeaturedSanctuariesForHabitat } from '../../data/regions'

export default function HabitatDrawerContent({ region, habitat }) {
  if (!region || !habitat) return null

  const featuredSanctuaries =
    habitat.featuredSanctuaries ?? getFeaturedSanctuariesForHabitat(region, habitat)

  return (
    <div className="px-[2vw] w-[90%] space-y-[1.5vw] py-[2vw] pb-[6vw] min-h-0">

      {featuredSanctuaries.length === 0 ? (
        <p className="text-[0.95vw] opacity-70 py-[2vw]">No featured sanctuaries for this habitat in the data.</p>
      ) : (
        <div className="space-y-[2vw] pt-[1vw]">
          {featuredSanctuaries.map((sanctuary, index) => (
            <div key={`${sanctuary.name}-${index}`}>
              <div className='w-full h-fit rounded-[1vw] border border-black/15 overflow-hidden relative group cursor-pointer'>

                {/* White info card overlay on hover */}
                <div
                  className='absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-400 pointer-events-none group-hover:pointer-events-auto'
                >
                  <div className='absolute inset-0 bg-white rounded-[1vw] border-[2px] border-[#5b9bd5]/40 shadow-[0_0_1.5vw_rgba(91,155,213,0.15)] p-[1.5vw] flex flex-col justify-center'>
                    {/* Established year */}
                    <div className='flex items-center gap-[0.6vw] mb-[1vw]'>
                      <Calendar className='w-[1.2vw] h-[1.2vw] text-black/50' strokeWidth={1.5} />
                      <span className='text-[1vw] text-black/80'>
                        Est. <span className='font-semibold text-black'>{sanctuary.established}</span>
                      </span>
                    </div>

                    {/* Biospheric zone */}
                    <p className='text-[0.9vw] text-black/70 mb-[0.6vw]'>
                      Biospheric zone: <span className='font-semibold text-black'>{sanctuary.location}</span>
                    </p>

                    {/* Best Time to Visit */}
                    <p className='text-[0.9vw] text-black/70 mb-[0.6vw]'>
                      Best Time to Visit: <span className='font-semibold text-black'>{sanctuary.bestTime}</span>
                    </p>

                    {/* Key Species */}
                    <p className='text-[0.9vw] text-black/70 mb-[0.8vw]'>
                      Key Species: <span className='font-semibold text-black'>{sanctuary.keySpecies.join(', ')}</span>
                    </p>

                    {/* Habitat tags */}
                    <div className='mb-[0.8vw]'>
                      <p className='text-[0.8vw] text-black/50 mb-[0.4vw]'>Habitat</p>
                      <div className='flex flex-wrap gap-[0.4vw]'>
                        {region.habitats?.map((h) => (
                          <span
                            key={h.name}
                            className='px-[0.8vw] py-[0.3vw] rounded-full text-[0.75vw] font-medium border'
                            style={{
                              borderColor: h.name === habitat.name ? h.color : '#d1d5db',
                              color: h.name === habitat.name ? h.color : '#6b7280',
                              backgroundColor: h.name === habitat.name ? `${h.color}10` : 'transparent',
                            }}
                          >
                            {h.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Highlight / description */}
                    <div className='border-t border-black/10 pt-[0.7vw]'>
                      <p className='text-[0.85vw] text-black/60'>
                        Highlight: <span className='font-semibold text-black'>{sanctuary.description}</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className='h-[20vw]'>
                  {sanctuary.image ? (
                    <Image src={sanctuary.image} alt={sanctuary.name} width={1000} height={1000} className='w-full h-full object-cover' />
                  ) : (
                    <div className='w-full h-full bg-gray-200 flex items-center justify-center'>
                      <span className='text-gray-500 text-[1vw]'>No image available</span>
                    </div>
                  )}
                </div>

                <div className='p-[1vw]'>
                  <p className='text-[1.5vw] font-sansumi font-medium'>{sanctuary.name}</p>
                  <p>Area <span className='text-[1vw] font-medium'>{sanctuary.area}</span></p>
                </div>

              </div>

              {index < featuredSanctuaries.length - 1 && (
                <hr className="border-black/15 mt-[2vw]" />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="h-[2vw]" />
    </div>


  )
}
