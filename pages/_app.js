
import "../styles/slick-slider/slick/slick.css";
import "../styles/slick-slider/slick/slick-theme.css";
import "@/styles/bootstrap.css";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer1 from "@/components/Footer";
import FooterBottom11 from "@/components/FooterBottom";

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
  return <>
  <Header/>
  <Component {...pageProps} />
  <Footer1/>
  <FooterBottom11/>
  </>;
}
