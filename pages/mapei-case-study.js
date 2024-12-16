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
                To improve organic visibility and drive targeted traffic to
                Mapei.ae by positioning the brand as an authority in the UAE
                construction and building materials sector.
              </div>
              {/* Check */}
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                1. Niche Competition: The health and nutrition supplement market
                in the UAE is highly competitive, with established brands and
                marketplaces dominating SERPs. <br />
                2. Local SEO Specifics: The UAE market is diverse, with a
                regional audience (Dubai, Abu Dhabi etc) and a strong focus on
                mobile-first browsing, requiring optimized local content and
                responsiveness. <br />
                3. Limited Initial Visibility: The website had limited authority
                and few backlinks, making it challenging to rank for high-volume
                keywords. <br />
                4. Technical SEO Issues: Challenges included slow site loading
                times, limited on-page optimization, and missing schema for
                products.
              </div>
            </div>
            <div className="col-md-5">
              {/* <div className="CompanyDetails mapei">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/mapei.png"
                      layout="responsive"
                      width={"304"}
                      height={"70"}
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
                  src="/clients/MapeiCover.jpg"
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
                  <div>Keyword Optimization</div>
                </div>
                <div className="ListBoxContent">
                  Targeted high-value, localized keywords like &quot;tile
                  adhesives UAE&quot; and &quot;waterproofing solutions
                  Dubai&quot;.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>2</span>
                  <div>On-Page SEO</div>
                </div>
                <div className="ListBoxContent">
                  Enhanced meta tags, product descriptions, and internal linking
                  to boost relevance.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>3</span>
                  <div>Content Marketing</div>
                </div>
                <div className="ListBoxContent">
                  Published blogs, case studies, and a downloadable guide to
                  establish authority.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>4</span>
                  <div>Local SEO</div>
                </div>
                <div className="ListBoxContent">
                  Improved Google Business Profile and built citations for
                  better local visibility.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>5</span>
                  <div>Link Building</div>
                </div>
                <div className="ListBoxContent">
                  Secured backlinks from UAE-based industry directories and
                  publications.
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
                        <div className="ResultsRightT1">72%</div>
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
                        <div className="resultIcon Icon1">&nbsp;</div>
                      </div>
                    </div>
                    <div className="ResultsRight">
                      <div>
                        <div className="ResultsRightT1">Top 3</div>
                        <div className="ResultsRightT2">
                          Improved Keyword Rankings
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
                        <div className="ResultsRightT2">Lead Generation</div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="ResultBox">
                  <div className="Results">
                    <div className="ResultsLeft">
                      <div className="ReBoxWr">
                        <div className="resultIcon Icon1">&nbsp;</div>
                      </div>
                    </div>
                    <div className="ResultsRight">
                      <div>
                        <div className="ResultsRightT1">43.45%</div>
                        <div className="ResultsRightT2">Reduce the CPA</div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="col-md-7">
              <Image
                src="/m1.png"
                layout="responsive"
                width={"800"}
                height={"509"}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
