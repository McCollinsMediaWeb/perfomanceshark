import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="Section1 pd-common bg-fff">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <div className="Sec1T1">OBJECTIVE</div>
              <div className="Sec1T2 mrgB25">
              OAKBERRY aimed to successfully launch in the Middle East market, drive awareness, increase footfall to stores, and establish a loyal customer base while expanding rapidly across the region.

              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
              Launching during the pandemic posed significant challenges in driving in-store footfall and maintaining consistent engagement, especially in a highly competitive F&B market.

              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails oakberry">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/clients/10.png"
                      layout="responsive"
                      width={"293"}
                      height={"79"}
                      priority={true}
                      className="MainBanner"
                    />
                    <div className="Sec1T3 text-center">Case Study</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section2 pd-common pb-0">
        <div className="container">
          <div className="Sec1T4">Strategy & Implementation</div>
          <div className="Sec1T5 mrgB25">
          Performance Marketing

            <br />
            Launched targeted campaigns on META, TikTok, and Snapchat to drive awareness and conversions.

            <br />
            Developed a fully functional e-commerce website for online orders, optimized with Search Engine Optimization (SEO) and Google Ads to ensure high visibility and traffic.
<br/>
Innovative Product Positioning

<br/>
Highlighted OAKBERRY’s Acai products&apos; health benefits to appeal to the region&apos;s growing health-conscious audience.
<br/>
Promoted new product launches like the Acai Bucket, Nut Butters, and Acai Popsicles to maintain interest and engagement during the pandemic.
<br/>

Creative Ads Content Development
<br/>
Created engaging mobile-first content, including fun Reels and TikToks, to align with the brand’s vibrant personality.

<br/>

          </div>
          <div className="row">
            <div className="col-md-5">
              <div className="Sec1T7 text-uppercase">Results</div>
              <div className="ResultItemWrap">
                <div className="ResultBox">
                  <div className="Results">
                    <div className="ResultsLeft">
                      <div className="ReBoxWr">
                        <div className="resultIcon Icon1">&nbsp;</div>
                      </div>
                    </div>
                    <div className="ResultsRight">
                      <div>
                        <div className="ResultsRightT1">90</div>
                        <div className="ResultsRightT2">
                        locations launched across the Middle East, including the UAE, Saudi Arabia, and Kuwait, within just four years.

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <Image
                src="/mm1.png"
                layout="responsive"
                width={"800"}
                height={"479"}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
