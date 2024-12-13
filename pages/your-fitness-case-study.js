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
                In a highly competitive fitness app market, YourFitness.Coach
                struggled to drive significant app downloads and improve user
                engagement. Low app visibility and limited user acquisition were
                key barriers to growth.
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails yourfitness">
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
                  <div>App Installation Campaigns</div>
                </div>
                <div className="ListBoxContent">
                  Launched performance-focused campaigns on Meta and Google Ads
                  to target high-intent fitness users.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>2</span>
                  <div>Audience Segmentation</div>
                </div>
                <div className="ListBoxContent">
                  Leveraged advanced segmentation to target audiences based on
                  fitness interests, behaviors, and location, ensuring maximum
                  relevance.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>3</span>
                  <div>Creative Optimization</div>
                </div>
                <div className="ListBoxContent">
                  Designed compelling ad creatives emphasizing the app&apos;s unique
                  features, user testimonials, and success stories to drive
                  installs.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>4</span>
                  <div>Cross-Platform Promotion</div>
                </div>
                <div className="ListBoxContent">
                  Ran integrated campaigns on Meta and Google using Advantage+
                  and Performance Max for personalized targeting across
                  touchpoints.
                </div>
              </div>

              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>5</span>
                  <div>App Store Optimization (ASO) </div>
                </div>
                <div className="ListBoxContent">
                  Enhanced app visibility by optimizing the listing with
                  relevant keywords, visuals, and user reviews to boost organic
                  discovery.
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
                        <div className="ResultsRightT1">46%</div>
                        <div className="ResultsRightT2">
                          Increase in App downloads
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
                        <div className="ResultsRightT2">
                          Decrease in cost per install
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
                        <div className="ResultsRightT2">
                          Significant rise in user engagement and retention
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
