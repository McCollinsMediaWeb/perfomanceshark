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
                To launch OAKBERRY in the Middle East, drive awareness, increase
                footfall, and achieve measurable growth through paid marketing
                campaigns and rapid regional expansion.
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                Launching during the pandemic posed challenges in driving
                in-store visits and maintaining consistent engagement in a
                competitive F&B market.
              </div>
            </div>
            <div className="col-md-5">
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "400px",
                  marginRight: "30px",
                }}
              >
                <Image
                  src="/clients/OakBerryCover.jpg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              {/* <div className="CompanyDetails oakberry">
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
              </div> */}
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
                  <div>Targeted Paid Ads</div>
                </div>
                <div className="ListBoxContent">
                  Ran performance-focused campaigns on META, TikTok, and
                  Snapchat to boost awareness and drive conversions.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>2</span>
                  <div>Optimized E-commerce</div>
                </div>
                <div className="ListBoxContent">
                  Built a user-friendly website with SEO and Google Ads to
                  capture high-intent traffic and maximize online orders.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>3</span>
                  <div>Product Promotions</div>
                </div>
                <div className="ListBoxContent">
                  Highlighted unique offerings like Acai Buckets and Popsicles
                  to sustain interest during lockdowns.
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
                        <div className="ResultsRightT1">240%</div>
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
                        <div className="ResultsRightT1">150%</div>
                        <div className="ResultsRightT2">
                          Growth on online traffic
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
                        <div className="ResultsRightT1">90+</div>
                        <div className="ResultsRightT2">
                          Locations across the Middle East
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
                        <div className="ResultsRightT2">Reduction in CPA</div>
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
