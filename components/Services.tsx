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
    <div style={{ height: '100%' }}>
      <Parallax
        bgImage={src}
        bgImageAlt={alt}
        bgStyle={{ backgroundPosition: 'bottom' }}
        strength={100}
        style={{ height: '100%' }}
      ></Parallax>
    </div>
  );
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
      <ServiceImage
        alt=""
        src="https://images.unsplash.com/photo-1594056009100-f25d3241e92f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80"
      />
      <ServiceImage
        alt=""
        src="https://images.unsplash.com/photo-1541600593739-1d4c5177aae2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2370&q=80"
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
    </div>
  );
}
