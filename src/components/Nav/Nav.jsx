import React from 'react';
import AppLogo from '../AppLogo/AppLogo';
import NavProfile from '../NavProfile/NavProfile';
import SearchBar from '../SearchBar/SearchBar';
import { NavStyled } from './NavStyled';

const Nav = () => {
  return (
    <NavStyled>
      <AppLogo />
      <SearchBar />
      <NavProfile name='Ahmed Eid' />
    </NavStyled>
  );
};

export default Nav;
