import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";

export default function OurServices() {
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
      <div className="OurServicesWrap pd-common bg4 ">
        <div className="container">
          <div className="CaseStudiesHeader">
            <div className="row">
              <div className="col-md-8">
                <div className="CsT1">Our Services</div>
                <div className="CsT2">
                  High-Impact Marketing
                  <br />
                  Services Grow Your Startup
                </div>
              </div>
              <div className="col-md-4">
                <div className="CsT3">
                  We makes it easy to create content that engages your audience
                  by taking the guesswork out of research, strategy, and
                  writing.
                </div>
              </div>
            </div>
          </div>
          <div className="ServicesBoxWrp slider1 BrndBoxes ">
            <Slider {...settings}>
              <div>
                <div className="ServiceItem">
                  <div className="StIcons">
                    <div className="StIcon k1">&nbsp;</div>
                  </div>
                  <div className="StName">Search Engine Optimization</div>
                  <div className="StDesc">
                    Maintain your best spot on the search results page, so you
                    can find new customers and re-engage loyal ones.
                  </div>
                  <div className="StLink">Learn More</div>
                </div>
              </div>
              <div>
                <div className="ServiceItem">
                  <div className="StIcons">
                    <div className="StIcon k2">&nbsp;</div>
                  </div>
                  <div className="StName">Search Engine 
Marketing</div>
                  <div className="StDesc">
                    Maintain your best spot on the search results page, so you
                    can find new customers and re-engage loyal ones.
                  </div>
                  <div className="StLink">Learn More</div>
                </div>
              </div>
              <div>
                <div className="ServiceItem">
                  <div className="StIcons">
                    <div className="StIcon k3">&nbsp;</div>
                  </div>
                  <div className="StName">Meta Performance
Marketing</div>
                  <div className="StDesc">
                    Maintain your best spot on the search results page, so you
                    can find new customers and re-engage loyal ones.
                  </div>
                  <div className="StLink">Learn More</div>
                </div>
              </div>
              <div>
                <div className="ServiceItem">
                  <div className="StIcons">
                    <div className="StIcon k4">&nbsp;</div>
                  </div>
                  <div className="StName">Google <br/>Ads</div>
                  <div className="StDesc">
                    Maintain your best spot on the search results page, so you
                    can find new customers and re-engage loyal ones.
                  </div>
                  <div className="StLink">Learn More</div>
                </div>
              </div>
              <div>
                <div className="ServiceItem">
                  <div className="StIcons">
                    <div className="StIcon k1">&nbsp;</div>
                  </div>
                  <div className="StName">Search Engine Optimization</div>
                  <div className="StDesc">
                    Maintain your best spot on the search results page, so you
                    can find new customers and re-engage loyal ones.
                  </div>
                  <div className="StLink">Learn More</div>
                </div>
              </div>
              <div>
                <div className="ServiceItem">
                  <div className="StIcons">
                    <div className="StIcon k2">&nbsp;</div>
                  </div>
                  <div className="StName">Search Engine 
Marketing</div>
                  <div className="StDesc">
                    Maintain your best spot on the search results page, so you
                    can find new customers and re-engage loyal ones.
                  </div>
                  <div className="StLink">Learn More</div>
                </div>
              </div>
              <div>
                <div className="ServiceItem">
                  <div className="StIcons">
                    <div className="StIcon k3">&nbsp;</div>
                  </div>
                  <div className="StName">Meta Performance
Marketing</div>
                  <div className="StDesc">
                    Maintain your best spot on the search results page, so you
                    can find new customers and re-engage loyal ones.
                  </div>
                  <div className="StLink">Learn More</div>
                </div>
              </div>
              <div>
                <div className="ServiceItem">
                  <div className="StIcons">
                    <div className="StIcon k4">&nbsp;</div>
                  </div>
                  <div className="StName">Google <br/>Ads</div>
                  <div className="StDesc">
                    Maintain your best spot on the search results page, so you
                    can find new customers and re-engage loyal ones.
                  </div>
                  <div className="StLink">Learn More</div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}
