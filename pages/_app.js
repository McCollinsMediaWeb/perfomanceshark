
import "../styles/slick-slider/slick/slick.css";
import "../styles/slick-slider/slick/slick-theme.css";
import "@/styles/bootstrap.css";
import "@/styles/globals.css";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  <Footer/>
  </>;
}
