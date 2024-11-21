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
              To digitalize DAFZA’s operations by transitioning over 350 manual services into an integrated online portal and creating a seamless digital ecosystem through a website and mobile applications for stakeholders.

              </div>
              <div className="Sec1T1">CHALLENGE</div>
              <div className="Sec1T2">
              The challenge was to replace outdated manual processes with an efficient digital solution while meeting the highest standards of quality, given DAFZA’s reputation as a government entity and its diverse stakeholder base.

              </div>
            </div>
            <div className="col-md-5">
              <div className="CompanyDetails dfc">
                <div>
                  <div className="DetBox1">
                    <Image
                      src="/clients/7.png"
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
          Requirements Gathering & User Journey Design

            <br />
            Collaborated closely with DAFZA to map out over 350 services, streamlining workflows into an intuitive user journey.
Designed a comprehensive site map ensuring seamless navigation for diverse stakeholders, from business owners to logistics teams.

            <br />
            Website & Mobile App Development
<br/>
Built state-of-the-art platforms compatible across Apple, Android, Windows, and Blackberry.
<br/>

Focused on UI/UX design for optimal usability and stakeholder satisfaction.

<br/>
Integrated automated processes for various services, including document submissions, approvals, and payment gateways.
On-Site Development

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
                        <div className="ResultsRightT1">350</div>
                        <div className="ResultsRightT2">
                        services successfully digitized, reducing manual errors and processing times by 60%.

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
                        <div className="ResultsRightT1">40%</div>
                        <div className="ResultsRightT2">
                         40% improvement in service delivery speed.

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
                        <div className="ResultsRightT1">130.71%</div>
                        <div className="ResultsRightT2">
                          Increased in Clicks
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
