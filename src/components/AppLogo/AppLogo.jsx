import React from 'react';
import { LogoStyled } from './AppLogoStyled';

const AppLogo = ({ title, to = '/' }) => <LogoStyled to={to}>{title || 'Cinema App'}</LogoStyled>;

export default AppLogo;
