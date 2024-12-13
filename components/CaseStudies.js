import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import Link from "next/link";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function CaseStudies() {
  useEffect(() => {
    AOS.init();
  }, []);

  const caseStudies = [
    {
      href: "/toshiba-case-study",
      imageSrc: "/clients/ToshibaCover.jpg",
      header: "TOSHIBA",
      stats: "+230%",
      subStats: "Growth in engagement",
      tags: [
        "Performance Marketing",
        "Localized Content Development",
        "Collaborative Engagement",
      ],
    },
    {
      href: "/pioneer-case-study",
      imageSrc: "/clients/pioneerCover.jpg",
      header: "PIONEER",
      stats: "+150%",
      subStats: "Growth in Website traffic",
      tags: [
        "Website Development",
        "Search Engine Optimization",
        "Performance-Driven Campaigns",
      ],
    },
    {
      href: "/bombbar-case-study",
      imageSrc: "/clients/bombBarCover.jpg",
      header: "Bombbar",
      stats: "+10%",
      subStats: "Increased Organic Traffic",
      tags: [
        "Keyword Research & On page Optimization",
        "Content Creation",
        "Technical SEO Fixes",
        "Link Building & Outreach",
      ],
    },
    {
      href: "/dfc-case-study",
      imageSrc: "/clients/DafCover.jpg",
      header: "DUBAI FREE ZONE",
      stats: "+78%",
      subStats: "Effective Strategy Increased",
      tags: ["Organic Social Media", "Paid Social"],
    },
    {
      href: "/oakberry-case-study",
      imageSrc: "/clients/OakBerryCover.jpg",
      header: "OAKBERRY",
      stats: "+240%",
      subStats: "Increase in Conversions",
      tags: ["Targeted Paid Ads", "Optimized E-Commerce", "Product Promotions"],
    },
    {
      href: "/mapei-case-study",
      imageSrc: "/clients/MapeiCover.jpg",
      header: "MAPEI",
      stats: "+72%",
      subStats: "Increased Organic Traffic",
      tags: [
        "Keyword Optimization",
        "On Page SEO",
        "Content Marketing",
        "Local SEO",
        "Link Building",
      ],
    },
    {
      href: "/heveya-case-study",
      imageSrc: "/clients/Heveya.jpg",
      header: "Heveya",
      stats: "+108%",
      subStats: "Growth in AOV",
      tags: [
        "Targeted Search Campaigns",
        "Performance Max Campaigns",
        "Data Driven approch",
      ],
    },
    {
      href: "/maison-b-more-case-study",
      imageSrc: "/clients/MbmCover.jpg",
      header: "MAISON-B-MORE",
      stats: "+105%",
      subStats: "Increase in Overall Sales",
      tags: [
        "Dynamic Search & Performance Campaign",
        "Ad Diversity",
        "Retention & Cross-Selling",
      ],
    },
    {
      href: "/master-baker-case-study",
      imageSrc: "/clients/MasterBakerCover.jpg",
      header: "Master Baker Studio",
      stats: "+38%",
      subStats: "Increased in purchase",
      tags: ["Organic Social Media", "Paid Social"],
    },
    {
      href: "/mob-case-study",
      imageSrc: "/clients/MobCover.jpg",
      header: "MODERN OMAN BAKERY",
      stats: "+222.37%",
      subStats: "Increased in click",
      tags: ["Paid SEO", "Paid Social", "Paid Search"],
    },
    {
      href: "/richemont-case-study",
      imageSrc: "/clients/RicheMontCover.jpg",
      header: "Richemont Master Baker",
      stats: "+56%",
      subStats: "Increased in click",
      tags: ["Organic Social Media", "Paid Social"],
    },
    {
      href: "/mint-case-study",
      imageSrc: "/clients/MintCover.jpg",
      header: "Mint Event Rentals",
      stats: "+496%",
      subStats: "Increase in conversion",
      tags: ["Organic Social Media"],
    },
    {
      href: "/prowork-case-study",
      imageSrc: "/clients/ProworkCover.jpg",
      header: "Prowork",
      stats: "+317.41%",
      subStats: "Increase in conversion",
      tags: ["Google Ads Optimization", "Meta Ad Campaigns"],
    },
    {
      href: "/css-case-study",
      imageSrc: "/clients/CleaningStoreCover.jpg",
      header: "Cleaning Superstore",
      stats: "+60%",
      subStats: "Increase in sales",
      tags: ["Dynamic Search Ads", "Campaigns"],
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          centerMode: true,
        },
      },
    ],
  };
  return (
    <>
      <div className="CaseStudiesWrap pd-common bg3">
        <div className="container">
          <div className="CaseStudiesHeader">
            <div className="row">
              <div className="col-md-7">
                <div
                  className="CsT1"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  Case Studies
                </div>
                <div
                  className="CsT2"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  Our Work Drives Businesses Forward
                </div>
              </div>
              <div className="col-md-5">
                <div
                  className="CsT3"
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  Explore how our strategies and expertise have propelled
                  businesses forward, achieving measurable results and tangible
                  success stories
                </div>
              </div>
            </div>
          </div>
          <div
            className="BrndBoxes slider1"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <Slider {...settings}>
              {caseStudies.map((study, index) => (
                <div key={index}>
                  <Link href={study.href}>
                    <div className="CaseStudyItem">
                      <div className="CaseStudyItemImage">
                        <Image
                          src={study.imageSrc}
                          layout="responsive"
                          width={394}
                          height={446}
                          priority
                          className="MainBanner"
                        />
                      </div>
                      <div className="CaseStudyItemHeader">{study.header}</div>
                      <div className="CaseStudyItemFooter">
                        <div className="CsTt1">{study.stats}</div>
                        <div className="CsTt2">{study.subStats}</div>
                        <div className="TagBox">
                          {study.tags.map((tag, i) => (
                            <div key={i} className="TagBoxItem">
                              {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div>
              <Link href={"/fujifilm-case-study"}>
                <div className="CaseStudyItem">
                    <div className="CaseStudyItemImage">
                    <Image
                    src="/c23.jpg"
                    layout="responsive"
                    width={"394"}
                    height={"446"}
                    priority={true}
                    className="MainBanner"
                  />
                    </div>
                    <div className="CaseStudyItemHeader">FUJIFILM</div>
                    <div className="CaseStudyItemFooter">
                        <div className="CsTt1">+89%</div>
                        <div className="CsTt2">Effective Strategy Increased</div>
                        <div className="TagBox">
                            <div className="TagBoxItem">Organic Social Media</div>
                            <div className="TagBoxItem">Paid Social</div>
                        </div>
                    </div>
                </div>
                </Link>
              </div>
              <div>
              <Link href={"/costa-case-study"}>
                <div className="CaseStudyItem">
                    <div className="CaseStudyItemImage">
                    <Image
                    src="/c24.jpg"
                    layout="responsive"
                    width={"394"}
                    height={"446"}
                    priority={true}
                    className="MainBanner"
                  />
                    </div>
                    <div className="CaseStudyItemHeader">COSTA</div>
                    <div className="CaseStudyItemFooter">
                        <div className="CsTt1">+73%</div>
                        <div className="CsTt2">Effective Strategy Increased</div>
                        <div className="TagBox">
                            <div className="TagBoxItem">Organic Social Media</div>
                            <div className="TagBoxItem">Paid Social</div>
                        </div>
                    </div>
                </div>
                </Link>
              </div> */
}
