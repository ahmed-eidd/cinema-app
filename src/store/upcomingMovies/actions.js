/* eslint-disable import/prefer-default-export */
import { actionTypes } from './reducer';

export const fetchUpcomingMoviesAction = () => ({
  type: actionTypes.FETCH_UPCOMING_MOVIES,
});

export const fetchUpcomingMoviesSuccessAction = (data) => ({
  type: actionTypes.FETCH_UPCOMING_MOVIES_SUCCESS,
  payload: data,
});

export const fetchUpcomingMoviesFailAction = (errorMessage) => ({
  type: actionTypes.FETCH_UPCOMING_MOVIES_FAIL,
  payload: errorMessage,
});
