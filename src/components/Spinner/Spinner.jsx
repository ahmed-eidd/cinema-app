import React from 'react';
import SpinnerBt from 'react-bootstrap/Spinner';
import { useSelector } from 'react-redux';
import { constants } from '../../helpers/constants';
import { SpinnerStyled } from './SpinnerStyled';

const Spinner = () => {
  const theme = useSelector((state) => state.theme.currentTheme);
  console.log(theme);
  return (
    <>
      <SpinnerStyled>
        <SpinnerBt
          size='xl'
          animation='border'
          variant={theme === constants.DARK_THEME ? 'light' : 'dark'}
        />
      </SpinnerStyled>
    </>
  );
};

export default Spinner;
