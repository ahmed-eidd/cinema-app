import { fork } from 'redux-saga/effects';
import authSaga from '../store/auth/saga';

export default function* rootSaga() {
 yield fork(authSaga);
}
