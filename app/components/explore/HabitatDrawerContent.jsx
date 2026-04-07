'use client'

import Image from 'next/image'
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
              <div className='w-full h-fit rounded-[1vw] border border-foreground overflow-hidden relative group cursor-pointer'>

                {/* Hover overlay - covers entire card */}
                <div className='absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-center items-center p-[1.5vw] text-white'>
                  <p className='text-[1.2vw] font-sansumi font-medium mb-[1vw]'>{sanctuary.name}</p>
                  <p className='text-[0.9vw] text-center mb-[1vw] opacity-90'>{sanctuary.description}</p>
                  <div className='flex flex-wrap justify-center gap-[0.5vw] mb-[1vw]'>
                    {sanctuary.keySpecies.map((species, idx) => (
                      <span key={idx} className='px-[0.8vw] py-[0.3vw] bg-white/20 rounded-full text-[0.75vw]'>{species}</span>
                    ))}
                  </div>
                  <div className='flex gap-[2vw] text-[0.8vw]'>
                    <div className='text-center'>
                      <p className='opacity-60 uppercase tracking-wide'>Area</p>
                      <p className='font-medium'>{sanctuary.area}</p>
                    </div>
                    <div className='text-center'>
                      <p className='opacity-60 uppercase tracking-wide'>Established</p>
                      <p className='font-medium'>{sanctuary.established}</p>
                    </div>
                    <div className='text-center'>
                      <p className='opacity-60 uppercase tracking-wide'>Best Time</p>
                      <p className='font-medium'>{sanctuary.bestTime}</p>
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
