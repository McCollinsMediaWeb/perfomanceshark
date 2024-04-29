import Head from "next/head";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";
import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

export default function Thankyou() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
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

    try {
      console.log(name, email, contact, message);
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, contact, message }),
      });

      if (response.ok) {
        alert("Email sent successfully");
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
                    Thank you for contacting us  !
                  </div>
                  <div
                    className="Bt2"
                    data-aos="fade-up"
                    data-aos-duration="700"
                  >
                    We will get back to you as soon as we can
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
