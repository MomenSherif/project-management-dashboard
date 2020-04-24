import { combineReducers } from 'redux';
/* All reducers import */
import authenticationReducer from './authentication';

const rootReducer = combineReducers({
  auth: authenticationReducer,
});

export default rootReducer;
