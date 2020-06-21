import { combineReducers } from 'redux';
/* All reducers import */
import authenticationReducer from './authentication';
import teamsReducer from './teams';
import projectReducer from './project';
import tasksReducer from './tasks';
import themeReducer from './theme';

const rootReducer = combineReducers({
  auth: authenticationReducer,
  teams: teamsReducer,
  projects: projectReducer,
  tasks: tasksReducer,
  theme: themeReducer,
});

export default rootReducer;
