import React from 'react';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import TrailerModal from '../TrailerModal/TrailerModal';
import { LayoutStyled } from './LayoutStyled';

const Layout = ({ children }) => (
  <LayoutStyled>
    <Nav />
    <TrailerModal />
    {children}
    <Footer />
  </LayoutStyled>
);

export default Layout;
