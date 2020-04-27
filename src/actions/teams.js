/* Will be uses to set teams to redux store,
when be fetched by async action fetchTeams*/
const setTeams = (teams) => ({
  type: 'SET_TEAMS',
  teams,
});

const fetchTeams = () => {
  return async (dispatch) => {
    // get teams from DB
    // dispatch(setTeams(teams))
  };
};

const addTeam = (team) => ({
  type: 'ADD_TEAM',
  team,
});

const deleteTeam = (id) => ({
  type: 'DELETE_TEAM',
  id,
});

/**
 * ex:
 *    id: asdsf123as1df56sf312sdf
 *    updates: {name: 'new name'}
 */
const updateTeam = (id, updates) => ({
  type: 'UPDATE_TEAM',
  id,
  updates,
});

export { addTeam, deleteTeam, updateTeam, fetchTeams };
