import { put, takeLatest, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { LoginUserSuccessAction } from './actions';
import { actionTypes } from './reducer';

function* loginUserSaga({ payload }) {
  yield delay(1500);
  yield put(LoginUserSuccessAction(payload));
  yield put(push('/'));
}

export default function* () {
  yield takeLatest(actionTypes.LOGIN_USER, loginUserSaga);
}
