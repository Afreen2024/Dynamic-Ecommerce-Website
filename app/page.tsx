

import DontMiss from "@/components/DONTMISS";
import Essential from "@/components/ESSENTIAL";
import Featured from "@/components/FEATURED";
import Footer from "@/components/FOOTER";
import GearUp from "@/components/GEARUP";
import Nav from "@/components/HEADER";
import Hero from "@/components/HERO";
import Navigation from "@/components/Navigation";
import { CarouselSize } from "@/components/BEST"
import Image from "next/image";

export default function Home() {
  return (
  <main>
    <Nav/>
    <Hero/>
    <CarouselSize/>
    <Featured/>
    <GearUp/>
    <DontMiss/>
    <Essential/>
    <Navigation/>
    <Footer/>
  </main>
  )
}
