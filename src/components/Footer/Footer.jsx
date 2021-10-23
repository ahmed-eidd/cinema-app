import React from 'react';
import { FooterStyled } from './FooterStyled';

const Footer = ({ className }) => {
  return (
    <FooterStyled className={className}>
      <div className='Footer__Icons'>
        <i className='fab fa-facebook-f'></i>
        <i className='fab fa-twitter'></i>
        <i className='fab fa-instagram'></i>
      </div>
      <p>2021 Cinema App . All Right Resrved</p>
    </FooterStyled>
  );
};

export default Footer;
