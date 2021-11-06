import Head from 'next/head';
import Map from '../components/Map';
import Layout from '../components/Layout';
import React from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Content from '../components/Content';
import ParallaxImage from '../components/ParallaxImage';
import Heading from '../components/Heading';
import Contact from '../components/Contact';
import History from '../components/History';
import Partners from '../components/Partners';
import MediaLeft from '../components/MediaLeft';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Anchor from '../components/Anchor';
import Pension from '../components/Pension';

const Spacer = () => <div className="py-4 md:py-6"></div>;
const Divider = () => <div className={`border-b-2 border-gray-100 py-2 md:py-6`} />;
const Centered = ({ children }) => <div className="flex flex-col md:items-center">{children}</div>;
const Slim = ({ children }) => <div className="max-w-lg">{children}</div>;

export default function Home() {
  return (
    <Layout>
      <Header />
      {/* <Header small /> */}
      <Content>
        <Spacer />
        <Centered>
          <Heading>Pension</Heading>
          <Pension />
        </Centered>
      </Content>
    </Layout>
  );
}
