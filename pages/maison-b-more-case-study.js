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
                To elevate its online presence and drive sales by focusing on
                high-value products through strategic, targeted advertising.
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                Inconsistent sales and performance due to the absence of an
                effective marketing strategy.
              </div>
            </div>
            <div className="col-md-5">
              {/* <div className="CompanyDetails maison">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/maison.jpg"
                      layout="responsive"
                      width={"500"}
                      height={"69"}
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
                  src="/clients/MbmCover.jpg"
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
            <div className="ListUlLi">
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>1</span>
                  <div>Dynamic Search & Performance Max Campaigns</div>
                </div>
                <div className="ListBoxContent">
                  Launched campaigns across various ad units to drive efficient
                  conversions.
                  <br /> Segmented ads by gender categories for precise
                  targeting and tailored messaging.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>2</span>
                  <div>Ad Diversity</div>
                </div>
                <div className="ListBoxContent">
                  Employed multiple ad formats to enhance campaign engagement
                  and effectiveness.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>3</span>
                  <div>Retention & Cross-Selling</div>
                </div>
                <div className="ListBoxContent">
                  Leveraged email marketing to boost customer retention and
                  encourage cross-selling among existing users.
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
                        <div className="ResultsRightT1">105%</div>
                        <div className="ResultsRightT2">
                          Increase in overall sales
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
                        <div className="ResultsRightT1">14%</div>
                        <div className="ResultsRightT2">Conversion rates</div>
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
                        <div className="ResultsRightT1">378%</div>
                        <div className="ResultsRightT2">
                          Boost in engagement rates
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
                        <div className="ResultsRightT1">80%</div>
                        <div className="ResultsRightT2">
                          Expansion in the customer base
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <Image
                src="/t1.png"
                layout="responsive"
                width={"800"}
                height={"745"}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
