import Head from "next/head";
import Image from "next/image";
import useMediaQuery from "@/hooks/useMediaQuery";


export default function HeroBanner() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <>
     <div className="HeroBannerWrp">
     {isDesktop && (
      <div className="DeskHero">
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
        <div className="BannerContentBox">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="Bt1">Performance  Marketing
that Drives Revenue</div>
<div className="Bt2">Amplify your business with our data-centric, performance-driven digital marketing solutions</div>
              </div>
              <div className="col-md-4">
                <div className="BannerForm">
                  <div className="Bt3">Build trust with your audience by writing content that
actually answers their questions and solves their problems.</div>
                  <div className="BannerFormItem">
                    <input type="text" placeholder="Your Name*"/>
                    <input type="text" placeholder="Email Address*"/>
                    <input type="text" placeholder="Contact Number*"/>
                    <input type="text" placeholder="Website URL*"/>
                    <button>Submit Inquiry</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     )}
     {!isDesktop && (
      <div>Mobile</div>
     )}
     </div>
    </>
  );
}
