import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { handleConversionEvent } from "./conversion";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

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
    // const contact = event.target.elements[2].value;
    // const company = event.target.elements[3].value;

    try {
      setLoading(true);
      console.log(name, email, phone, message, company);
      // console.log(isValidPhoneNumber(phone), "phn");
      if (isValidPhoneNumber(phone) === true) {
        let formData = new FormData();
        formData.append("name", name);
        formData.append("Email", email);
        formData.append("Phone", phone.toString());
        formData.append("Company", company);
        formData.append("Message", message);

        const response = await fetch(
          "https://script.google.com/macros/s/AKfycby8l6vy2_tZs57IJmXIek1X6sr2QipFs4TL_O25-53Ofn_aveUDV_nv61OownuLDcvf/exec",
          {
            method: "POST",
            body: formData,
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("Success:", data);

          window.location.replace("/Thankyou");
          handleConversionEvent();
          setLoading(false);
          // Handle success - e.g., display a success message to the user
        } else {
          console.log(response);
          // Handle error - e.g., display an error message to the user
        }
        window.location.replace("/Thankyou");
      } else {
        alert("Phone validation failed");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
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
              <a
                href="https://calendar.app.google/jb64JdxiycDnPAZE6"
                scroll={true}
                className="FreeAudiBtn"
                target="_blank"
              >
                Book a meeting
              </a>
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
                    <a target="_blank" href="https://calendar.app.google/jb64JdxiycDnPAZE6" scroll={true} className="FreeAudiBtn">
                      Book a meeting
                    </a>
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
                          <div className="BorderBox">
                          <input
                            type="text"
                            placeholder="Your Name*"
                            required
                          />
                          </div>
                        </div>
                        <div className="col-md-6">
                        <div className="BorderBox">
                          <input
                            type="email"
                            placeholder="Email Address*"
                            required
                          />
                          </div>
                        </div>
                        <div className="col-md-6">
                        <div className="BorderBox">
                          <PhoneInput
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={setPhone}
                            defaultCountry="AE"
                            disabled={false} // Set this to true if you want to disable editing
                          />
                          </div>
                        </div>
                        <div className="col-md-6">
                        <div className="BorderBox">
                          <input
                            type="text"
                            placeholder="Website URL*"
                            required
                            onChange={(e) => {
                              setMessage(e.target.value);
                            }}
                          />
                          </div>
                        </div>
                        <div className="col-md-6">
                        <div className="BorderBox">
                          <input
                            type="text"
                            placeholder="Company*"
                            onChange={(e) => {
                              setCompany(e.target.value);
                            }}
                            required
                          />
                          </div>
                        </div>
                        <div
                          className="col-md-6"
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
