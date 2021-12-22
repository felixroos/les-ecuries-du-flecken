import React from 'react';
import { useLocales } from '../pages/api/useLocales';

// const img = require('../img/pferdis.jpg');
//  bg-scroll md:bg-fixed
export default function Header({ small }: any) {
  {
    /* <Parallax className="overflow-hidden" y={[-50, 50]} tagOuter="figure"> */
  }
  const [fr, de] = useLocales();
  return (
    <header
      className="px-6 md:text-right pt-4 md:pt-8 bg-bottom bg-left bg-cover bg-scroll xl:bg-fixed"
      style={{
        height: small ? '280px' : '600px',
        backgroundImage: `url(./img/header2.jpg)`,
      }}
    >
      <h1 className="text-black text-4xl md:text-5xl text-primary">Les Ecuries du Flecken</h1>
      <h2 className="text-2xl md:text-3xl text-primary">
        {de && 'Wanderreiten im Elsass'}
        {fr && 'Pension et Tourisme Èquestre en Alsace'}
      </h2>
    </header>
  );
  /* </Parallax> */
}
