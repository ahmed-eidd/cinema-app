import { actionTypes } from './reducer';

export const openModalAction = () => ({
  type: actionTypes.OPEN_TRAILER_MODAL,
});

export const closeModalAction = () => ({
  type: actionTypes.CLOSE_TRAILER_MODAL,
});

export const fetchTrailerAction = (movieId) => ({
  type: actionTypes.FETCH_TRAILER,
  payload: movieId,
});

export const fetchTrailerSuccessAction = (trailer) => ({
  type: actionTypes.FETCH_TRAILER_SUCCESS,
  payload: trailer,
});

export const fetchTrailerFailAction = (error) => ({
  type: actionTypes.FETCH_TRAILER_FAIL,
  payload: error,
});
