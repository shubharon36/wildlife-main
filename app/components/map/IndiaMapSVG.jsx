'use client'
import { useRef, useCallback, useEffect } from 'react'
import dynamic from 'next/dynamic'
import { stateData, svgIdToStateCode, stateToRegion, regionColors, stateMapLabel } from '../../data/statesData'

// Dynamically import IndiaMap to avoid SSR issues
const IndiaMap = dynamic(() => import('@aryanjsx/indiamap'), { ssr: false })

export default function IndiaMapSVG({ onStateHover, hoveredStateId }) {
  const containerRef = useRef(null)

  const handleMouseOver = useCallback((e) => {
    const target = e.target
    if (target.tagName === 'path') {
      const id = target.id
      const code = svgIdToStateCode[id] || id
      if (stateData[code]) {
        onStateHover(code)
      }
    }
  }, [onStateHover])

  const handleMouseOut = useCallback((e) => {
    const target = e.target
    if (target.tagName === 'path') {
      onStateHover(null)
    }
  }, [onStateHover])

  // Add labels + apply region colors
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const timer = setTimeout(() => {
      const svg = container.querySelector('svg')
      if (!svg) return

      // Remove previously added labels
      svg.querySelectorAll('.state-label').forEach((el) => el.remove())

      const paths = svg.querySelectorAll('path')
      paths.forEach((path) => {
        const pathId = path.id
        const code = svgIdToStateCode[pathId] || pathId
        const info = stateData[code]
        if (!info) return

        // Colors are handled by the <style> block below
        const cx = bbox.x + bbox.width / 2
        const cy = bbox.y + bbox.height / 2

        // Dynamic font size based on state area
          const area = bbox.width * bbox.height
          const labelText = stateMapLabel[code] || code
          const labelLen = labelText.length
          // Scale font to fit: larger states get bigger text, clamp between 1.8 and 4.5
          let fontSize = Math.min(4.5, Math.max(1.8, Math.sqrt(area) / (labelLen * 0.6)))
          let countSize = Math.min(3, Math.max(1.4, fontSize * 0.7))

          // State name label
          const text = document.createElementNS('http://www.w3.org/2000/svg', 'text')
          text.setAttribute('x', String(cx))
          text.setAttribute('y', String(cy - countSize * 0.6))
          text.setAttribute('text-anchor', 'middle')
          text.setAttribute('dominant-baseline', 'central')
          text.setAttribute('class', 'state-label')
          text.setAttribute('fill', '#faf5eb')
          text.setAttribute('font-size', String(fontSize))
          text.setAttribute('font-weight', '700')
          text.setAttribute('pointer-events', 'none')
          text.setAttribute('letter-spacing', '0.15')
          text.setAttribute('font-family', 'sans-serif')
          text.textContent = labelText
          svg.appendChild(text)

          // Sanctuary count
          const countText = document.createElementNS('http://www.w3.org/2000/svg', 'text')
          countText.setAttribute('x', String(cx))
          countText.setAttribute('y', String(cy + fontSize * 0.7))
          countText.setAttribute('text-anchor', 'middle')
          countText.setAttribute('dominant-baseline', 'central')
          countText.setAttribute('class', 'state-label')
          countText.setAttribute('fill', '#faf5eb')
          countText.setAttribute('font-size', String(countSize))
          countText.setAttribute('font-weight', '500')
          countText.setAttribute('pointer-events', 'none')
          countText.setAttribute('opacity', '0.75')
          countText.textContent = String(info.sanctuaries)
          svg.appendChild(countText)
      })
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const customCss = Object.keys(stateData).map(code => {
    const region = stateToRegion[code];
    const color = (region && regionColors[region]) ? regionColors[region] : 'hsl(200, 55%, 35%)';
    return `path#${code} { fill: ${color} !important; }`;
  }).join(' ') + ' ' + Object.keys(svgIdToStateCode).map(id => {
    const code = svgIdToStateCode[id];
    const region = stateToRegion[code];
    const color = (region && regionColors[region]) ? regionColors[region] : 'hsl(200, 55%, 35%)';
    return `path#${id} { fill: ${color} !important; }`;
  }).join(' ');

  return (
    <div
      ref={containerRef}
      className='w-full h-full india-map-container'
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <style dangerouslySetInnerHTML={{ __html: customCss }} />
      <IndiaMap
        size="100%"
        mapColor="hsl(200, 55%, 35%)"
        hoverColor="transparent"
        strokeColor="hsl(36, 30%, 98%)"
        strokeWidth="0.5"
        onClick={() => {}}
      />
    </div>
  )
}
