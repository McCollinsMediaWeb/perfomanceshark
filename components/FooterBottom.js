import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function FooterBottom11() {
  return (
    <>
      <div class="FooterMediaIcons">
        <div>
          <div class="mediaFlex">
            <Link href="https://calendar.app.google/jb64JdxiycDnPAZE6" class="mediaFlex1"  target="_blank">
              Book A Meeting
            </Link>
            <Link
              href="https://api.whatsapp.com/send?phone=971559564135&amp;text=I%20would%20like%20to%20know%20more%20about%20McCollins%20Media"
              class="mediaFlex2"
              target="_blank"
            >
              WhatsApp us
            </Link>
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
                <Link href="#three">What We Do</Link>
              </div>
              <div className="FtBtmLinkColumn">
                <Link href="#one">Our Brands</Link>
              </div>
              <div className="FtBtmLinkColumn">
                <Link href="#two">Case Studies</Link>
              </div>
              <div className="FtBtmLinkColumn">
                <Link href="#five"> Our Partners</Link>
              </div>
              <div className="FtBtmLinkColumn">
                <Link href="#six"> Our Services</Link>
              </div>
              <div className="FtBtmLinkColumn">
                <Link href="#zero"> Contact Us</Link>
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
                  <Link href="#">Terms & Conditions </Link>
                  <Link href="#">Privacy Policy</Link>
                </div>
              </div>
              <div className="col-md-4">
                <div className="FtBtm3">
                  <div className="SocialMediaIcons">
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
      </div>
    </>
  );
}
