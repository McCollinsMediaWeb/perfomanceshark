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
                To establish Betterlife as a leading home appliance retailer by
                leveraging performance-driven strategies to increase sales,
                improve ROI, and reduce cost per acquisition.
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                Operating in a competitive market, Betterlife struggled with
                outdated ad tactics and insufficient performance optimization,
                limiting its ability to capture customer attention and drive
                meaningful growth.
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails betterlife">
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
                  <div>Targeted Awareness Campaigns</div>
                </div>
                <div className="ListBoxContent">
                  Executed social media campaigns to enhance brand visibility
                  and recognition.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>2</span>
                  <div>Website Optimization</div>
                </div>
                <div className="ListBoxContent">
                  Enhanced user experience with dynamic banners and
                  sales-focused strategies to boost engagement and purchases.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>3</span>
                  <div>Meta Catalog & Dynamic Ads</div>
                </div>
                <div className="ListBoxContent">
                  Leveraged Advantage+ features to personalize catalog ads,
                  showcasing product diversity and relevance.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>4</span>
                  <div>Ad Formats Variety</div>
                </div>
                <div className="ListBoxContent">
                  Used carousel and collection ads to increase interaction and
                  streamline the user journey.
                </div>
              </div>

              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>5</span>
                  <div>Google Performance Max & Shopping Ads</div>
                </div>
                <div className="ListBoxContent">
                  Captured high-intent audiences with optimized campaigns to
                  maximize visibility and lower acquisition costs.
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
                        <div className="ResultsRightT1">60%</div>
                        <div className="ResultsRightT2">
                          Growth in website purchases.
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
                        <div className="ResultsRightT1">42.5%</div>
                        <div className="ResultsRightT2">
                          Increase in overall conversions.
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
                        <div className="ResultsRightT1">15%</div>
                        <div className="ResultsRightT2">
                          Reduction in cost per conversion
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
