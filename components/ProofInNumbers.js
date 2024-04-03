import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function ProofInNumber() {
  useEffect(() => {
    AOS.init();
  }, []);
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
      <div className=" pd-common bg4">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="AdsT1">
                The Proof Is In The Numbers
              </div>
              <div className="row ProofBx1Row">
                <div className="col-md-4 ProofBx1">
                  <div >
                    <div className="prrofBox">
                      <div className="prrofBoxLyr1">
                        <div className="prrofBoxLyr2">
                          <div className="prrofBoxLyr3">
                            <div>
                              <div className="prrofBoxContent">
                                <div className="prrofBoxContentT1">37%</div>
                                <div className="prrofBoxContentT2">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="PrTT1">
                      Average Increase In
                      <br />
                      Sales For Our Clients
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ProofBx1">
                  <div >
                    <div className="prrofBox">
                      <div className="prrofBoxLyr1">
                        <div className="prrofBoxLyr2">
                          <div className="prrofBoxLyr3">
                            <div>
                              <div className="prrofBoxContent">
                                <div className="prrofBoxContentT1">100%</div>
                                <div className="prrofBoxContentT2">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="PrTT1">
                      Google And
                      <br />
                      Facebook-Certified Team
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ProofBx1">
                  <div >
                    <div className="prrofBox">
                      <div className="prrofBoxLyr1">
                        <div className="prrofBoxLyr2">
                          <div className="prrofBoxLyr3">
                            <div>
                              <div className="prrofBoxContent">
                                <div className="prrofBoxContentT1">81%</div>
                                <div className="prrofBoxContentT2">&nbsp;</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="PrTT1">
                      Results Improved
                      <br />
                      Compared To Previous Agencies
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="AdsBlock">
                <div className="AdsHeader">
                  <div className="AdsHdT1">282,000</div>
                  <div className="AdsHdT2">Leads Generated So Far…</div>
                </div>
                <div className="AdsFooter">
                  <div className="AdsHdT3">Contact Us</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
