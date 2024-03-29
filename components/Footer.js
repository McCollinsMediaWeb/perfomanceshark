import Head from "next/head";
import Image from "next/image";

export default function Footer1() {
  return (
    <>
      <div className="Footer pd-common">
        <div className="container">
          <div className="FooterHeader">
            <div className="row">
              <div className="col-md-4">
                <div className="Ft1">SOLUTIONS</div>
              </div>
              <div className="col-md-6">
                <div className="Ft2">
                  We makes it easy to create content that engages your audience
                  by
                  <br />
                  taking the guesswork out of research, strategy, and writing.
                </div>
              </div>
            </div>
          </div>
          <div className="FooterQuickLinks">
            <div className="row">
              <div className="col-md-4">
                <a href="#zero">Search Engine Optimization</a>
              </div>
              <div className="col-md-4">
                <a href="#zero">Search Engine Marketing</a>
              </div>
              <div className="col-md-4">
                <a href="#zero">Meta Performance Marketing</a>
              </div>
              <div className="col-md-4">
                <a href="#zero">Lead And Traffic Generation</a>
              </div>
              <div className="col-md-4">
                <a href="#zero">Email Campaign Marketing</a>
              </div>
              <div className="col-md-4">
                <a href="#zero">Meta Performance Marketing</a>
              </div>
              <div className="col-md-4">
                <a href="#zero">Web Analytics & Optimization</a>
              </div>
              <div className="col-md-4">
                <a href="#zero">Marketing Strategy</a>
              </div>
              <div className="col-md-4">
                <a href="#zero">Conversion Rate Optimization</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
