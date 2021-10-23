import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import themeReducer from '../store/theme/reducer';
import authReducer from '../store/auth/reducer';

const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    theme: themeReducer,
    auth: authReducer,
  });

export default rootReducer;
