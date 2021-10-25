/* eslint-disable import/prefer-default-export */
import { actionTypes } from './reducer';

export const fetchTopRatedAction = () => ({
  type: actionTypes.FETCH_TOPRATED_MOVIES,
});

export const fetchTopRatedSuccessAction = (data) => ({
  type: actionTypes.FETCH_TOPRATED_MOVIES_SUCCESS,
  payload: data,
});

export const fetchTopRatedFailAction = (errorMessage) => ({
  type: actionTypes.FETCH_TOPRATED_MOVIES_FAIL,
  payload: errorMessage,
});
