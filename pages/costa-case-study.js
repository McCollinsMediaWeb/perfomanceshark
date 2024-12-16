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
                The company aimed to increase sales and market share in
                Dubai&apos;s competitive furniture industry.
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                They are struggling to scale their brand online &amp; increase
                the sales MoM consistently
              </div>
            </div>
            <div className="col-md-5">
              {/* <div className="CompanyDetails costa">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/clients/2.png"
                      layout="responsive"
                      width={"293"}
                      height={"79"}
                      priority={true}
                      className="MainBanner"
                    />
                    <div className="Sec1T3 text-center">Case Study</div>
                  </div>
                </div>
              </div> */}

              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "400px",
                  marginRight: "30px",
                }}
              >
                <Image src="/c24.jpg" layout="fill" objectFit="cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section2 pd-common pb-0">
        <div className="container">
          <div className="Sec1T4">Strategy & Implementation</div>
          <div className="Sec1T5 mrgB25">
            Utilized Google Ads for targeting office furniture seekers in Dubai
            with focused keyword research for high-intent terms.
            <br />
            Created ad extensions for additional product details and used bid
            adjustments to boost ad visibility.
            <br />
            Utilized Facebook&apos;s ad targeting to reach decision-makers &
            created engaging ad creatives featuring ProWork&apos;s products..
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
                        <div className="ResultsRightT1">317.41%</div>
                        <div className="ResultsRightT2">
                          Increase in conversions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ResultBox">
                  <div className="Results">
                    <div className="ResultsLeft">
                      <div className="ReBoxWr">
                        <div className="resultIcon Icon1">&nbsp;</div>
                      </div>
                    </div>
                    <div className="ResultsRight">
                      <div>
                        <div className="ResultsRightT1">24.53%</div>
                        <div className="ResultsRightT2">
                          Decreased In Cost Per Conversions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ResultBox">
                  <div className="Results">
                    <div className="ResultsLeft">
                      <div className="ReBoxWr">
                        <div className="resultIcon Icon1">&nbsp;</div>
                      </div>
                    </div>
                    <div className="ResultsRight">
                      <div>
                        <div className="ResultsRightT1">130.71%</div>
                        <div className="ResultsRightT2">
                          Increased in Clicks
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ResultBox">
                  <div className="Results">
                    <div className="ResultsLeft">
                      <div className="ReBoxWr">
                        <div className="resultIcon Icon1">&nbsp;</div>
                      </div>
                    </div>
                    <div className="ResultsRight">
                      <div>
                        <div className="ResultsRightT1">193.38%</div>
                        <div className="ResultsRightT2">
                          Increased in Impressions
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
