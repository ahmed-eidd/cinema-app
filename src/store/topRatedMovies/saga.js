/* eslint-disable import/no-extraneous-dependencies */
import { put, call, takeLatest } from '@redux-saga/core/effects';
import { fetchTopRatedSuccessAction, fetchTopRatedFailAction } from './actions';
import { topRatedMoviesApi } from './api';
import { actionTypes } from './reducer';

function* fetchTopRatedMoviesSaga() {
  try {
    const response = yield call(topRatedMoviesApi);
    yield put(fetchTopRatedSuccessAction(response.data));
  } catch (error) {
    yield put(fetchTopRatedFailAction(error));
  }
}

export default function* topRatedMoviesSaga() {
  yield takeLatest(actionTypes.FETCH_TOPRATED_MOVIES, fetchTopRatedMoviesSaga);
}
