const teamsReducerDefaultState = [];

const teamsReducer = (state = teamsReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEAMS':
      return action.teams;
    case 'ADD_TEAM':
      return state.concat(action.team);
    case 'DELETE_TEAM':
      return state.filter(team => team.id !== action.id);

    case 'UPDATE_TEAM':
      const index = state.findIndex(team => team.id === action.id);
      action.updates.leaderId = {
        ...state[index].leaderId,
        email: action.updates.email
      };
      return state.map(team =>
        team.id !== action.id ? team : { ...team, ...action.updates }
      );

    case 'ADD_MEMBER':
      let newState = [...state];
      let indx = newState.findIndex(t => t.id === action.teamId);
      newState[indx].employees.push(action.member);
      return newState;

    case 'ADD_MEMBER_BY_NAME':
      let anotherState = [...state];
      let anotherIndex = anotherState.findIndex(
        t => t.name === action.teamName
      );
      anotherState[anotherIndex].employees.push(action.member);
      return anotherState;

    default:
      return state;
  }
};

export default teamsReducer;
