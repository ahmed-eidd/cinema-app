import { fork } from 'redux-saga/effects';
import authSaga from '../store/auth/saga';
import searchedMoviesSaga from '../store/searchMovies/saga';
import topRatedMoviesSaga from '../store/topRatedMovies/saga';
import trailerModalSaga from '../store/trailerModal/saga';
import upcomingMoviesSaga from '../store/upcomingMovies/saga';

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(upcomingMoviesSaga);
  yield fork(topRatedMoviesSaga);
  yield fork(searchedMoviesSaga);
  yield fork(trailerModalSaga);
}
