import React from 'react';
import 'tailwindcss/tailwind.css';
import '../style.css';
import { DefaultSeo } from 'next-seo';
import { useLocales } from './api/useLocales';

function MyApp({ Component, pageProps }) {
  const [fr, de] = useLocales();
  return (
    <>
      <DefaultSeo
        titleTemplate="Les Ecuries du Flecken"
        description={fr ? 'Randonner à cheval en Alsace' : 'Wanderreiten im Elsass'}
        openGraph={{
          title: 'Les Ecuries du Flecken',
          description: fr ? 'Randonner à cheval en Alsace.' : 'Wanderreiten im Elsass.',
          images: [
            {
              url: './img/header2.jpg.webp',
              width: 1296,
              height: 862,
              alt: 'Les Ecuries du Flecken',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
