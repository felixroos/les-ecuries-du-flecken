import React from 'react';
import { Parallax } from 'react-parallax';
import Heading from './Heading';

const Service = ({ heading, children }) => (
  <div className="p-6 md:p-12">
    <Heading>{heading}</Heading>
    <div className="text-lg">{children}</div>
  </div>
);

const ServiceImage = ({ src, alt }) => {
  return <img src={src} alt={alt} />;
  /* return (
    <div className="h-96 w-full overflow-hidden relative">
      <img src={src} alt={alt} />
    </div>
  ); */
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
        <button className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-secondary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Jetzt anfragen
        </button>
      </Service>
      <ServiceImage alt="" src="./img/wanderreiten.png" />
      <ServiceImage alt="" src="./img/box.JPG" />
      <Service heading="Pension">
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
        <button className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-secondary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Jetzt anfragen
        </button>
      </Service>
      <Service heading="Urlaub machen">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <button className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-secondary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Jetzt anfragen
        </button>
      </Service>
      <ServiceImage alt="" src="./img/4fdbbc43-ba55-4ff6-bee2-81a168db1186.JPG" />
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
