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
                To drive brand awareness and establish a strong brand recall for
                Toshiba&apos;s Home Appliances vertical in the competitive and
                diverse Middle East market.
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                While Toshiba held a robust global reputation, the challenge lay
                in localizing its presence and effectively engaging diverse GCC
                audiences, ensuring measurable growth in brand engagement and
                conversions.
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails toshiba">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/clients/4.png"
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
            <div className="ListUlLi">
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>1</span>
                  <div>Performance Marketing </div>
                </div>
                <div className="ListBoxContent">
                  Launched hyper-targeted META ad campaigns to boost awareness
                  and drive online and offline sales.
                  <br /> Highlighted limited-time tactical offers, balancing
                  affordability and Toshiba&apos;s premium appeal.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>2</span>
                  <div>Localized Content Development </div>
                </div>
                <div className="ListBoxContent">
                  Curated market-specific content calendars tailored for GCC
                  audiences, integrating regional languages and cultural
                  nuances.
                  <br /> Designed seasonal campaigns that aligned with major
                  regional trends and festivals to enhance relevance.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>3</span>
                  <div>Collaborative Engagement </div>
                </div>
                <div className="ListBoxContent">
                  Worked with strategic partners to amplify Toshiba&apos;s brand
                  message and ensure a wider audience reach.
                  <br />
                  Leveraged tactical promotions to build connections with
                  budget-conscious consumers while preserving the brand's
                  premium image.
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
                        <div className="ResultsRightT1">230%</div>
                        <div className="ResultsRightT2">
                          Growth in engagement
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
                        <div className="ResultsRightT1">18%</div>
                        <div className="ResultsRightT2">Improvement in CTR</div>
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
                        <div className="ResultsRightT1">43%</div>
                        <div className="ResultsRightT2">
                          Increase in website traffic
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
                        <div className="ResultsRightT1">120%</div>
                        <div className="ResultsRightT2">
                          Rise in direct inquiries
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
                        <div className="ResultsRightT1">35%</div>
                        <div className="ResultsRightT2">
                          Uplift in positive sentiment
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
