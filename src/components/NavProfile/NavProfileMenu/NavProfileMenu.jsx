import React from 'react';
import { Form } from 'react-bootstrap';
import { NavProfileMenuStyled } from './NavProfileMenuStyled';

const NavProfileMenu = ({ open, onSwitch }) => {

  return (
    <NavProfileMenuStyled  open={open}>
      <Form.Group className='NavProfile__Menu__Item--toggle'>
        <Form.Label htmlFor='switch-dark-mode'>Dark Mode</Form.Label>
        <Form.Check
          onChange={onSwitch}
          id='switch-dark-mode'
          size='lg'
          bsSwitchPrefix='form-switch NavProfile__Menu__Switch'
          type='switch'
        ></Form.Check>
      </Form.Group>
      <div className='NavProfile__Menu__Item'>LogOut</div>
    </NavProfileMenuStyled>
  );
};

export default NavProfileMenu;
