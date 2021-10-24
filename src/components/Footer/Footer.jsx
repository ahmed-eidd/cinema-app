import React from 'react';
import { FooterStyled } from './FooterStyled';

const Footer = ({ className }) => (
  <FooterStyled className={className}>
    <div className="Footer__Icons">
      <i className="fab fa-facebook-f" />
      <i className="fab fa-twitter" />
      <i className="fab fa-instagram" />
    </div>
    <p>2021 Cinema App . All Right Resrved</p>
  </FooterStyled>
);

export default Footer;
