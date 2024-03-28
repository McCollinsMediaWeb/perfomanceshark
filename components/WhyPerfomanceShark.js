import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";

export default function WhyPErfomanceShark() {
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
      <div className=" pd-common bg4 pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="NavTabs">
                <div className="NavTabsFlex">
                  <div className="NavTabsItem active">Transparency</div>
                  <div className="NavTabsItem">Team Of Experts</div>
                  <div className="NavTabsItem">Results</div>
                </div>
              </div>
              <div className="TabContent">
                <div className="TbT1">100% Campaign Transparency</div>
                <div className="TbT2">
                  We cultivate an environment of transparency and communication
                  in all we do. You don’t have to wonder what is going on with
                  your campaign – we will keep you in the loop and in control.
                </div>
                <Image
                  src="/g.png"
                  layout="responsive"
                  width={"515"}
                  height={"236"}
                  priority={true}
                  className=""
                />
              </div>
            </div>
            <div className="col-md-5">
              <div className="PtY1">
                Why Performance Shark Is Your Top - Choice
              </div>
              <div className="PtY2">
                We are a five-star rated holistic full-service digital marketing
                agencies, serving thousands of clients. Our digital agency
                covers all aspects of internet marketing: SEO, social media, and
                PPC management, all the way to email marketing, website design,
                and web development.
              </div>
              <div className="PtY2">
                We are a five-star rated holistic full-service digital marketing
                agencies, serving thousands of clients. Our digital agency
                covers all aspects of internet marketing: SEO, social media, and
                PPC management, all the way to email marketing, website design,
                and web development.
              </div>
              <div className="PtY3">Get proposal</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
