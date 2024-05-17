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
                Heveya aimed to enter the UAE market, targeting eco-conscious
                consumers.
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                Exploring a fresh market, they lacked understanding of their
                audience&apos;s preferences regarding product sustainability and
                quality
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails heveya">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/heveya.png"
                      layout="responsive"
                      width={"239"}
                      height={"74"}
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
            We achieved an 84% performance boost for this brand in Q4&apos;23 &
            Q1&apos;24 with targeted keywords organized into themed ad groups.
            <br />
            Using both Search and Performance Max campaigns, we balanced cost
            per purchase with Search, while maximizing conversions with
            Performance Max.
            <br />
            We also analyzed past data to identify top-selling products and
            categories, launching a new Performance Max campaign with increased
            budget and feed enablement.
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
                        <div className="ResultsRightT1">17%</div>
                        <div className="ResultsRightT2">
                          Increase repeat purchase rate
                        </div>
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
                        <div className="ResultsRightT1">108%</div>
                        <div className="ResultsRightT2">Increased in AOV</div>
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
                        <div className="ResultsRightT1">28%</div>
                        <div className="ResultsRightT2">
                          Increase in conversions
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <Image
                src="/t2.png"
                layout="responsive"
                width={"800"}
                height={"478"}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
