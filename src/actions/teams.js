/* Will be used to set teams to redux store,
when be fetched by async action fetchTeams*/
const setTeams = teams => ({
  type: 'SET_TEAMS',
  teams
});

const fetchTeams = () => {
  return async dispatch => {
    // get teams from DB
    // dispatch(setTeams(teams))
  };
};

const addTeam = team => ({
  type: 'ADD_TEAM',
  team
});

const deleteTeam = id => ({
  type: 'DELETE_TEAM',
  id
});

/**
 * ex:
 *    id: asdsf123as1df56sf312sdf
 *    updates: {name: 'new name'}
 */
const updateTeam = (id, updates) => ({
  type: 'UPDATE_TEAM',
  id,
  updates
});

const getTeamMembers = teamId => ({
  type: 'GET_MEMBERS',
  teamId
});

const getTeamProjects = teamId => ({
  type: 'GET_TEAM_PROJECTS',
  teamId
});

const addTeamMember = (teamId, member) => ({
  type: 'ADD_MEMBER',
  teamId,
  member
});

export {
  addTeam,
  deleteTeam,
  updateTeam,
  fetchTeams,
  getTeamMembers,
  getTeamProjects,
  addTeamMember
};
