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
              Masterbaker Studio aimed to boost website traffic and sales by targeting passionate bakers with premium ingredients like flour, chocolate, butters, and creams.
              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
              They are struggling to scale their brand online & increase the sales MoM consistently
              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails master">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/master.png"
                      layout="responsive"
                      width={"284"}
                      height={"83"}
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
          To effectively display Masterbaker's extensive inventory, we utilized Dynamic Search Ads and Performance Max campaigns with Feed-only on Google Ads. Additionally, on Meta Ads, we employed Dynamic prospecting ads and catalog ads targeting lookalike and retargeting audiences.<br/>
To prevent ad fatigue, we regularly refreshed the first card creatives when frequency exceeded the standard benchmark threshold. Furthermore, implementing negative keywords and placements at the account level helped optimize spending and achieve lower cost per acquisition.
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
                        <div className="ResultsRightT1">32%</div>
                        <div className="ResultsRightT2">Increased in conversion/purchase</div>
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
                        <div className="ResultsRightT1">28%</div>
                        <div className="ResultsRightT2">Increased in ROAS</div>
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
                        <div className="ResultsRightT1">14%</div>
                        <div className="ResultsRightT2">Reduce the CPA</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7">
              <Image
                src="/m.png"
                layout="responsive"
                width={"800"}
                height={"480"}
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
