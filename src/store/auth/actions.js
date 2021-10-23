import { actionTypes } from './reducer';

export const LoginUserAction = (userData) => ({
  type: actionTypes.LOGIN_USER,
  payload: userData,
});

export const LoginUserSuccessAction = (userData) => ({
  type: actionTypes.LOGIN_USER_SUCCESS,
  payload: userData,
});

export const LoginUserFailAction = () => ({
  type: actionTypes.LOGIN_USER_FAIL,
});

export const LogOutUserAction = () => ({
  type: actionTypes.LOGOUT_USER,
});
