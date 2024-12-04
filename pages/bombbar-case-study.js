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
              The primary objective was to enhance the visibility of Bombbar.ae, a UAE-based nutritional supplement and health-focused brand, within search engine results pages (SERPs). This included driving targeted organic traffic, improving user engagement, and increasing online sales in a competitive niche. 

              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
              1. Niche Competition: The health and nutrition supplement market in the UAE is highly competitive, with established brands and 
marketplaces dominating SERPs. <br/>
2. Local SEO Specifics: The UAE market is diverse, with a regional audience (Dubai, Abu Dhabi etc) and a strong focus on mobile-first 
browsing, requiring optimized local content and responsiveness. <br/>
3. Limited Initial Visibility: The website had limited authority and few backlinks, making it challenging to rank for high-volume keywords. 4. Technical SEO Issues: Challenges included slow site loading times, limited on-page optimization, and missing schema for products. 
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails bombbar">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/clients/13.png"
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
                    <div>Keyword Research & On page Optimization</div>
                  </div>
                  <div className="ListBoxContent">
                  Identified high-intent keywords relevant to health supplements in the UAE 
Optimized product pages with meta descriptions, alt tags, and user-friendly headings to align with target keywords. 
                  </div>
                </div>
                <div className="ListBox">
                  <div className="ListBoxHd">
                    <span>2</span>
                    <div>Content Creation</div>
                  </div>
                  <div className="ListBoxContent">
                  Published educational and engaging blogs, Included general queries to attract a broader audience. 

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
                        <div className="ResultsRightT1">100%</div>
                        <div className="ResultsRightT2">
                        Increased Organic Traffic 

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
                        <div className="ResultsRightT1">90%</div>
                        <div className="ResultsRightT2">
                        Keyword 
Rankings 


                        </div>
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
                        <div className="ResultsRightT1">40%</div>
                        <div className="ResultsRightT2">
                        Improved Local 
Engagement 


                        </div>
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
                        <div className="ResultsRightT1">45%</div>
                        <div className="ResultsRightT2">
                        Better Technical 
Performance 


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
