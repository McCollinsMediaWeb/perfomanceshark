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
                Primary goal was to leverage digital marketing channels,
                specifically Google and Facebook campaigns,to increase sales and
                expand its customer base in Oman
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                Modern Oman Bakery struggled to boost sales in a competitive
                market, aiming to stand out and attract customers with unique
                offerings and stand out as the leader of this industry.
              </div>
            </div>
            <div className="col-md-5">
              {/* <div className="CompanyDetails mob">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/mob.png"
                      layout="responsive"
                      width={"199"}
                      height={"139"}
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
                <Image
                  src="/clients/MobCover.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section2 pd-common pb-0">
        <div className="container">
          <div className="Sec1T4">Strategy & Implementation</div>
          <div className="Sec1T5 mrgB25">
            Utilize advanced targeting on Google and Facebook Ads to effectively
            reach the target audience. Narrow down demographics, interests, and
            behaviors for better ad targeting. Experiment with different
            criteria to find optimal audience segments. Implement lead nurturing
            strategies to engage potential students.
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
                        <div className="ResultsRightT1">222.37%</div>
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
                        <div className="ResultsRightT1">216.25%</div>
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
                        <div className="ResultsRightT1">78.89%</div>
                        <div className="ResultsRightT2">
                          Decreased In Cost Per Conversions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <Image
                src="/mob1.png"
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
