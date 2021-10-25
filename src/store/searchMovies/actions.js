/* eslint-disable import/prefer-default-export */
import { actionTypes } from './reducer';

export const fetchSearchedMoviesAction = (query,page) => ({
  type: actionTypes.FETCH_SEARCHED_MOVIES,
  payload: {
    query,
    page,
  }
});

export const fetchSearchedMoviesSuccessAction = (data,page) => ({
  type: actionTypes.FETCH_SEARCHED_MOVIES_SUCCESS,
  payload: {...data,page},
});

export const fetchSearchedMoviesFailAction = (errorMessage) => ({
  type: actionTypes.FETCH_SEARCHED_MOVIES_FAIL,
  payload: errorMessage,
});
