'use client'
import React, { useRef, useState } from 'react'
import { regions as defaultRegions } from '../data/regions'
import RegionSideDrawer from './RegionSideDrawer'
import RegionBubble from './explore/RegionBubble'
import RegionDrawerContent from './explore/RegionDrawerContent'
import HabitatDrawerContent from './explore/HabitatDrawerContent'
import Image from 'next/image'
import Copy from './Copy'

export default function ExploreByRegions({ regions: regionsProp } = {}) {
  const regions = regionsProp ?? defaultRegions
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [selectedRegion, setSelectedRegion] = useState(null)
  const [habitatDrawerOpen, setHabitatDrawerOpen] = useState(false)
  const [habitatDetail, setHabitatDetail] = useState(null)
  const pendingHabitatRef = useRef(null)
  /** Region to reopen after the habitat drawer finishes closing */
  const restoreRegionAfterHabitatRef = useRef(null)

  const openDrawer = (region) => {
    setHabitatDrawerOpen(false)
    setHabitatDetail(null)
    pendingHabitatRef.current = null
    restoreRegionAfterHabitatRef.current = null
    setSelectedRegion(region)
    setDrawerOpen(true)
  }

  const openHabitatDrawer = (habitat) => {
    if (!selectedRegion) return
    pendingHabitatRef.current = { region: selectedRegion, habitat }
    setDrawerOpen(false)
  }

  const onRegionDrawerExitComplete = () => {
    const pending = pendingHabitatRef.current
    pendingHabitatRef.current = null
    setSelectedRegion(null)
    if (pending) {
      restoreRegionAfterHabitatRef.current = pending.region
      setHabitatDetail(pending)
      setHabitatDrawerOpen(true)
    } else {
      restoreRegionAfterHabitatRef.current = null
    }
  }

  const onHabitatDrawerExitComplete = () => {
    const region = restoreRegionAfterHabitatRef.current
    restoreRegionAfterHabitatRef.current = null
    setHabitatDetail(null)
    if (region) {
      setSelectedRegion(region)
      setDrawerOpen(true)
    }
  }

  return (
    <div className="min-h-[120vh] bg-[#fff4e5] w-full text-black! relative padd pb-[8vw]! mt-[-15vw]">
      <div className="flex flex-col items-start w-full space-y-[2vw]">
        <Copy>
          <h2 className="text-[6vw] font-sansumi leading-[1.2]">Explore by <span className='text-transparent font-normal!' style={{ WebkitTextStroke: '2px var(--foreground)' }}>Regions.</span></h2>
        </Copy>
        <Copy>
          <p className="w-[30%] text-[1vw] ml-[0.5vw]">
            India&apos;s wildlife sanctuaries span seven distinct geographical regions, each with unique ecosystems and
            species.
          </p>
        </Copy>
      </div>

      {regions.map((region) => (
        <RegionBubble key={region.name} region={region} onOpen={openDrawer} />
      ))}

      <RegionSideDrawer
        open={drawerOpen}
        selection={selectedRegion}
        onRequestClose={() => setDrawerOpen(false)}
        onExitComplete={onRegionDrawerExitComplete}
      >
        <RegionDrawerContent region={selectedRegion} onSelectHabitat={openHabitatDrawer} />
      </RegionSideDrawer>

      <RegionSideDrawer
        closeUI={false}
        open={habitatDrawerOpen}
        zOverlay={210}
        zPanel={211}
        selection={habitatDetail?.habitat}
        onRequestClose={() => setHabitatDrawerOpen(false)}
        onExitComplete={onHabitatDrawerExitComplete}
      >
        <HabitatDrawerContent region={habitatDetail?.region} habitat={habitatDetail?.habitat} />
      </RegionSideDrawer>

      <div className='h-auto w-[40vw] overflow-hidden absolute bottom-0 left-0 rounded-[1vw]'>
        <Image src='/img/panther.png' alt='leopard' width={1000} height={1000} className='w-full h-full object-contain' />
      </div>
    </div>
  )
}
