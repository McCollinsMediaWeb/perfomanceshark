import Head from "next/head";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useEffect, useState } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { handleConversionEvent } from "./conversion";

export default function HeroBanner() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    AOS.init();
  }, []);

  // Inside your HeroBanner component or a separate form handling component
  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = event.target.elements[0].value;
    const email = event.target.elements[1].value;
    const contact = event.target.elements[2].value;
    const message = event.target.elements[3].value;
    const company = event.target.elements[4].value;

    try {
      setLoading(true);
      console.log(name, email, contact, message);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, contact, message, company }),
      });

      if (response.ok) {
        console.log("Done");

        handleConversionEvent();
        window.location.replace("/Thankyou");
        setLoading(false);
      } else {
        alert("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending email");
    }
  };

  return (
    <>
      <div className="HeroBannerWrp">
        <div className="DeskHero">
          {isDesktop && (
            <div className="BannerImageBox">
              <Image
                src="/herobanner.jpg"
                layout="responsive"
                width={"1492"}
                height={"816"}
                priority={true}
                className="MainBanner"
              />
            </div>
          )}
          <div className="BannerContentBox">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div
                    className="Bt1"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    Performance Marketing that Drives Revenue
                  </div>
                  <div
                    className="Bt2"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    Amplify your business with our data-centric,
                    performance-driven digital marketing solutions
                  </div>
                </div>
                <div className="col-md-4">
                  <div
                    className="BannerForm"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    {/* <div className="Bt3">Build trust with your audience by writing content that
actually answers their questions and solves their problems.</div> */}
                    <form onSubmit={handleSubmit}>
                      <div className="BannerFormItem cninput">
                        <input type="text" placeholder="Your Name*" required />
                        <input
                          type="email"
                          placeholder="Email Address*"
                          required
                        />
                        <input
                          type="text"
                          placeholder="Contact Number*"
                          required
                        />
                        <input type="text" placeholder="Website URL" required />
                        <input type="text" placeholder="Company Name*" required />
                        <div style={{ display: "flex" }}>
                          <button type="submit" style={{ margin: 0 }}>
                            Submit Inquiry
                          </button>
                          {loading && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 200 200"
                              style={{ width: "50px" }}
                            >
                              <radialGradient
                                id="a12"
                                cx=".66"
                                fx=".66"
                                cy=".3125"
                                fy=".3125"
                                gradientTransform="scale(1.5)"
                              >
                                <stop offset="0" stop-color="#FFFFFF"></stop>
                                <stop
                                  offset=".3"
                                  stop-color="#FFFFFF"
                                  stop-opacity=".9"
                                ></stop>
                                <stop
                                  offset=".6"
                                  stop-color="#FFFFFF"
                                  stop-opacity=".6"
                                ></stop>
                                <stop
                                  offset=".8"
                                  stop-color="#FFFFFF"
                                  stop-opacity=".3"
                                ></stop>
                                <stop
                                  offset="1"
                                  stop-color="#FFFFFF"
                                  stop-opacity="0"
                                ></stop>
                              </radialGradient>
                              <circle
                                transform-origin="center"
                                fill="none"
                                stroke="url(#a12)"
                                stroke-width="15"
                                stroke-linecap="round"
                                stroke-dasharray="200 1000"
                                stroke-dashoffset="0"
                                cx="100"
                                cy="100"
                                r="70"
                              >
                                <animateTransform
                                  type="rotate"
                                  attributeName="transform"
                                  calcMode="spline"
                                  dur="2"
                                  values="360;0"
                                  keyTimes="0;1"
                                  keySplines="0 0 1 1"
                                  repeatCount="indefinite"
                                ></animateTransform>
                              </circle>
                              <circle
                                transform-origin="center"
                                fill="none"
                                opacity=".2"
                                stroke="#FFFFFF"
                                stroke-width="15"
                                stroke-linecap="round"
                                cx="100"
                                cy="100"
                                r="70"
                              ></circle>
                            </svg>
                          )}
                        </div>
                      </div>
                    </form>
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
