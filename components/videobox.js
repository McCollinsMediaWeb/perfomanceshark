import Head from "next/head";
import Image from "next/image";
import Slider from "react-slick";
import useMediaQuery from "@/hooks/useMediaQuery";
export default function VideoBox() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <>
      <div className="VideoBox">
        {isDesktop && (
          <Image
            src="/pr1.jpg"
            layout="responsive"
            width={"1495"}
            height={"794"}
            priority={true}
            className="MainBanner"
          />
        )}
        {!isDesktop && (
          <Image
            src="/mpr1.jpg"
            layout="responsive"
            width={"782"}
            height={"794"}
            priority={true}
            className="MainBanner"
          />
        )}
        <div className="VideoBoxContent">
          <div>
            <div className="VidT1">Unleashing The Power Of SEO Tactics</div>
            <div className="VidT2">Play Now</div>
          </div>
        </div>
      </div>
    </>
  );
}
