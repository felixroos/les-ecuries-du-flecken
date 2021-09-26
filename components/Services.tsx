import React from 'react';
import { Parallax } from 'react-scroll-parallax';
import Heading from './Heading';
import Anchor from './Anchor';

const Service = ({ heading, children, className, id }: any) => (
  <>
    <div className={`py-8 md:p-6 ${className || ''}`}>
      <Anchor id={id} />
      <Heading>{heading}</Heading>
      <div className="text-lg">{children}</div>
    </div>
  </>
);

const ServiceImage = ({ src, alt, className }: any) => {
  /* <Parallax className="overflow-hidden" y={[-16, 16]} tagOuter="figure"> */
  return <img src={src} alt={alt} className={`${className || ''}`} />;
  /* </Parallax> */
};

export default function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-2 items-center">
      <Service heading="Wanderreiten" className="row-start-2 md:row-start-1" id="wanderreiten">
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

      <ServiceImage alt="" src="./img/box.jpg" />
      <Service heading="Pension" id="pension">
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
      <Service heading="Urlaub machen" id="urlaub">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <button className="mt-6 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-black bg-secondary hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Jetzt anfragen
        </button>
      </Service>
      <ServiceImage alt="" src="./img/urlaub.jpg" className="row-start-5 md:row-start-3 md:col-start-2" />
    </div>
  );
}
