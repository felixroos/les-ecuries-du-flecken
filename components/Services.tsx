import React from 'react';
import { Parallax } from 'react-parallax';

const Service = ({ heading, children }) => (
  <div className="py-12 px-12">
    <h1 className="text-4xl mb-4">{heading}</h1>
    <div className="text-lg">{children}</div>
  </div>
);

const ServiceImage = ({ src, alt }) => {
  return (
    <div className="h-96 w-full overflow-hidden relative">
      <img src={src} alt={alt} />
    </div>
  );
  /* return (
    <div style={{ height: '100%' }}>
      <Parallax
        bgImage={src}
        bgImageAlt={alt}
        bgStyle={{ backgroundPosition: 'bottom' }}
        strength={100}
        style={{ height: '100%' }}
      ></Parallax>
    </div>
  ); */
};

export default function Services() {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-0 items-center">
      <Service heading="Wanderreiten">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </Service>
      <ServiceImage alt="" src="./img/wanderreiten.png" />
      <ServiceImage
        alt=""
        src="./img/box.JPG"
      />
      <Service heading="Pferde Pension">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <ul className="list-inside">
          <li>classique</li>
          <li>chevaux retraites</li>
          <li>poulains / jeunes chevaux</li>
          <li>poulinage</li>
        </ul>
      </Service>
      {/* <Service heading="Hallo">
        <p>Das ist die Halle</p>
      </Service>
      <ServiceImage src="./img/72388f66-2e40-42f0-b9d9-78cf8a75c89b.JPG" alt="Halle" />
      <ServiceImage src="./img/dbb0ba6f-4a54-4365-93c2-f9871cfb5eac.JPG" alt="Gang" />
      <Service heading="Hallo">
        <p>Das ist die Gang</p>
      </Service> */}
    </div>
  );
}
