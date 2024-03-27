import Head from "next/head";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="HeaderWrap">
        <div className="container">
        <div className="HeaderRow">
          <div className="HeaderRowLeft">
            <div className="HeaderImage">
              <Image
                src="/logo.png"
                layout="responsive"
                width={"220"}
                height={"123"}
                priority={true}
                className="MainBanner"
              />
            </div>
          </div>
          <div className="HeaderRowRight">
            <a href="#">About Us</a>
            <a href="#">Services</a>
            <a href="#">Case Studies</a>
            <a href="#">Strategic Partenership</a>
            <a href="#">Industries</a>
            <a href="#">Contact Us</a>
            <a href="#" className="FreeAudiBtn">Free Audit</a>
            <a className="MenuIcon" href="javascript:void(0);">
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
    </>
  );
}
