import React from 'react';
import { LogoStyled } from './AppLogoStyled';

const AppLogo = ({ title }) => {
  return <LogoStyled>{title || 'Cinema App'}</LogoStyled>;
};

export default AppLogo;
