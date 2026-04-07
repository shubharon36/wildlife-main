"use client";
import { useEffect, useState } from "react";
import { playBirdsSound } from "./components/BirdsSound";
import HeroSequence from "./components/HeroSequence";
import Loader from "./components/Loader";
import { useViewportScrollAndReload } from "./lib/viewportScroll";
import { useLenis } from "lenis/react";
import WildLifeSantuaries from "./components/WildLifeSantuaries";
import ExploreByRegions from "./components/ExploreByRegions";
import DiscoverWildlife from "./components/DiscoverWildlife";
import Footer from "./components/footer/Footer";
import DistributionAnalysis from "./components/DistributionAnalysis";
import HabitatSpeciesDistribition from "./components/HabitatSpeciesDistribition";
import Timeline from "./components/Timeline";
import ProtectWhatProtectU from "./components/ProtectWhatProtectU";

export default function Page() {
  const [ispressed, setIspressed] = useState(false);
  const lenis = useLenis();
  useViewportScrollAndReload();

  useEffect(() => {
    if (!lenis) return;
    if (ispressed) lenis.start();
    else lenis.stop();
  }, [lenis, ispressed]);

  return (
    <>
      <Loader
        onEnterClick={playBirdsSound}
        onEntered={() => setIspressed(true)}
      />
      <HeroSequence lenis={lenis} ispressed={ispressed} />
      <div className="relative  mt-[-150vh] z-700 h-fit w-full">
        <WildLifeSantuaries />
      </div>
      <Timeline />
      <ExploreByRegions />
      <DistributionAnalysis />
      <DiscoverWildlife />

      {/* <Insights /> */}
      <HabitatSpeciesDistribition />
      <ProtectWhatProtectU />
      <Footer />
    </>
  );
}
