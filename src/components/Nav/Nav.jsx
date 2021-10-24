import React from 'react';
import AppLogo from '../AppLogo/AppLogo';
import NavProfile from '../NavProfile/NavProfile';
import SearchBar from '../SearchBar/SearchBar';
import { NavStyled } from './NavStyled';

const Nav = () => (
  <NavStyled>
    <AppLogo to="/" />
    <SearchBar />
    <NavProfile name="Ahmed Eid" />
  </NavStyled>
);

export default Nav;
