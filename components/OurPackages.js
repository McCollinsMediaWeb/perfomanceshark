import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import React, { useEffect } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

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
                  <div className="PriceBox">2500 AED</div>
                  <a className="StLink12" href="#zero">
                    Contact Us
                  </a>
                  <div className="FtDescBox">
                    <div className="FtDescBoxItem">Google or Meta Ads</div>
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
                  <div className="PriceBox">5000 AED</div>
                  <a className="StLink12" href="#zero">
                    Contact Us
                  </a>
                  <div className="FtDescBox">
                    <div className="FtDescBoxItem">Search Engine Marketing</div>
                    <div className="FtDescBoxItem">
                      Google & Meta Ads Marketing
                    </div>
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
                  <div className="PriceBox">7500 AED</div>
                  <a className="StLink12" href="#zero">
                    Contact Us
                  </a>
                  <div className="FtDescBox">
                    <div className="FtDescBoxItem">Search Engine Marketing</div>
                    <div className="FtDescBoxItem">
                      Google & Meta Ads Marketing
                    </div>
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
                  <div className="PriceBox">10000 AED</div>
                  <a className="StLink12" href="#zero">
                    Contact Us
                  </a>
                  <div className="FtDescBox">
                    <div className="FtDescBoxItem">
                      Search Engine Marketing,
                    </div>
                    <div className="FtDescBoxItem">
                      Google & Meta Ads Marketing
                    </div>
                    <div className="FtDescBoxItem"> Email Marketing</div>
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
