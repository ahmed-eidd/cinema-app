import React from 'react';
import AppLogo from '../AppLogo/AppLogo';
import Footer from '../Footer/Footer';
import LoginShape from '../Icons/LoginShape';
import { LoginLayoutStyled } from './LoginLayoutStyled';

const LoginLayout = ({ children }) => {
  return (
    <LoginLayoutStyled>
      <nav className='LoginLayout__Nav'>
        <AppLogo />
      </nav>
      <div className='LoginLayout__Content'>{children}</div>
      <Footer className='LoginLayout__Footer' />
      <LoginShape className='LoginLayout__Shape' />
    </LoginLayoutStyled>
  );
};

export default LoginLayout;
