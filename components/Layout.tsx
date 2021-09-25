import Head from 'next/head';
import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Menu from './Menu';
import Wrapper from './Wrapper';

export default function Layout({ children }) {
  return (
    <div className="bg-primary">
      <Menu />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </div>
  );
}
