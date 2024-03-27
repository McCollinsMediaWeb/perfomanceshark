import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";

export default function WhatWeDo() {
  return (
    <>
      <div className="WhatWedo pd-common bg4">
        <div className="container">
          <div className="WhatWedoHeader">
            <div className="row">
              <div className="col-md-9">
                <div className="T1">WHAT WE DO</div>
                <div className="T2">
                  Latest Way To Get Web Solutions & Business Growth
                </div>
                <div className="T3">
                  Together, we help our clients achieve tangible, measurable
                  results. Focused on business outcomes we bring a unique set of
                  expertise and skills to the party.
                </div>
              </div>
              <div className="col-md-3">
                <div className="RLogoBox">
                <Image
                    src="/p2.png"
                    layout="responsive"
                    width={"279"}
                    height={"284"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="WhatWeDoContent">
            <div className="row">
                <div className="col-md-7">
                        <div className="ServiceBoxes">
                            <div className="Service">
                                <div className="ServiceFlex">
                                    <div className="ServiceLeft">
                                        <div className="ServiceIconBox">
                                            <div className="serviceleftIcon gtag">&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="ServiceRight">
                                        <div>
                                            <div className="serviceName">Google Ads</div>
                                            <div className="servicedesc">Get a team of certified Google Adwords / SEM specialists who have a minimum of 2 years experience managing various SEM campaigns locally. We help you create the perfect combination of strategy and implementation to ensure we achieve your goals.</div>
                                            <div className="serviceLinkIcon">&nbsp;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Service">
                                <div className="ServiceFlex">
                                    <div className="ServiceLeft">
                                        <div className="ServiceIconBox">
                                            <div className="serviceleftIcon two">&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="ServiceRight">
                                        <div>
                                            <div className="serviceName">Search Engine Optimization</div>
                                            <div className="servicedesc">Struggling to find PPC experts who really understand your business and can actually drive long term results? Our world-class marketers would love to help your business thrive!</div>
                                            <div className="serviceLinkIcon">&nbsp;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Service">
                                <div className="ServiceFlex">
                                    <div className="ServiceLeft">
                                        <div className="ServiceIconBox">
                                            <div className="serviceleftIcon three">&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="ServiceRight">
                                        <div>
                                            <div className="serviceName">Website Development</div>
                                            <div className="servicedesc">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam eaque quae abillo inventore veritatisey et quasi architecto</div>
                                            <div className="serviceLinkIcon">&nbsp;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Service">
                                <div className="ServiceFlex">
                                    <div className="ServiceLeft">
                                        <div className="ServiceIconBox">
                                            <div className="serviceleftIcon four">&nbsp;</div>
                                        </div>
                                    </div>
                                    <div className="ServiceRight">
                                        <div>
                                            <div className="serviceName">AI Development</div>
                                            <div className="servicedesc">Get a team of certified Google Adwords / SEM specialists who have a minimum of 2 years experience managing various SEM campaigns locally. We help you create the perfect combination of strategy and implementation to ensure we achieve your goals.</div>
                                            <div className="serviceLinkIcon">&nbsp;</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                <div className="col-md-5">
                <Image
                    src="/web.jpg"
                    layout="responsive"
                    width={"635"}
                    height={"1049"}
                    priority={true}
                    className="MainBanner"
                  />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
