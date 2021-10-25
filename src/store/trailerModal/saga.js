import { call, put, takeLatest } from '@redux-saga/core/effects';
import { fetchTrailerFailAction, fetchTrailerSuccessAction } from './actions';
import { trailerApi } from './api';
import { actionTypes } from './reducer';

function* fetchTrailerSaga({ payload }) {
  try {
    const response = yield call(trailerApi, payload);
    const { data } = response;

    yield put(fetchTrailerSuccessAction(data.results[0]));
  } catch (error) {
    yield put(fetchTrailerFailAction(error));
  }
}

export default function* trailerModalSaga() {
  yield takeLatest(actionTypes.FETCH_TRAILER, fetchTrailerSaga);
}
