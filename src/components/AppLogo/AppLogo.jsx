import React from 'react';
import { LogoStyled } from './AppLogoStyled';

const AppLogo = ({ title, to = '/' }) => {
  return <LogoStyled to={to}>{title || 'Cinema App'}</LogoStyled>;
};

export default AppLogo;
