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
              Drive enrollment to the Culinary Courses and get more leads to the UAE market.
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
              Reach the right audience who have an interest in cooking Classes, Culinary Courses, and improving their cooking skills.
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails riche">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/r1.jpg"
                      layout="responsive"
                      width={"250"}
                      height={"98"}
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
          <div className="Sec1T5 mrgB25">Utilize advanced targeting on Google and Facebook Ads to effectively reach the target audience.
Narrow down demographics, interests, and behaviors for better ad targeting.
Experiment with different criteria to find optimal audience segments.
Implement lead nurturing strategies to engage potential students.</div>
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
                        <div className="ResultsRightT1">49.39%</div>
                        <div className="ResultsRightT2">Increased in Impressions</div>
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
                        <div className="ResultsRightT1">56.40%</div>
                        <div className="ResultsRightT2">Increased in Clicks</div>
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
                        <div className="ResultsRightT1">379.97%</div>
                        <div className="ResultsRightT2">Increase in conversions</div>
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
                        <div className="ResultsRightT1">52.86%</div>
                        <div className="ResultsRightT2">Decreased In Cost Per Conversions</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <Image
                src="/rr1.png"
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
