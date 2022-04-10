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
        backgroundImage: `url(./img/header2.jpg.webp)`,
      }}
    >
      <h1 className="text-black text-4xl md:text-5xl text-primary">Les Écuries du Flecken</h1>
      <h2 className="text-2xl md:text-3xl text-primary">
        {de && 'Wanderreiten & Pferdepension im Elsass'}
        {fr && 'Pension et Tourisme Èquestre en Alsace'}
      </h2>
    </header>
  );
  /* </Parallax> */
}

{
  /* <header style={{ height: small ? '280px' : '600px' }} className="overflow-hidden relative">
<div className="absolute -top-32 aspect-auto h-full w-[1280] h-[933]">
  <Image src="/img/header2.jpg.webp" alt="Les Écuries du Flecken" width={1280} height={933} />
</div>
<div className="px-6 md:text-right pt-4 md:pt-8 absolute top-0 right-0">
  <h1 className="text-4xl md:text-5xl text-primary">Les Écuries du Flecken</h1>
  <h2 className="text-2xl md:text-3xl text-primary">
    {de && 'Wanderreiten & Pferdepension im Elsass'}
    {fr && 'Pension et Tourisme Èquestre en Alsace'}
  </h2>
</div>
</header> */
}
