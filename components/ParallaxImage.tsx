import React from 'react';
import { Parallax } from 'react-scroll-parallax';

//  bg-scroll md:bg-fixed
{
  /* <Parallax className="overflow-hidden" y={[-50, 50]} tagOuter="figure"> */
}
export default function ParallaxImage({ src }) {
  return (
    <section
      className="p-6 bg-bottom bg-left bg-cover bg-scroll md:bg-fixed"
      style={{
        height: '400px',
        backgroundImage: `url(${src})`,
      }}
    ></section>
  );
}

// </Parallax>
