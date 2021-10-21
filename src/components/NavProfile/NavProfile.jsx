import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import NavProfileMenu from './NavProfileMenu/NavProfileMenu';
import { NavProfileStyled } from './NavProfileStyled';
import { switchThemeAction } from '../../store/theme/actions';
import useOutSideClick from '../../hooks/useOutsideClick';

const NavProfile = ({ name, img }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const MenuRef = useOutSideClick(() => {
    setMenuOpen(false);
  });
  return (
    <NavProfileStyled ref={MenuRef} menuOpen={menuOpen}>
      {img ? (
        <Image />
      ) : (
        <div className='NavProfile__Initial'>{name.split('')[0]}</div>
      )}
      <p className='NavProfile__Name'>{name}</p>
      <i
        onClick={() => setMenuOpen(!menuOpen)}
        className='fas fa-chevron-down NavProfile__Icon'
      ></i>

      <NavProfileMenu
        open={menuOpen}
        onSwitch={() => {
          dispatch(switchThemeAction());
        }}
        onClose={() => setMenuOpen(false)}
      />
    </NavProfileStyled>
  );
};

export default NavProfile;
