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
                Pioneer Corporation aimed to establish a high-performing digital
                ecosystem to strengthen its online presence, enable seamless
                distributor access to product information, and attract a niche
                target audience across multiple markets.
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                Despite its position as a global electronics leader, Pioneer
                faced difficulties in building a digital-first approach to
                effectively engage its distributors and lacked market-specific
                strategies to drive consistent online growth.
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails pioneer">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/clients/6.png"
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
          <div className="Sec1T4">Strategy & Execution</div>
          <div className="Sec1T5 mrgB25">
            <div className="ListUlLi">
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>1</span>
                  <div>Website Development</div>
                </div>
                <div className="ListBoxContent">
                  Designed a user-centric, intuitive website optimized for
                  distributor engagement, featuring detailed product catalogs
                  and professional-grade content.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>2</span>
                  <div>Search Engine Optimization (SEO) </div>
                </div>
                <div className="ListBoxContent">
                  Deployed advanced SEO strategies, focusing on high-intent
                  keywords and driving organic search visibility across
                  Pioneer&apos;s global footprint. <br />
                  Implemented local SEO to target geographically segmented
                  audiences, ensuring relevance and increased market
                  penetration.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>3</span>
                  <div>Performance-Driven Campaigns</div>
                </div>
                <div className="ListBoxContent">
                  Launched targeted, data-backed marketing campaigns to drive
                  brand awareness and boost engagement within key regions.{" "}
                  <br />
                  Leveraged regional insights to optimize campaign performance
                  and maximize ROI.
                </div>
              </div>
            </div>
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
                        <div className="ResultsRightT1">150%</div>
                        <div className="ResultsRightT2">
                          Growth in website traffic
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
                        <div className="ResultsRightT1">40%</div>
                        <div className="ResultsRightT2">
                          Uplift in lead generation & distributor inquiries.
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
                        <div className="ResultsRightT1">Scalable,</div>
                        <div className="ResultsRightT2">
                          future-ready digital infrastructure
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
