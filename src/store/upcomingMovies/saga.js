/* eslint-disable import/no-extraneous-dependencies */
import { put, call, takeLatest } from '@redux-saga/core/effects';
import {
  fetchUpcomingMoviesFailAction,
  fetchUpcomingMoviesSuccessAction,
} from './actions';
import { upcomingMoviesApi } from './api';
import { actionTypes } from './reducer';

function* fetchUpcomingMoviesSaga() {
  try {
    const response = yield call(upcomingMoviesApi);
    yield put(fetchUpcomingMoviesSuccessAction(response.data));
  } catch (error) {
    yield put(fetchUpcomingMoviesFailAction(error));
  }
}

export default function* upcomingMoviesSaga() {
  yield takeLatest(actionTypes.FETCH_UPCOMING_MOVIES, fetchUpcomingMoviesSaga);
}
