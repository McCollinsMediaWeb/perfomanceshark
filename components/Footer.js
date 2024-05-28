import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
                <Link href="/#zero">Search Engine Optimization</Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">Search Engine Marketing</Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">Meta Performance Marketing</Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">Lead And Traffic Generation</Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">Email Campaign Marketing</Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">Meta Performance Marketing</Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">Web Analytics & Optimization</Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">Marketing Strategy</Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">Conversion Rate Optimization</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
