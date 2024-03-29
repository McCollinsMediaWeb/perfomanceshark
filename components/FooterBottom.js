import Head from "next/head";
import Image from "next/image";

export default function FooterBottom11() {
  return (
    <>
      <div class="FooterMediaIcons">
        <div>
          <div class="mediaFlex">
            <a href="#zero" class="mediaFlex1">
              Get a quote
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=971559564135&amp;text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media"
              class="mediaFlex2"
              target="_blank"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
      <div className="FooterBottom">
        <div className="container">
          <div className="FtBtmLinkRow">
            <div className="FtBtmLinkRowFlex">
              <div className="FtBtmLinkColumn first">
                <div className="FtrImage">
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
              <div className="FtBtmLinkColumn">
                <a href="#three">What We Do</a>
              </div>
              <div className="FtBtmLinkColumn">
                <a href="#one">Our Brands</a>
              </div>
              <div className="FtBtmLinkColumn">
                <a href="#two">Case Studies</a>
              </div>
              <div className="FtBtmLinkColumn">
                <a href="#five">  Our Partners</a>
              </div>
              <div className="FtBtmLinkColumn">
                <a href="#six"> Our Services</a>
              </div>
              <div className="FtBtmLinkColumn">
                <a href="#zero"> Contact Us</a>
              </div>
            </div>
          </div>
          <div className="FtBtm">
            <div className="row">
              <div className="col-md-4">
                <div className="FtBtm1">
                  © 2024 Performance Shark. All Right Reserved{" "}
                </div>
              </div>
              <div className="col-md-4">
                <div className="FtBtm2">
                  <a href="#">Terms & Conditions </a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="FtBtm3">
                  <div className="SocialMediaIcons">
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
      </div>
    </>
  );
}
