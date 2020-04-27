import { combineReducers } from 'redux';
/* All reducers import */
import authenticationReducer from './authentication';
import teamsReducer from './teams';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  teams: teamsReducer,
});

export default rootReducer;
