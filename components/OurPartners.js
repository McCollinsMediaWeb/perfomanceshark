import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";

export default function OurPartners() {
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
              infinite: true,
              dots: false,
              centerMode: true,
            },
          },
        ],
      };
  return (
    <>
      <div className="WhatWedo pd-common bg4">
        <div className="container">
          <div className="WhatWedoHeader">
            <div className="row">
              <div className="col-md-12">
                <div className="T1">OUR PARTNERAS</div>
                <div className="T2">We Have Global Premium Partners</div>
              </div>
            </div>
          </div>
          <div className="PartnerSliderWrap">
            <div className="BrndBoxes slider1">
              <Slider {...settings}>
                <div>
                  <div className="partnerItem1">
                    <Image
                      src="/facebook.jpg"
                      layout="responsive"
                      width={"528"}
                      height={"209"}
                      priority={true}
                      className="MainBanner"
                    />
                  </div>
                </div>
                <div>
                  <div className="partnerItem1">
                    <Image
                      src="/ticktock.jpg"
                      layout="responsive"
                      width={"528"}
                      height={"209"}
                      priority={true}
                      className="MainBanner"
                    />
                  </div>
                </div>
                <div>
                  <div className="partnerItem1">
                    <Image
                      src="/google.jpg"
                      layout="responsive"
                      width={"528"}
                      height={"209"}
                      priority={true}
                      className="MainBanner"
                    />
                  </div>
                </div>
                <div>
                  <div className="partnerItem1">
                    <Image
                      src="/googlecloud.jpg"
                      layout="responsive"
                      width={"528"}
                      height={"209"}
                      priority={true}
                      className="MainBanner"
                    />
                  </div>
                </div>
                <div>
                  <div className="partnerItem1">
                    <Image
                      src="/facebook.jpg"
                      layout="responsive"
                      width={"528"}
                      height={"209"}
                      priority={true}
                      className="MainBanner"
                    />
                  </div>
                </div>
                <div>
                  <div className="partnerItem1">
                    <Image
                      src="/ticktock.jpg"
                      layout="responsive"
                      width={"528"}
                      height={"209"}
                      priority={true}
                      className="MainBanner"
                    />
                  </div>
                </div>
                <div>
                  <div className="partnerItem1">
                    <Image
                      src="/google.jpg"
                      layout="responsive"
                      width={"528"}
                      height={"209"}
                      priority={true}
                      className="MainBanner"
                    />
                  </div>
                </div>
                <div>
                  <div className="partnerItem1">
                    <Image
                      src="/googlecloud.jpg"
                      layout="responsive"
                      width={"528"}
                      height={"209"}
                      priority={true}
                      className="MainBanner"
                    />
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
