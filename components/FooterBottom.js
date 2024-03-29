import Head from "next/head";
import Image from "next/image";

export default function FooterBottom11() {
  return (
    <>
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
                <a href="#">About Us</a>
              </div>
              <div className="FtBtmLinkColumn">
                <a href="#">Services</a>
              </div>
              <div className="FtBtmLinkColumn">
                <a href="#">Case Studies</a>
              </div>
              <div className="FtBtmLinkColumn">
                <a href="#">Strategic Partnerships</a>
              </div>
              <div className="FtBtmLinkColumn">
                <a href="#">Industries</a>
              </div>
              <div className="FtBtmLinkColumn">
                <a href="#"> Contact Us</a>
              </div>
            </div>
          </div>
          <div className="FtBtm">
            <div className="row">
                <div className="col-md-4">
                    <div className="FtBtm1">© 2024 Performance Shark. All Right Reserved  </div>
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
