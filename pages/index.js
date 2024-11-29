
import Image from "next/image";
import HeroBanner from "@/components/HeroBanner";
import BestBrands from "@/components/BestBrands";
import CaseStudies from "@/components/CaseStudies";
import WhatWeDo from "@/components/WhatWedo";
import VideoBox from "@/components/videobox";
import OurPartners from "@/components/OurPartners";
import OurServices from "@/components/OurServices";
import WhyPErfomanceShark from "@/components/WhyPerfomanceShark";
import ProofInNumber from "@/components/ProofInNumbers";
import Testimonials from "@/components/Testimonials";
import Announcement from "@/components/Announcement";
import OurPackeges from "@/components/OurPackages";
export default function Home() {
  return (
    <>
    <div id="zero">
      <HeroBanner/>
      </div>
      
      <div id="one">
      <BestBrands/>
      </div>
      <div id="six">
        <OurPackeges/>
      </div>
      <div id="two">
      <CaseStudies/>
      </div>
      <div id="three">
      <WhatWeDo/>
      </div>
      <div id="four">
      <VideoBox/>
      </div>
      <div id="five">
      <OurPartners/>
      </div>
     
      
      {/* <ProofInNumber/> */}
      <Testimonials/>
      <Announcement/>

   
    </>
  );
}
