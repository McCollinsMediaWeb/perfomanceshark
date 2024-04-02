import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function BestBrands() {
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
          
        },
      },
    ],
  };
  return (
    <>
      <div className="BestBrandsWrap pd-common bg2">
        <div className="container">
          <div className="Bt4 text-center"   data-aos="fade-up" data-aos-duration="700">
          Our Valued Partners in Success
          </div>
          <div className="BrndBoxes slider1"   data-aos="fade-up" data-aos-duration="700">
            <Slider {...settings}>
            <div>
                <div className="BrandBoxItem">
                  <Image
                    src="/b1.png"
                    layout="responsive"
                    width={"172"}
                    height={"37"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
              <div>
                <div className="BrandBoxItem">
                  <Image
                    src="/b2.png"
                    layout="responsive"
                    width={"183"}
                    height={"37"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
              <div>
                <div className="BrandBoxItem">
                  <Image
                    src="/b3.png"
                    layout="responsive"
                    width={"135"}
                    height={"37"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
              <div>
                <div className="BrandBoxItem">
                  <Image
                    src="/b4.png"
                    layout="responsive"
                    width={"157"}
                    height={"38"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
              <div>
                <div className="BrandBoxItem">
                  <Image
                    src="/b1.png"
                    layout="responsive"
                    width={"172"}
                    height={"37"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
              <div>
                <div className="BrandBoxItem">
                  <Image
                    src="/b2.png"
                    layout="responsive"
                    width={"183"}
                    height={"37"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
              <div>
                <div className="BrandBoxItem">
                  <Image
                    src="/b3.png"
                    layout="responsive"
                    width={"135"}
                    height={"37"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
              <div>
                <div className="BrandBoxItem">
                  <Image
                    src="/b4.png"
                    layout="responsive"
                    width={"157"}
                    height={"38"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
