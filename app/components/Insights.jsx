'use client'
import React from 'react'
import { motion } from 'framer-motion'

const insights = [
  {
    label: 'Total Protected Areas',
    value: '582',
    description: 'Across all regions',
    color: '#6B9BD1'
  },
  {
    label: 'Endangered Species',
    value: '127+',
    description: 'Under active protection',
    color: '#D98B6C'
  },
  {
    label: 'Conservation Success',
    value: '73%',
    description: 'Population growth rate',
    color: '#7BC47F'
  },
  {
    label: 'Protected Land Area',
    value: '5.4%',
    description: 'Of India\'s total area',
    color: '#E8B563'
  }
];

export default function Insights() {
  return (
    <section className="relative padd pb-[8vw]! text-black! bg-[#FFF4E5]">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-3xl"
        >
          <h2 className="text-6xl mb-6" style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}>
            Sanctuary Insights
          </h2>
          <p className="text-xl ">
            Key statistics highlighting India's commitment to biodiversity conservation and wildlife protection.
          </p>
        </motion.div>

        {/* Insight Cards */}
        <div className="grid grid-cols-4 gap-8">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-black/10 hover:bg-black/5 transition-all duration-300">
                {/* Color Accent */}
                <div 
                  className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                  style={{ backgroundColor: insight.color }}
                />
                
                <div className="space-y-4">
                  <div 
                    className="text-5xl"
                    style={{ fontFamily: 'var(--font-serif, Georgia, serif)' }}
                  >
                    {insight.value}
                  </div>
                  <div>
                    <div className="text-base mb-1">{insight.label}</div>
                    <div className="text-sm ">{insight.description}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
