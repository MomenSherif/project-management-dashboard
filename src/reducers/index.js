import { combineReducers } from 'redux';
/* All reducers import */
import authenticationReducer from './authentication';
import teamsReducer from './teams';
import projectReducer from './project';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  teams: teamsReducer,
  projects: projectReducer,
});

export default rootReducer;
