'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Copy from './Copy'

const habitatData = {
    labels: ['Forest', 'Wetland', 'Grassland', 'Mountain', 'Coastal', 'Desert'],
    datasets: [
        {
            name: 'Birds',
            color: '#00FF00',
            values: [95, 85, 70, 60, 75, 45]
        },
        {
            name: 'Amphibians',
            color: '#FFFF00',
            values: [80, 90, 50, 40, 60, 25]
        },
        {
            name: 'Reptiles',
            color: '#00BFFF',
            values: [70, 65, 80, 55, 85, 70]
        },
        {
            name: 'Mammals',
            color: '#FF00FF',
            values: [85, 55, 75, 80, 40, 50]
        }
    ]
}

const RadarChart = ({ data, hoveredDataset, setHoveredDataset }) => {
    const centerX = 200
    const centerY = 200
    const maxRadius = 150
    const levels = 5

    const angleStep = (2 * Math.PI) / data.labels.length

    const getPoint = (value, index) => {
        const angle = angleStep * index - Math.PI / 2
        const radius = (value / 100) * maxRadius
        return {
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle)
        }
    }

    const getLabelPosition = (index) => {
        const angle = angleStep * index - Math.PI / 2
        const radius = maxRadius + 30
        return {
            x: centerX + radius * Math.cos(angle),
            y: centerY + radius * Math.sin(angle)
        }
    }

    const getPolygonPoints = (values) => {
        return values.map((value, index) => {
            const point = getPoint(value, index)
            return `${point.x},${point.y}`
        }).join(' ')
    }

    return (
        <svg viewBox="0 0 400 400" className="w-full h-full">
            {/* Background circles */}
            {[...Array(levels)].map((_, i) => {
                const radius = ((i + 1) / levels) * maxRadius
                return (
                    <circle
                        key={i}
                        cx={centerX}
                        cy={centerY}
                        r={radius}
                        fill="none"
                        stroke="#c9a86c"
                        strokeWidth="1"
                        strokeDasharray={i === levels - 1 ? "4,4" : "none"}
                        opacity="0.5"
                    />
                )
            })}

            {/* Axis lines */}
            {data.labels.map((_, index) => {
                const point = getPoint(100, index)
                return (
                    <line
                        key={index}
                        x1={centerX}
                        y1={centerY}
                        x2={point.x}
                        y2={point.y}
                        stroke="#c9a86c"
                        strokeWidth="1"
                        opacity="0.3"
                    />
                )
            })}

            {/* Level labels */}
            {[...Array(levels)].map((_, i) => {
                const value = ((i + 1) / levels) * 100
                const y = centerY - ((i + 1) / levels) * maxRadius
                return (
                    <text
                        key={i}
                        x={centerX + 5}
                        y={y}
                        fontSize="10"
                        fill="#8b7355"
                        opacity="0.7"
                    >
                        {value}
                    </text>
                )
            })}

            {/* Data polygons */}
            {data.datasets.map((dataset, datasetIndex) => {
                const isHovered = hoveredDataset === dataset.name
                const isAnyHovered = hoveredDataset !== null
                return (
                    <g key={datasetIndex}>
                        <polygon
                            points={getPolygonPoints(dataset.values)}
                            fill={isHovered ? dataset.color : 'none'}
                            fillOpacity={isHovered ? 0.3 : 0}
                            stroke={dataset.color}
                            strokeWidth={isHovered ? 3 : 2}
                            opacity={isAnyHovered && !isHovered ? 0.3 : 1}
                            style={{ transition: 'all 0.3s ease' }}
                            onMouseEnter={() => setHoveredDataset(dataset.name)}
                            onMouseLeave={() => setHoveredDataset(null)}
                            className="cursor-pointer"
                        />
                        {/* Invisible wider stroke for easier hover */}
                        <polygon
                            points={getPolygonPoints(dataset.values)}
                            fill="none"
                            stroke="transparent"
                            strokeWidth="15"
                            onMouseEnter={() => setHoveredDataset(dataset.name)}
                            onMouseLeave={() => setHoveredDataset(null)}
                            className="cursor-pointer"
                        />
                    </g>
                )
            })}

            {/* Labels */}
            {data.labels.map((label, index) => {
                const pos = getLabelPosition(index)
                return (
                    <text
                        key={index}
                        x={pos.x}
                        y={pos.y}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize="14"
                        fill="#3e2407"
                        fontWeight="500"
                    >
                        {label}
                    </text>
                )
            })}
        </svg>
    )
}

export default function HabitatSpeciesDistribition() {
    const [hoveredDataset, setHoveredDataset] = useState(null)

    return (
        <div className='w-full h-fit mb-[10vw] mt-[4vw] min-h-screen bg-[#fff4e5] relative padd text-black!'>
            <div className='h-fit w-full flex items-start gap-[1vw] justify-start'>
                <div className='h-[4vw] w-auto mt-[1vw] overflow-hidden rounded-[1vw]'>
                    {/* <Image src='/paw.svg' alt='leopard' width={1000} height={1000} className='w-full h-full object-contain' /> */}
                </div>
                <h2 className='text-[6vw] w-full font-sansumi leading-[1.2]'>Habitat–Species Distribution Analysis</h2>

            </div>
            <Copy>

                <p className='text-[1.2vw] ml-[5vw] w-[50%]'>Comparative patterns of species richness across major habitat types in India's wildlife sanctuaries</p>
            </Copy>

            <div className='flex items-center mt-[10vw] justify-center'>
                <div className='w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] relative'>
                    <RadarChart
                        data={habitatData}
                        hoveredDataset={hoveredDataset}
                        setHoveredDataset={setHoveredDataset}
                    />
                </div>

                {/* Legend */}
                <div className='flex flex-col gap-[1vw] absolute top-[70%] left-[5vw] ml-[4vw]'>
                    {habitatData.datasets.map((dataset, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-[0.8vw] cursor-pointer transition-opacity duration-300 ${hoveredDataset !== null && hoveredDataset !== dataset.name ? 'opacity-30' : 'opacity-100'
                                }`}
                            onMouseEnter={() => setHoveredDataset(dataset.name)}
                            onMouseLeave={() => setHoveredDataset(null)}
                        >
                            <div
                                className='w-[1.2vw] h-[1.2vw] rounded-full'
                                style={{ backgroundColor: dataset.color }}
                            />
                            <span className='text-[1.2vw] text-stone-700'>{dataset.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className='h-[75vh] w-auto absolute bottom-0 right-0 pointer-events-none'>
                <Image src='/img/birds2.png' alt='habitat-species-distribution' width={1000} height={1000} className='w-full h-full object-contain' />
            </div>
        </div>
    )
}
