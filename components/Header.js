import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
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
  return (
    <>
      <div className="HeaderWrap">
        <div className="container">
          <div className="HeaderRow">
            <div className="HeaderRowLeft">
              <div className="HeaderImage">
                <Link  href={"/"} scroll={true}>
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
              <Link href="#three" scroll={true} className="m-d-none">
                What We Do
              </Link>
              <Link href="#one" scroll={true} className="m-d-none">
                Our Brands
              </Link>
              <Link href="#two" scroll={true} className="m-d-none">
                Case Studies
              </Link>
              <Link href="#five" scroll={true} className="m-d-none">
                Our Partners
              </Link>
              <Link href="#six" scroll={true} className="m-d-none">
                Our Packages
              </Link>
              <a href="javascript:void(0);" scroll={true} className="FreeAudiBtn" onClick={() => setOpen1(true)}>
                Free Audit
              </a>
              <a
                className="MenuIcon"
                href="javascript:void(0);"
                onClick={() => setOpen(true)}
              >
                <div className="MenuArrows">
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                  <div>&nbsp;</div>
                </div>
              </a>
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
                    <Link href="#three" scroll={true}>
                      What We Do
                    </Link>
                  </div>
                  <div className="col-md-4" onClick={() => setOpen(false)}>
                    <Link href="#one" scroll={true}>
                      Our Brands
                    </Link>
                  </div>
                  <div className="col-md-4" onClick={() => setOpen(false)}>
                    <Link href="#two" scroll={true}>
                      Case Studies
                    </Link>
                  </div>
                  <div className="col-md-4" onClick={() => setOpen(false)}>
                    <Link href="#five" scroll={true}>
                      Our Partners
                    </Link>
                  </div>
                  <div className="col-md-4" onClick={() => setOpen(false)}>
                    <Link href="#six" scroll={true}>
                      Our Packages
                    </Link>
                  </div>
                  <div className="col-md-4" onClick={() => setOpen(false)}>
                    <Link href="#zero" scroll={true} className="FreeAudiBtn">
                      Free Audit
                    </Link>
                  </div>
                </div>
                <div className="SocialMediaIcons MegamenuSocial">
                  <a target="_blank" href="#">
                    <div className="socialicon ticktock">&nbsp;</div>
                  </a>
                  <a target="_blank" href="#">
                    <div className="socialicon facebook">&nbsp;</div>
                  </a>
                  <a target="_blank" href="#">
                    <div className="socialicon instagram">&nbsp;</div>
                  </a>
                  <a target="_blank" href="#">
                    <div className="socialicon linkedin m-0">&nbsp;</div>
                  </a>
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
                    <div className="row">
                      <div className="col-md-6"><input type="text" placeholder="Your Name*"/></div>
                      <div className="col-md-6"> <input type="text" placeholder="Email Address*"/></div>
                      <div className="col-md-6"><input type="text" placeholder="Contact Number*"/></div>
                      <div className="col-md-6"><input type="text" placeholder="Website URL*"/></div>
                      <div className="col-md-12"><button>Submit Inquiry</button></div>
                    </div>
                    
                   
                    
                    
                    
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
