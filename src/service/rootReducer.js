import { combineReducers } from 'redux';
import themeReducer from '../store/theme/reducer';
import authReducer from '../store/auth/reducer';
import upcomingMoviesReducer from '../store/upcomingMovies/reducer';
import searchedMoviesReducer from '../store/searchMovies/reducer';
import trailerModalReducer from '../store/trailerModal/reducer';
import topratedMoviesReducer from '../store/topRatedMovies/reducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  auth: authReducer,
  upcomingMovies: upcomingMoviesReducer,
  topRatedMovies: topratedMoviesReducer,
  searchedMovies: searchedMoviesReducer,
  trailerModal : trailerModalReducer,
});

export default rootReducer;
