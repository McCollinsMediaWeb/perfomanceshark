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
                <Link href="/#zero">
                  <a>Search Engine Optimization</a>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">
                  <a>Search Engine Marketing</a>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">
                  <a>Meta Performance Marketing</a>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">
                  <a>Lead And Traffic Generation</a>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">
                  <a>Email Campaign Marketing</a>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">
                  <a>Meta Performance Marketing</a>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">
                  <a>Web Analytics & Optimization</a>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">
                  <a>Marketing Strategy</a>
                </Link>
              </div>
              <div className="col-md-4">
                <Link href="/#zero">
                  <a>Conversion Rate Optimization</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
