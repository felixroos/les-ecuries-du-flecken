import React from 'react';
import { Parallax } from 'react-scroll-parallax';

// const img = require('../img/pferdis.jpg');
//  bg-scroll md:bg-fixed
export default function Header({ small }: any) {
  return (
    <Parallax className="overflow-hidden" y={[-60, 50]} tagOuter="figure">
      <header
        className="px-6 md:text-right pt-8 md:pt-12 bg-bottom bg-left bg-cover"
        style={{
          height: small ? '280px' : '600px',
          backgroundImage: `url(./img/header2.jpg)`,
        }}
      >
        <h1 className="text-black text-4xl md:text-6xl text-primary">Les Ecuries du Flecken</h1>
        <h2 className="text-2xl md:text-4xl text-primary">Reiten & Wandern im Elsass</h2>
      </header>
    </Parallax>
  );
}
