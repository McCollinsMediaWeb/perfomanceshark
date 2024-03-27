
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import BestBrands from "@/components/BestBrands";
import CaseStudies from "@/components/CaseStudies";
import WhatWeDo from "@/components/WhatWedo";
import VideoBox from "@/components/videobox";
import OurPartners from "@/components/OurPartners";
export default function Home() {
  return (
    <>
      <HeroBanner/>
      <BestBrands/>
      <CaseStudies/>
      <WhatWeDo/>
      <VideoBox/>
      <OurPartners/>
    </>
  );
}
