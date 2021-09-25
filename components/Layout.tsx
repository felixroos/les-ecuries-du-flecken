import React from 'react';
import Content from './Content';
import Footer from './Footer';
import Menu from './Menu';

export default function Layout({ children }) {
  return (
    <>
      <Menu />
      <Content>
        {children}
      </Content>
      <Footer />
    </>
  );
}
