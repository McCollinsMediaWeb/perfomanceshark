import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WhatWeDo() {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <div className="WhatWedo pd-common bg4">
        <div className="container">
          <div className="WhatWedoHeader">
            <div className="row">
              <div className="col-md-9">
                <div className="T1"  data-aos="fade-up" data-aos-duration="700">WHAT WE DO</div>
                <div className="T2"  data-aos="fade-up" data-aos-duration="700">
                  Latest Way To Get Web Solutions & Business Growth
                </div>
                <div className="T3"  data-aos="fade-up" data-aos-duration="700">
                  Together, we help our clients achieve tangible, measurable
                  results. Focused on business outcomes we bring a unique set of
                  expertise and skills to the party.
                </div>
              </div>
              <div className="col-md-3">
                <div className="RLogoBox"  data-aos="fade-up" data-aos-duration="700">
                <Image
                    src="/p2.png"
                    layout="responsive"
                    width={"279"}
                    height={"284"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="WhatWeDoContent">
            <div className="row">
                <div className="col-md-7">
                        <div className="ServiceBoxes">
                            <div className="Service"  data-aos="fade-up" data-aos-duration="700">
                                <div className="ServiceFlex">
                                    <div className="ServiceLeft">
                                        <div className="ServiceIconBox">
                                            <div className="serviceleftIcon gtag">&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="ServiceRight">
                                        <div>
                                            <div className="serviceName">Google Ads</div>
                                            <div className="servicedesc">Benefit from our team of certified Google AdWords/SEM specialists with over 10 years of experience managing various SEM campaigns locally. We tailor strategies and execution to meet your objectives effectively.
</div>
                                            <div className="serviceLinkIcon">&nbsp;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Service"  data-aos="fade-up" data-aos-duration="700">
                                <div className="ServiceFlex">
                                    <div className="ServiceLeft">
                                        <div className="ServiceIconBox">
                                            <div className="serviceleftIcon two">&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="ServiceRight">
                                        <div>
                                            <div className="serviceName">Search Engine Optimization</div>
                                            <div className="servicedesc">Struggling to find PPC experts who truly grasp your business and can deliver sustainable results? Our top-tier marketers are here to propel your business forward!
</div>
                                            <div className="serviceLinkIcon">&nbsp;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Service"  data-aos="fade-up" data-aos-duration="700">
                                <div className="ServiceFlex">
                                    <div className="ServiceLeft">
                                        <div className="ServiceIconBox">
                                            <div className="serviceleftIcon three">&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="ServiceRight">
                                        <div>
                                            <div className="serviceName">Website Development</div>
                                            <div className="servicedesc">Experience seamless website development services tailored to your needs, ensuring a user-friendly interface and optimized performance for your online presence.
</div>
                                            <div className="serviceLinkIcon">&nbsp;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Service"  data-aos="fade-up" data-aos-duration="700">
                                <div className="ServiceFlex">
                                    <div className="ServiceLeft">
                                        <div className="ServiceIconBox">
                                            <div className="serviceleftIcon three">&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="ServiceRight">
                                        <div>
                                            <div className="serviceName">Email Marketing 
</div>
                                            <div className="servicedesc">Leverage our expertise in targeted email marketing campaigns for e-commerce businesses, honed over more than a decade, to maximize your online sales potential.</div>
                                            <div className="serviceLinkIcon">&nbsp;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-md-5">
                  <div   data-aos="fade-up" data-aos-duration="700">
                  <Image
                    src="/web.jpg"
                    layout="responsive"
                    width={"635"}
                    height={"1049"}
                    priority={true}
                    className="MainBanner"
                  />
                  </div>
                
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
