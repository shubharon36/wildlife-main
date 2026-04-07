'use client'

export default function RegionDrawerContent({ region, onSelectHabitat }) {
  if (!region) return null

  return (
    <div className="px-[2vw] w-[80%] space-y-[1.5vw] py-[2vw]">
      <p
        className="px-[1vw] py-[.5vw] text-white  text-[1vw] w-fit rounded-full"
        style={{ backgroundColor: region.color }}
      >
        {region.subtitle}
      </p>
      <div className="space-y-[1vw]">
        <p className="text-[2vw] font-sansumi font-medium">{region.name}</p>
        <p className="text-[1vw]">{region.description}</p>
      </div>

      <div className="flex items-center justify-between pr-[5vw]">
        <div>
          <p className="text-[2vw] font-sansumi font-medium">{region.count}</p>
          <p className="text-[1vw] uppercase">Sanctuaries</p>
        </div>
        <div>
          <p className="text-[2vw] font-sansumi font-medium">{region.speciesCount}</p>
          <p className="text-[1vw] uppercase">Species Protected</p>
        </div>
      </div>

      <div>
        <p className="uppercase text-[1vw] my-[2vw]">Notable Sanctuaries</p>
        {region.sanctuaries?.map((sanctuary) => (
          <div key={sanctuary.name} className="flex mb-[.5vw] items-center justify-between">
            <p>{sanctuary.name}</p>
            <p className="opacity-60">{sanctuary.area}</p>
          </div>
        ))}
      </div>

      <div>
        <p className="uppercase text-[1vw] my-[2vw]">Key Species</p>
        <div className="flex flex-wrap gap-[0.5vw]">
          {region.species?.map((species) => (
            <span
              key={species}
              className="px-[1vw] py-[0.4vw] bg-[#e1f0f8] rounded-full text-[0.9vw]"
          
            >
              {species}
            </span>
          ))}
        </div>
      </div>

      <div>
        <p className="uppercase text-[1vw] my-[2vw]">Habitat Type Classification</p>
        <div className="flex flex-wrap gap-[0.5vw]">
          {region.habitats?.map((habitat) => (
            <button
              type="button"
              key={habitat.name}
              onClick={(e) => {
                e.stopPropagation()
                onSelectHabitat(habitat)
              }}
              className="px-[1vw] py-[0.4vw] text-white rounded-full text-[0.9vw] cursor-pointer transition-opacity hover:opacity-90"
              style={{ backgroundColor: habitat.color }}
            >
              {habitat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
