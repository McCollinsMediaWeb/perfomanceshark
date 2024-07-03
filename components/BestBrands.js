import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

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
          <div
            className="Bt4 text-center"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            Our Valued Partners in Success
          </div>
          {/* <div
            className="BrndBoxes slider1"
            data-aos="fade-up"
            data-aos-duration="700"
          >
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
          </div> */}
          <div
            className="PortFolioWrp BrndBoxes slider1"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <div className="Portfolios">
              <div className="PortfolioItem">
                <div className="BoxStA1">
                  <div className="imgWrap">
                    <Image
                      alt="McCollins Media"
                      src="/clients/1.png"
                      width={"168"}
                      height={"94"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="PortfolioItem">
                <div className="BoxStA1">
                  <div className="imgWrap">
                    <Image
                      alt="McCollins Media"
                      src="/clients/2.png"
                      width={"118"}
                      height={"118"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="PortfolioItem">
                <div className="BoxStA1">
                  <div className="imgWrap">
                    <Image
                      alt="McCollins Media"
                      src="/clients/3.png"
                      width={"185"}
                      height={"31"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="PortfolioItem">
                <div className="BoxStA1">
                  <div className="imgWrap">
                    <Image
                      alt="McCollins Media"
                      src="/clients/4.png"
                      width={"199"}
                      height={"31"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="PortfolioItem">
                <div className="BoxStA1">
                  <div className="imgWrap">
                    <Image
                      alt="McCollins Media"
                      src="/clients/5.png"
                      width={"199"}
                      height={"31"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="PortfolioItem">
                <div className="BoxStA1">
                  <div className="imgWrap">
                    <Image
                      alt="McCollins Media"
                      src="/clients/6.png"
                      width={"198"}
                      height={"30"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="PortfolioItem">
                <div className="BoxStA1">
                  <div className="imgWrap">
                    <Image
                      alt="McCollins Media"
                      src="/clients/7.png"
                      width={"148"}
                      height={"110"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="PortfolioItem">
                <div className="BoxStA1">
                  <div className="imgWrap">
                    <Image
                      alt="McCollins Media"
                      src="/clients/8.png"
                      width={"141"}
                      height={"66"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="PortfolioItem">
                <div className="BoxStA1">
                  <div className="imgWrap">
                    <Image
                      alt="McCollins Media"
                      src="/clients/9.png"
                      width={"231"}
                      height={"62"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="PortfolioItem">
                <div className="BoxStA1">
                  <div className="imgWrap">
                    <Image
                      alt="McCollins Media"
                      src="/clients/10.png"
                      width={"140"}
                      height={"206"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="PortfolioItem">
                <div className="BoxStA1">
                  <div className="imgWrap">
                    <Image
                      alt="McCollins Media"
                      src="/clients/11.png"
                      width={"131"}
                      height={"102"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
              <div className="PortfolioItem">
                <div className="BoxStA1">
                  <div className="imgWrap">
                    <Image
                      alt="McCollins Media"
                      src="/clients/12.png"
                      width={"204"}
                      height={"25"}
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
