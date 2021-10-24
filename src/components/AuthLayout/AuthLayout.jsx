import React from 'react';
import AppLogo from '../AppLogo/AppLogo';
import Footer from '../Footer/Footer';
import LoginShape from '../Icons/LoginShape';
import { AuthLayoutStyled } from './AuthLayoutStyled';

const AuthLayout = ({ children }) => {
  return (
    <AuthLayoutStyled>
      <nav className='AuthLayout__Nav'>
        <AppLogo />
      </nav>
      <div className='AuthLayout__Content'>{children}</div>
      <Footer className='AuthLayout__Footer' />
      <LoginShape className='AuthLayout__Shape' />
    </AuthLayoutStyled>
  );
};

export default AuthLayout;
