import React, { useState, useRef } from 'react';
import { Image } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import NavProfileMenu from './NavProfileMenu/NavProfileMenu';
import { NavProfileStyled } from './NavProfileStyled';
import { switchThemeAction } from '../../store/theme/actions';
import useOutSideClick from '../../hooks/useOutsideClick';

const NavProfile = ({ name, img }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const test = useRef(null);
  const MenuRef = useOutSideClick(() => {
    setMenuOpen(false);
  });
  return (
    <NavProfileStyled ref={MenuRef} menuOpen={menuOpen}>
      {img ? (
        <Image />
      ) : (
        <div
          onClick={() => test.current.onclick()}
          className='NavProfile__Initial'
        >
          {name.split('')[0]}
        </div>
      )}
      <p className='NavProfile__Name'>{name}</p>
      <i
        ref={test}
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
