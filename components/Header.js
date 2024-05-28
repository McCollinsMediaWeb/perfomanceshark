import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.classList.add("PanelActivated");
    } else {
      document.body.classList.remove("PanelActivated");
    }
  }, [open]);

  const [open1, setOpen1] = useState(false);
  useEffect(() => {
    if (open1) {
      document.body.classList.add("PanelActivated1");
    } else {
      document.body.classList.remove("PanelActivated1");
    }
  }, [open1]);

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

      window.location.replace("/Thankyou");

      if (response.ok) {
        setLoading(false);
      } else {
        console.log("Error sending email");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <div className="HeaderWrap">
        <div className="container">
          <div className="HeaderRow">
            <div className="HeaderRowLeft">
              <div className="HeaderImage">
                <Link href={"/"} scroll={true}>
                  <Image
                    src="/lnew.png"
                    layout="responsive"
                    width={"155"}
                    height={"108"}
                    priority={true}
                    className="MainBanner"
                  />
                </Link>
              </div>
            </div>
            <div className="HeaderRowRight">
              <Link href="/#three" scroll={true} className="m-d-none">
                What We Do
              </Link>
              <Link href="/#one" scroll={true} className="m-d-none">
                Our Brands
              </Link>
              <Link href="/#two" scroll={true} className="m-d-none">
                Case Studies
              </Link>
              <Link href="/#five" scroll={true} className="m-d-none">
                Our Partners
              </Link>
              <Link href="/#six" scroll={true} className="m-d-none">
                Our Packages
              </Link>
              <Link
                href="javascript:void(0);"
                scroll={true}
                className="FreeAudiBtn"
                onClick={() => setOpen1(true)}
              >
                Free Audit
              </Link>
              <Link
                className="MenuIcon"
                href="javascript:void(0);"
                onClick={() => setOpen(true)}
              >
                <div className="MenuArrows">
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="MegaMenu MegaMenu1">
        <div className="container">
          <div className="text-right">
            <div className="closeBtn" onClick={() => setOpen(false)}>
              &nbsp;
            </div>
          </div>
          <div className="MegaMenuContent">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <div className="MegaMenuLogo">
                    <Image
                      src="/p2.png"
                      layout="responsive"
                      width={"279"}
                      height={"284"}
                      priority={true}
                      className="MainBanner"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="row MegaLinks">
                  <div className="col-md-4" onClick={() => setOpen(false)}>
                    <Link href="/#three" scroll={true}>
                      What We Do
                    </Link>
                  </div>
                  <div className="col-md-4" onClick={() => setOpen(false)}>
                    <Link href="/#one" scroll={true}>
                      Our Brands
                    </Link>
                  </div>
                  <div className="col-md-4" onClick={() => setOpen(false)}>
                    <Link href="/#two" scroll={true}>
                      Case Studies
                    </Link>
                  </div>
                  <div className="col-md-4" onClick={() => setOpen(false)}>
                    <Link href="/#five" scroll={true}>
                      Our Partners
                    </Link>
                  </div>
                  <div className="col-md-4" onClick={() => setOpen(false)}>
                    <Link href="/#six" scroll={true}>
                      Our Packages
                    </Link>
                  </div>
                  <div className="col-md-4" onClick={() => setOpen(false)}>
                    <Link href="/#zero" scroll={true} className="FreeAudiBtn">
                      Free Audit
                    </Link>
                  </div>
                </div>
                <div className="SocialMediaIcons MegamenuSocial">
                  <Link target="_blank" href="#">
                    <div className="socialicon ticktock">&nbsp;</div>
                  </Link>
                  <Link target="_blank" href="#">
                    <div className="socialicon facebook">&nbsp;</div>
                  </Link>
                  <Link target="_blank" href="#">
                    <div className="socialicon instagram">&nbsp;</div>
                  </Link>
                  <Link target="_blank" href="#">
                    <div className="socialicon linkedin m-0">&nbsp;</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="MegaMenu MegaMenu2">
        <div className="container">
          <div className="text-right">
            <div className="closeBtn" onClick={() => setOpen1(false)}>
              &nbsp;
            </div>
          </div>
          <div className="MegaMenuContent">
            <div className="row">
              <div className="col-md-12">
                <div className="text-center">
                  <div className="MegaMenuLogo">
                    <Image
                      src="/p2.png"
                      layout="responsive"
                      width={"279"}
                      height={"284"}
                      priority={true}
                      className="MainBanner"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="MegamenuForm">
                  <div className="BannerFormItem">
                    <form onSubmit={handleSubmit}>
                      <div className="row">
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="Your Name*"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="email"
                            placeholder="Email Address*"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="Contact Number*"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <input
                            type="text"
                            placeholder="Website URL*"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <input type="text" placeholder="Company*" required />
                        </div>
                        <div
                          className="col-md-12"
                          style={{ textAlign: "center" }}
                        >
                          <button type="submit">Submit Inquiry</button>
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
