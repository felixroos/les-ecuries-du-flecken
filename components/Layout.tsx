import Head from 'next/head';
import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Menu from './Menu';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Gideon+Roman&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Gideon+Roman&family=Oxygen:wght@300;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Menu />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
