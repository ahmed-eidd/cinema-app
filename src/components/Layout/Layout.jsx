import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import { LayoutStyled } from './LayoutStyled';

const Layout = ({ children }) => {
  return (
    <LayoutStyled>
      <Nav />
      {children}
      <Footer />
    </LayoutStyled>
  );
};

export default Layout;
