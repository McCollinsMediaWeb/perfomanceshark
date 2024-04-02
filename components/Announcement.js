import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import React,{useEffect} from "react";

import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Announcement() {
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
      <div className="Announcement pd-common bg6">
        <div className="container position-relative">
          <div className="row">
            <div className="col-md-9">
              <div className="AnIconT1"  data-aos="fade-up" data-aos-duration="700">&nbsp;</div>
              <div className="AnIconT2"  data-aos="fade-up" data-aos-duration="700">
                See How We Can Help Your Business Grow With Digital Marketing
              </div>
            </div>
            <div className="col-md-3 text-right">
              <div className="AnIconT3"  data-aos="fade-up" data-aos-duration="700">
                Ready To Speak
                <br />
                With A Marketing Expert?
                <br />
                Give Us A Ring
              </div>
              <a href="#" className="AnIconT4"  data-aos="fade-up" data-aos-duration="700">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
