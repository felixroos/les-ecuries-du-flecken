// pages/_document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ParallaxProvider } from 'react-scroll-parallax';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link
            href="https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Oxygen:wght@300;400;700&family=Playfair+Display+SC:wght@900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
