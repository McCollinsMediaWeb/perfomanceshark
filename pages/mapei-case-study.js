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
              Masterbaker Studio aimed to boost website traffic and sales by targeting passionate bakers with premium ingredients like flour, chocolate, butters, and creams.
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
              Despite that the Middle East provides the best ROI on spending, however, they struggled to find out the demand generation & the right target audience as a B2B2C business.
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails mapei">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/mapei.png"
                      layout="responsive"
                      width={"304"}
                      height={"70"}
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
          <div className="Sec1T5 mrgB25">Implemented targeted search campaigns for construction adhesives, sealants, and chemicals, refining keywords daily for lower CPC & CPL, yielding quality leads with low CPA. 
Utilized Meta Ads & LinkedIn Ads for top-of-funnel awareness & Developed a diverse creative asset for A/B testing and optimized CTR & conversion rate. 
Used Geographic targeting across the Middle East, UAE, Bahrain, Oman, Kuwait, KSA, Kenya, and Egypt to build awareness and drive demand.</div>
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
                        <div className="ResultsRightT1">48%</div>
                        <div className="ResultsRightT2">Effective strategy increased</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ResultBox">
                  <div className="Results">
                    <div className="ResultsLeft">
                      <div className="ReBoxWr">
                        <div className="resultIcon Icon2">&nbsp;</div>
                      </div>
                    </div>
                    <div className="ResultsRight">
                      <div>
                        <div className="ResultsRightT1">130%</div>
                        <div className="ResultsRightT2">Engagement</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ResultBox">
                  <div className="Results">
                    <div className="ResultsLeft">
                      <div className="ReBoxWr">
                        <div className="resultIcon Icon3">&nbsp;</div>
                      </div>
                    </div>
                    <div className="ResultsRight">
                      <div>
                        <div className="ResultsRightT1">122%</div>
                        <div className="ResultsRightT2">Raised brand Awareness</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ResultBox">
                  <div className="Results">
                    <div className="ResultsLeft">
                      <div className="ReBoxWr">
                        <div className="resultIcon Icon4">&nbsp;</div>
                      </div>
                    </div>
                    <div className="ResultsRight">
                      <div>
                        <div className="ResultsRightT1">43.45%</div>
                        <div className="ResultsRightT2">Reduce the CPA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <Image
                src="/m1.png"
                layout="responsive"
                width={"800"}
                height={"509"}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
