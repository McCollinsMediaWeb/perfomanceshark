import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";

export default function BestBrands() {
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
          <div className="Bt4 text-center">
            The Best Brands Choose Performance Shark
          </div>
          <div className="BrndBoxes slider1">
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
