import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import React, { useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function OurPackeges() {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="OurServicesWrap pd-common bg4 m-pt-0">
        <div className="container">
          <div className="CaseStudiesHeader">
            <div className="row">
              <div className="col-md-8">
                <div
                  className="CsT1"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  Our Packages
                </div>
                <div
                  className="CsT2"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  High-Impact Marketing
                  <br />
                  Services Grow Your Startup
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="CsT3"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  Choose from our high-impact marketing services designed to
                  fuel startup growth and amplify your brand&#x27;s visibility
                  in the digital realm.
                </div>
              </div>
            </div>
          </div>
          <div
            className="ServicesBoxWrp slider1 BrndBoxes "
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <Slider {...settings}>
              <div>
                <div className="ServiceItem">
                  <div className="StIcons">
                    <div className="StIcon kk">&nbsp;</div>
                  </div>
                  <div className="StName">Baby Shark </div>
                  <div className="StDesc">
                    Level-up with more power and enhanced features
                  </div>
                  <div className="PriceBox">680 USD</div>
                  <a target="_blank" href="https://calendar.app.google/jb64JdxiycDnPAZE6" className="StLink12">
Book a meeting
                  </a>
                  <div className="FtDescBox">
                    <div className="FtDescBoxItem">Google or Meta Ads</div>
                    <div className="FtDescBoxItem">Campaign Strategy</div>
                    <div className="FtDescBoxItem">Ad Creation & Set Up</div>
                    <div className="FtDescBoxItem">4 creatives/month</div>
                    <div className="FtDescBoxItem">Platform Management</div>
                    <div className="FtDescBoxItem">Keyword Research</div>
                    <div className="FtDescBoxItem">Conversion Tracking</div>
                    <div className="FtDescBoxItem">Reporting</div>
                    <div className="FtDescBoxItem">Meeting & Review</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="ServiceItem">
                  <div className="StIcons">
                    <div className="StIcon kk">&nbsp;</div>
                  </div>
                  <div className="StName">Dynamic Dolphin </div>
                  <div className="StDesc">
                    Level-up with more power and enhanced features
                  </div>
                  <div className="PriceBox">1370 USD</div>
                  <a target="_blank" href="https://calendar.app.google/jb64JdxiycDnPAZE6" className="StLink12">
Book a meeting
                  </a>
                  <div className="FtDescBox">
                    {/* <div className="FtDescBoxItem">Search Engine Marketing</div> */}
                    <div className="FtDescBoxItem">
                      Google & Meta Ads Marketing
                    </div>
                    <div className="FtDescBoxItem">Campaign Strategy</div>
                    <div className="FtDescBoxItem">Ad Creation & Set Up</div>
                    <div className="FtDescBoxItem">8 creatives/month</div>
                    <div className="FtDescBoxItem">Platform Management</div>
                    <div className="FtDescBoxItem">Keyword Research</div>
                    <div className="FtDescBoxItem">Conversion Tracking</div>
                    <div className="FtDescBoxItem">Reporting</div>
                    <div className="FtDescBoxItem">Meeting & Review</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="ServiceItem">
                  <div className="StIcons">
                    <div className="StIcon kk">&nbsp;</div>
                  </div>
                  <div className="StName">Power Penguin</div>
                  <div className="StDesc">
                    Level-up with more power and enhanced features
                  </div>
                  <div className="PriceBox">2040 USD</div>
                  <a target="_blank" href="https://calendar.app.google/jb64JdxiycDnPAZE6" className="StLink12">
Book a meeting
                  </a>
                  <div className="FtDescBox">
                    {/* <div className="FtDescBoxItem">Search Engine Marketing</div> */}
                    <div className="FtDescBoxItem">
                      Google & Meta Ads Marketing
                    </div>
                    <div className="FtDescBoxItem">
                    SEO (Search engine optimization)
                    </div>
                    <div className="FtDescBoxItem">Campaign Strategy</div>
                    <div className="FtDescBoxItem">Ad Creation & Set Up</div>
                    <div className="FtDescBoxItem">8 creatives/month</div>
                    <div className="FtDescBoxItem">Platform Management</div>
                    <div className="FtDescBoxItem">Keyword Research</div>
                    <div className="FtDescBoxItem">Conversion Tracking</div>
                    <div className="FtDescBoxItem">Reporting</div>
                    <div className="FtDescBoxItem">Meeting & Review</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="ServiceItem">
                  <div className="StIcons">
                    <div className="StIcon kk">&nbsp;</div>
                  </div>
                  <div className="StName">Big Blue Whale</div>
                  <div className="StDesc">
                    Full-Scale Performance Marketing Dominance
                  </div>
                  <div className="PriceBox">2750 USD</div>
                  <a target="_blank" href="https://calendar.app.google/jb64JdxiycDnPAZE6" className="StLink12">
Book a meeting
                  </a>
                  <div className="FtDescBox">
                    <div className="FtDescBoxItem">
                    SEO (Search engine optimization)
                    </div>
                    <div className="FtDescBoxItem">
                      Google & Meta Ads Marketing
                    </div>
                    <div className="FtDescBoxItem"> Email Marketing</div>
                    <div className="FtDescBoxItem">Campaign Strategy</div>
                    <div className="FtDescBoxItem">Ad Creation & Set Up</div>
                    <div className="FtDescBoxItem">12 creatives/month</div>
                    <div className="FtDescBoxItem">Platform Management</div>
                    <div className="FtDescBoxItem">Keyword Research</div>
                    <div className="FtDescBoxItem">Conversion Tracking</div>
                    <div className="FtDescBoxItem">Reporting</div>
                    <div className="FtDescBoxItem">Meeting & Review</div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
