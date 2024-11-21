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
              Pioneer Corporation aimed to establish a strong digital presence and drive consistent traffic to its website while enabling distributors to easily access product information and engage with content.

              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
              Despite its reputation as a global leader in electronics, Pioneer struggled with the lack of a robust digital ecosystem that could cater to distributors across various markets and drive significant online growth.

              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails pioneer">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/clients/6.png"
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
          Website Development & Optimization<br/>
Designed and launched a user-friendly, intuitive website tailored to Pioneer's distributors, showcasing detailed product information and content designed to engage a professional audience.

            <br />
            Performance Marketing Approach

            <br />
            Executed a comprehensive Search Engine Optimization (SEO) strategy focusing on key markets within Pioneer's vast global footprint.
<br/>
Implemented on-page and off-page SEO techniques to improve keyword rankings for high-intent search terms.
<br/>
Focused on local SEO to target specific regions, ensuring relevant traffic and market-specific visibility.

<br/>
Targeted Campaigns

<br/>
Developed performance-driven digital campaigns to align with the company's goal of increasing engagement and awareness within different geographical regions.

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
                        <div className="ResultsRightT1">317.41%</div>
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
                        <div className="resultIcon Icon2">&nbsp;</div>
                      </div>
                    </div>
                    <div className="ResultsRight">
                      <div>
                        <div className="ResultsRightT1">150%</div>
                        <div className="ResultsRightT2">
                        Increase in Website Traffic

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
