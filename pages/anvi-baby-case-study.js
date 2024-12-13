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
                Anvi Baby, an e-commerce brand specializing in sustainable baby
                products, aimed to increase organic traffic and boost sales by
                improving their online visibility. Their goal was to rank on the
                first page of Google for high-intent keywords like "organic baby
                clothes" and "eco-friendly baby products" within six months.
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                1. Low Online Presence: Despite offering high-quality products,
                Anvi Baby&apos;s website had minimal organic traffic due to low
                domain authority and a lack of keyword optimization. . <br />
                2. Competitive Market:The sustainable baby product niche is
                highly competitive, dominated by larger, more established
                brands.
                <br />
                3.Limited Content: Their blog and product descriptions lacked
                depth, reducing opportunities to rank for informational and
                transactional keywords.
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails anvibaby">
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
                  <div>Technical SEO</div>
                </div>
                <div className="ListBoxContent">
                  Improved site speed, mobile responsiveness, and fixed
                  technical issues for better crawlability.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>2</span>
                  <div>Keyword Optimization</div>
                </div>
                <div className="ListBoxContent">
                  Targeted high-intent and long-tail keywords in product
                  descriptions and metadata.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>3</span>
                  <div>Content Marketing</div>
                </div>
                <div className="ListBoxContent">
                  Published SEO-focused blog posts on parenting and eco-friendly
                  living to attract organic traffic.
                </div>
              </div>
              <div className="ListBox">
                <div className="ListBoxHd">
                  <span>4</span>
                  <div>Backlink Building</div>
                </div>
                <div className="ListBoxContent">
                  Partnered with parenting blogs, influencers, and media outlets
                  for authoritative backlinks.
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
                        <div className="ResultsRightT1">70%</div>
                        <div className="ResultsRightT2">Traffic Growth</div>
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
                        <div className="ResultsRightT1">5 Rankings</div>
                        <div className="ResultsRightT2">Keyword Rankings</div>
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
                        <div className="ResultsRightT1">65%</div>
                        <div className="ResultsRightT2">Sales Impact</div>
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
