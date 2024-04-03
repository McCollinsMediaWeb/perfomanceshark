import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Testimonials() {
  useEffect(() => {
    AOS.init();
  }, []);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
      <div className="TestimonialsBox pd-common bg4">
        <div className="container position-relative">
            <div className="ArrowIcon">&nbsp;</div>
          <div className="row">
            <div className="col-md-8 slider1 setup1">
                <div className="InvComma">&nbsp;</div>
                <Slider {...settings}>
                    <div>
                        <div className="TEstRow">
                            <div className="TestRowT1">“The entire staff at Performance Shark
has been phenomenal. They are quick with
their replies and incredibly helpful.”</div>
                            <div className="TestRowT2">Edward Kennedy</div>
                            <div className="TestRowT3">Director, Client Experience</div>
                        </div>
                    </div>
                    <div>
                        <div className="TEstRow">
                            <div className="TestRowT1">“The entire staff at Performance Shark
has been phenomenal. They are quick with
their replies and incredibly helpful.”</div>
                            <div className="TestRowT2">Edward Kennedy</div>
                            <div className="TestRowT3">Director, Client Experience</div>
                        </div>
                    </div><div>
                        <div className="TEstRow">
                            <div className="TestRowT1">“The entire staff at Performance Shark
has been phenomenal. They are quick with
their replies and incredibly helpful.”</div>
                            <div className="TestRowT2">Edward Kennedy</div>
                            <div className="TestRowT3">Director, Client Experience</div>
                        </div>
                    </div><div>
                        <div className="TEstRow">
                            <div className="TestRowT1">“The entire staff at Performance Shark
has been phenomenal. They are quick with
their replies and incredibly helpful.”</div>
                            <div className="TestRowT2">Edward Kennedy</div>
                            <div className="TestRowT3">Director, Client Experience</div>
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
