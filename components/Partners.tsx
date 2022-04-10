import React from 'react';
import Img from './Img';

import logoCRTEgrandest from '../public/img/partners/logoCRTEgrandest.png.webp';
import logotourismeequestre from '../public/img/partners/logotourismeequestre.jpg.webp';

const partners = [
  /* {
    name: 'Visit Alsace',
    logo: 'https://www.entela.fr/wp-content/uploads/Logo-alsace.png',
    url: 'https://www.crtegrandest.fr/',
  }, */
  {
    name: 'CRTE Grand-Est',
    logo: logoCRTEgrandest.src,
    url: 'https://www.crtegrandest.fr/',
  },
  {
    name: 'Tourisme Equestre Bas-Rhin',
    logo: logotourismeequestre.src,
    url: 'https://alsaceacheval.com/',
  },
];

export default function Partners() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2">
          {partners.map((partner, i) => (
            <div key={i} className="col-span-1 place-items-center grid max-h-24 overflow-hidden">
              <a href={partner.url} target="_blank" rel="noopener noreferrer">
                <Img className="max-h-24 max-w-24" src={partner.logo} alt={partner.name} layout="responsive" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
