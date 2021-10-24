import { put, takeLatest, delay } from 'redux-saga/effects';
import { LoginUserSuccessAction } from './actions';
import { actionTypes } from './reducer';

function* loginUserSaga({ payload }) {
  yield delay(1500);
  yield put(LoginUserSuccessAction(payload));
}

export default function* AuthSaga () {
  yield takeLatest(actionTypes.LOGIN_USER, loginUserSaga);
}
