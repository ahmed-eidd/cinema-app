import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import  themeReducer from '../store/theme/reducer';


const rootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    theme: themeReducer
  });

export default rootReducer;
