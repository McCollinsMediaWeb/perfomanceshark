import "../styles/slick-slider/slick/slick.css";
import "../styles/slick-slider/slick/slick-theme.css";
import "@/styles/bootstrap.css";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer1 from "@/components/Footer";
import FooterBottom11 from "@/components/FooterBottom";
import Head from "next/head";
import { initializeGTM } from "@/components/gtm";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck) {
        document.getElementsByTagName("body")[0].classList.add("StickyHeader");
      } else {
        document
          .getElementsByTagName("body")[0]
          .classList.remove("StickyHeader");
      }
    });
  });
  useEffect(() => {
    initializeGTM();
  }, []);

  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="Digital Marketing Agency Dubai, Digital Performance Marketing, SEO Services, Social Media Marketing, PPC Advertising, Content Creation, Email Marketing, Web Design, Ecommerce Solutions, Local SEO, Mobile App Development"
        />

        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/public/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/public/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/public/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/public/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/public/apple-icon-114x114.png"
        />

        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/public/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/public/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/public/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/public/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/public/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/public/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/public/favicon-16x16.png"
        />
        <meta name="msapplication-TileColor" content="#403C4D" />
        <meta
          name="msapplication-TileImage"
          content="/public/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#403C4D" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0"
        />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer1 />
      <FooterBottom11 />
    </>
  );
}
