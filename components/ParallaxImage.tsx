import React from 'react';
import { Parallax } from 'react-scroll-parallax';

//  bg-scroll md:bg-fixed
export default function ParallaxImage({ src }) {
  return (
    <Parallax className="overflow-hidden" y={[-50, 50]} tagOuter="figure">
      <section
        className="p-6 bg-bottom bg-left bg-cover"
        style={{
          height: '400px',
          backgroundImage: `url(${src})`,
        }}
      ></section>
    </Parallax>
  );
}
