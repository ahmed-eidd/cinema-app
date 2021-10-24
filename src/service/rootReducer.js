import { combineReducers } from 'redux';
import themeReducer from '../store/theme/reducer';
import authReducer from '../store/auth/reducer';

const rootReducer = () => combineReducers({
  theme: themeReducer,
  auth: authReducer,
});

export default rootReducer;
