'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Copy from './Copy'
import { motion, AnimatePresence } from 'framer-motion'
import IndiaMapSVG from './map/IndiaMapSVG'
import StateInfoCard from './map/StateInfoCard'
export default function DistributionAnalysis() {
    const [hoveredStateId, setHoveredStateId] = useState(null)

    return (
        <div className='h-fit space-y-[1vw] relative w-full bg-[#fff4e5] pt-[12vw]! padd py-[8vw]! text-black! overflow-hidden'>
            <div className='h-fit w-full flex items-start gap-[1vw] justify-start'>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className='h-[4vw] w-auto mt-[1vw] overflow-hidden rounded-[1vw]'
                >
                    <Image src='/paw.svg' alt='leopard' width={1000} height={1000} className='w-full h-full object-contain' />
                </motion.div>

                <Copy>
                    <h2 className="text-[5vw] w-[80%] font-sansumi tracking-tight leading-[1.2]">Sanctuary Distribution: State </h2>
                </Copy>
            </div>

            <div className='w-[90%] flex items-center justify-between'>
                <Copy delay={0.1}>
                    <p className='text-[1.2vw] ml-[5vw] '>Number of wildlife sanctuaries across Indian states</p>
                </Copy>


            </div>

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                viewport={{ once: true }}
                className='absolute h-auto w-[20vw] bottom-0 left-0 z-10'
            >
                <Image src='/img/grass2.png' alt='map' width={1000} height={1000} className='w-full h-full object-contain' />
            </motion.div>

            {/* Map Area */}
            <div className='w-full flex items-start justify-center pt-[2vw] pb-[4vw]'>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className='w-full flex items-start justify-center gap-[2vw]'
                >
                    {/* Interactive SVG Map — shifted right with left margin */}
                    <div className='w-[55vw] min-h-[85vh] flex items-center justify-center ml-[5vw]'>
                        <IndiaMapSVG
                            hoveredStateId={hoveredStateId}
                            onStateHover={setHoveredStateId}
                        />
                    </div>

                    {/* Right side — State Card or Region Legend */}
                    <div className='sticky top-[20vh] flex-shrink-0'>
                        <StateInfoCard stateId={hoveredStateId} />
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
