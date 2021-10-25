/* eslint-disable import/no-extraneous-dependencies */
import { put, call, takeLatest } from '@redux-saga/core/effects';
import {
  fetchSearchedMoviesFailAction,
  fetchSearchedMoviesSuccessAction,
} from './actions';
import { searchedMoviesApi } from './api';
import { actionTypes } from './reducer';

function* fetchSearchedMoviesSaga({ payload }) {
  try {
    const response = yield call(searchedMoviesApi, payload.query, payload.page);
    const { data } = response;
    yield put(fetchSearchedMoviesSuccessAction({ ...data,pageNum: payload.page   }));
  } catch (error) {
    yield put(fetchSearchedMoviesFailAction(error));
  }
}

export default function* searchedMoviesSaga() {
  yield takeLatest(actionTypes.FETCH_SEARCHED_MOVIES, fetchSearchedMoviesSaga);
}
