import Image from "next/image";
export default function Home() {
  return (
    <>
      <div className="Section1 pd-common bg-fff">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              {/* <div className="Sec1T1">OBJECTIVE</div>
              <div className="Sec1T2 mrgB25">
                To establish Betterlife as a leading home appliance retailer by
                leveraging performance-driven strategies to increase sales,
                improve ROI, and reduce cost per acquisition.
              </div> */}
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                Despite being a leader in premium door hardware, FritsJurgens
                faced difficulty in generating high-quality leads within a
                competitive market. Existing campaigns attracted irrelevant
                prospects, resulting in low conversion rates and inefficient
                lead generation.
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails fritsjurgens">
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
            <div className="ListUlLi">
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>1</span>
                  <div>Targeted Audience Segmentation</div>
                </div>
                <div className="ListBoxContent">
                  Divided the audience into two groups: Architects/Interior
                  Designers and Manufacturers/ Distributors.
                  <br /> Crafted messaging tailored to the specific needs of
                  each segment.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>2</span>
                  <div>Meta Campaign Strategies</div>
                </div>
                <div className="ListBoxContent">
                  Focused targeting to eliminate irrelevant prospects and
                  improve lead relevance.
                  <br /> Diversified campaigns, combining lead generation and
                  website conversion ads for immediate and long-term engagement.
                  <br /> Customized creatives to address pain points and
                  highlight FritsJurgen&apos;s premium features.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>3</span>
                  <div>Google Campaign Strategies</div>
                </div>
                <div className="ListBoxContent">
                  Deployed Performance Max Campaigns for Al-driven targeting of
                  high-intent users.
                  <br />
                  Used Dynamic Search Ads (DSA) to improve relevance and capture
                  relevant search traffic.
                  <br />
                  Optimized high-intent keywords and ad creatives to highlight
                  unique selling points.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>4</span>
                  <div>Conversion Tracking & Optimization</div>
                </div>
                <div className="ListBoxContent">
                  Continuous monitoring of lead quality with refined bidding
                  strategies to prioritize high- conversion opportunities.
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
                        <div className="ResultsRightT1">50%</div>
                        <div className="ResultsRightT2">
                          Increase in high quality leads
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
                          Reduction in irrelevant prospects
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
                          Growth in overall conversions
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
                        <div className="ResultsRightT1">30%</div>
                        <div className="ResultsRightT2">
                          Reduction in lead acquisition costs
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
