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
                The Goal of the client is to increase brand awareness from Ajman
                to all UAE and increase sales and market share after we launch
                it&apos;s e-commerce website and app
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
                Cleaning Superstore faced stiff competition and struggled to
                boost sales in Dubai&apos;s crowded cleaning products market.
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails css">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/css.png"
                      layout="responsive"
                      width={"290"}
                      height={"295"}
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
            Set up targeted Facebook ad campaigns with specific objectives to
            narrow down relevant demographics, interests, and behaviors.
            <br />
            Created multiple ad sets targeting different audience segments and
            testing various ad creatives.
            <br />
            Allocated budget strategically to ensure optimal reach and
            frequency.
            <br />
            Regularly monitored ad performance metrics like CTR, conversion
            rate, and ROAS.
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
                        <div className="ResultsRightT2">Increase in sales</div>
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
                        <div className="ResultsRightT1">68%</div>
                        <div className="ResultsRightT2">Increased in order</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <Image
                src="/css1.png"
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
