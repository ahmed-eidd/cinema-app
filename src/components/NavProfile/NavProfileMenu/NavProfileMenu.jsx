import React from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { LogOutUserAction } from '../../../store/auth/actions';
import { NavProfileMenuStyled } from './NavProfileMenuStyled';

const NavProfileMenu = ({ open, onSwitch,onClose }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(LogOutUserAction());
    onClose()
  };
  return (
    <NavProfileMenuStyled open={open}>
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
      <div className='NavProfile__Menu__Item' onClick={logoutHandler}>
        LogOut
      </div>
    </NavProfileMenuStyled>
  );
};

export default NavProfileMenu;
