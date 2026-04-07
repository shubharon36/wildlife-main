'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Copy from './Copy'
import { motion, AnimatePresence } from 'framer-motion'
import IndiaMapSVG from './map/IndiaMapSVG'
import StateInfoCard from './map/StateInfoCard'
import { regionLegend } from '../data/statesData'

export default function DistributionAnalysis() {
    const [activeView, setActiveView] = useState('states')
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
                    <h2 className="text-[5vw] w-[80%] font-sansumi tracking-tight leading-[1.2]">Sanctuary Distribution: State & Region</h2>
                </Copy>
            </div>

            <div className='w-[90%] flex items-center justify-between'>
                <Copy delay={0.1}>
                    <p className='text-[1.2vw] ml-[5vw] '>Number of wildlife sanctuaries across Indian states and regions</p>
                </Copy>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className='flex items-center relative z-300 gap-4'
                >
                    <motion.button 
                        onClick={() => { setActiveView('states'); setHoveredStateId(null) }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-3 cursor-pointer text-sm rounded-tr-full rounded-bl-full tracking-wider border-2 transition-all duration-300 flex items-center gap-3 ${activeView === 'states' ? 'bg-stone-900 text-white border-stone-900 shadow-lg' : 'bg-transparent text-stone-900 border-stone-900'}`}
                    >
                        State
                    </motion.button>
                    <motion.button 
                        onClick={() => { setActiveView('regions'); setHoveredStateId(null) }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-8 py-3 cursor-pointer text-sm rounded-tr-full rounded-bl-full tracking-wider border-2 transition-all duration-300 flex items-center gap-3 ${activeView === 'regions' ? 'bg-stone-900 text-white border-stone-900 shadow-lg' : 'bg-transparent text-stone-900 border-stone-900'}`}
                    >
                        Region
                    </motion.button>
                </motion.div>
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
                    key={activeView}
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
                            mode={activeView}
                        />
                    </div>

                    {/* Right side — State Card or Region Legend */}
                    <div className='sticky top-[20vh] flex-shrink-0'>
                        {activeView === 'states' ? (
                            <StateInfoCard stateId={hoveredStateId} />
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, ease: 'easeOut' }}
                                className='border-2 border-dotted p-[1.2vw] px-[2vw] rounded-2xl space-y-[.8vw] border-black'
                            >
                                {regionLegend.map((item, index) => (
                                    <motion.div 
                                        key={item.label} 
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.08 }}
                                        className='flex items-center gap-[1.2vw]'
                                    >
                                        <div className='w-[1vw] h-[1vw] rounded-sm' style={{ backgroundColor: item.color }}></div>
                                        <p className='text-[0.9vw] w-[5vw]'>{item.label}</p>
                                        <p className='text-[0.9vw] font-sansumi font-bold'>{item.count}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </div>
    )
}
