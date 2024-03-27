import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";

export default function CaseStudies() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
      <div className="CaseStudiesWrap pd-common bg3">
        <div className="container">
          <div className="CaseStudiesHeader">
            <div className="row">
              <div className="col-md-7">
                <div className="CsT1">Case Studies</div>
                <div className="CsT2">Our Work Drives Businesses Forward</div>
              </div>
              <div className="col-md-5">
                <div className="CsT3">
                  Together, we help our clients achieve tangible, measurable
                  results. Focused on business outcomes — we bring a unique set
                  of expertise and skills to the party.
                </div>
              </div>
            </div>
          </div>
          <div className="BrndBoxes slider1">
            <Slider {...settings}>
              <div>
                <div className="CaseStudyItem">
                    <div className="CaseStudyItemImage">
                    <Image
                    src="/c1.jpg"
                    layout="responsive"
                    width={"394"}
                    height={"446"}
                    priority={true}
                    className="MainBanner"
                  />
                    </div>
                    <div className="CaseStudyItemHeader">HOMME</div>
                    <div className="CaseStudyItemFooter">
                        <div className="CsTt1">+35%</div>
                        <div className="CsTt2">Engagement Rate</div>
                        <div className="TagBox">
                            <div className="TagBoxItem">Organic Social Media</div>
                            <div className="TagBoxItem">Paid Social</div>
                        </div>
                    </div>
                </div>
              </div>
              <div>
                <div className="CaseStudyItem">
                    <div className="CaseStudyItemImage">
                    <Image
                    src="/c2.jpg"
                    layout="responsive"
                    width={"394"}
                    height={"446"}
                    priority={true}
                    className="MainBanner"
                  />
                    </div>
                    <div className="CaseStudyItemHeader">HOMME</div>
                    <div className="CaseStudyItemFooter">
                        <div className="CsTt1">+35%</div>
                        <div className="CsTt2">Engagement Rate</div>
                        <div className="TagBox">
                            <div className="TagBoxItem">Paid SEO</div>
                            <div className="TagBoxItem">Paid Social</div>
                            <div className="TagBoxItem">  Paid Search</div>
                          
                        </div>
                    </div>
                </div>
              </div>
              <div>
                <div className="CaseStudyItem">
                    <div className="CaseStudyItemImage">
                    <Image
                    src="/c3.jpg"
                    layout="responsive"
                    width={"394"}
                    height={"446"}
                    priority={true}
                    className="MainBanner"
                  />
                    </div>
                    <div className="CaseStudyItemHeader">HOMME</div>
                    <div className="CaseStudyItemFooter">
                        <div className="CsTt1">+35%</div>
                        <div className="CsTt2">Engagement Rate</div>
                        <div className="TagBox">
                            <div className="TagBoxItem">Organic Social Media</div>
                            <div className="TagBoxItem">Paid Social</div>
                        </div>
                    </div>
                </div>
              </div>
              <div>
                <div className="CaseStudyItem">
                    <div className="CaseStudyItemImage">
                    <Image
                    src="/c1.jpg"
                    layout="responsive"
                    width={"394"}
                    height={"446"}
                    priority={true}
                    className="MainBanner"
                  />
                    </div>
                    <div className="CaseStudyItemHeader">HOMME</div>
                    <div className="CaseStudyItemFooter">
                        <div className="CsTt1">+35%</div>
                        <div className="CsTt2">Engagement Rate</div>
                        <div className="TagBox">
                            <div className="TagBoxItem">Organic Social Media</div>
                            <div className="TagBoxItem">Paid Social</div>
                        </div>
                    </div>
                </div>
              </div>
              <div>
                <div className="CaseStudyItem">
                    <div className="CaseStudyItemImage">
                    <Image
                    src="/c2.jpg"
                    layout="responsive"
                    width={"394"}
                    height={"446"}
                    priority={true}
                    className="MainBanner"
                  />
                    </div>
                    <div className="CaseStudyItemHeader">HOMME</div>
                    <div className="CaseStudyItemFooter">
                        <div className="CsTt1">+35%</div>
                        <div className="CsTt2">Engagement Rate</div>
                        <div className="TagBox">
                            <div className="TagBoxItem">Paid SEO</div>
                            <div className="TagBoxItem">Paid Social</div>
                            <div className="TagBoxItem">  Paid Search</div>
                          
                        </div>
                    </div>
                </div>
              </div>
              <div>
                <div className="CaseStudyItem">
                    <div className="CaseStudyItemImage">
                    <Image
                    src="/c3.jpg"
                    layout="responsive"
                    width={"394"}
                    height={"446"}
                    priority={true}
                    className="MainBanner"
                  />
                    </div>
                    <div className="CaseStudyItemHeader">HOMME</div>
                    <div className="CaseStudyItemFooter">
                        <div className="CsTt1">+35%</div>
                        <div className="CsTt2">Engagement Rate</div>
                        <div className="TagBox">
                            <div className="TagBoxItem">Organic Social Media</div>
                            <div className="TagBoxItem">Paid Social</div>
                        </div>
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
