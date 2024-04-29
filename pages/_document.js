import { Html, Head, Main, NextScript } from "next/document";
import TagManager from "react-gtm-module";

export default function Document() {
  const tagManagerArgs = {
    gtmId: "GTM-P5LRT5QZ",
  };

  TagManager.initialize(tagManagerArgs);
  return (
    <Html lang="en">
      <Head />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P5LRT5QZ"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
