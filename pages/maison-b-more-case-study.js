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
                Maison Bmore aimed to elevate its online presence and drive
                sales through targeted advertising, focusing on high-value
                products
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                Inconsistent results and sales due to a lack of effective
                marketing strategy.
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails maison">
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Section2 pd-common pb-0">
        <div className="container">
          <div className="Sec1T4">Strategy & Implementation</div>
          <div className="Sec1T5 mrgB25">
            Utilized Dynamic Search Ads and performance max campaigns across
            various ad units for efficient conversions.
            <br />
            Strategy & Implementation Utilized Dynamic Search Ads and
            performance max campaigns across various ad units for efficient
            conversions. Segmented ads by gender categories and employed diverse
            ad types for optimized campaign efficiency. Leveraged email
            marketing for strong retention and cross-selling to existing users.
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
                        <div className="ResultsRightT2">Maison Bmore’s sales increased</div>
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
                        <div className="ResultsRightT1">14%</div>
                        <div className="ResultsRightT2">Conversion rates, with a 3.25 ROAS</div>
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
                        <div className="ResultsRightT1">378%</div>
                        <div className="ResultsRightT2">Notable lift in engagement rates</div>
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
                        <div className="ResultsRightT1">80%</div>
                        <div className="ResultsRightT2">An expansion in its customer base</div>
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
