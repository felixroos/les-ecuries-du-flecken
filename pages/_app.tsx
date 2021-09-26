import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'tailwindcss/tailwind.css';
import '../style.css';

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider>
      <Component {...pageProps} />
    </ParallaxProvider>
  );
}

export default MyApp;
