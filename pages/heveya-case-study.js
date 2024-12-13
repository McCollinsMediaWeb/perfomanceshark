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
                To successfully enter the UAE market and connect with
                eco-conscious consumers by promoting sustainable and
                premium-quality products.
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                Heveya faced the challenge of entering a fresh market with
                limited insights into their audience&apos;s preferences regarding
                sustainability and product quality.
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
            <div className="ListUlLi">
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>1</span>
                  <div>Targeted Search Campaigns</div>
                </div>
                <div className="ListBoxContent">
                  Organized high-performing keywords into themed ad groups to
                  improve relevance and efficiency.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>2</span>
                  <div>Performance Max Campaigns</div>
                </div>
                <div className="ListBoxContent">
                  Balanced cost-per-purchase through Search campaigns while
                  leveraging Performance Max for maximum conversion volume.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>3</span>
                  <div>Data-Driven Approach</div>
                </div>
                <div className="ListBoxContent">
                  Analyzed past data to identify top-performing products and
                  categories.
                  <br /> Allocated increased budgets for these products using
                  feed-enabled campaigns for better targeting.
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
                        <div className="ResultsRightT1">17%</div>
                        <div className="ResultsRightT2">
                          Increase in repeat purchase rate
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
                        <div className="ResultsRightT1">108%</div>
                        <div className="ResultsRightT2">
                          Growth in Average Order Value
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
                        <div className="ResultsRightT1">28+</div>
                        <div className="ResultsRightT2">
                          Increase in overall conversions
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
