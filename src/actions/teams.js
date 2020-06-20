import axios from '../api/axios';

const setTeams = (teams) => ({
  type: 'SET_TEAMS',
  teams,
});

const fetchTeams = () => async (dispatch) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/teams`
  );
  dispatch(setTeams(data));
  return data;
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

const getTeamMembers = (teamId) => ({
  type: 'GET_MEMBERS',
  teamId,
});

const getTeamProjects = (teamId) => ({
  type: 'GET_TEAM_PROJECTS',
  teamId,
});

const addTeamMember = (teamId, member) => ({
  type: 'ADD_MEMBER',
  teamId,
  member,
});

const addTeamMemberByName = (teamName, member) => ({
  type: 'ADD_MEMBER_BY_NAME',
  teamName,
  member,
});

export {
  addTeam,
  deleteTeam,
  updateTeam,
  fetchTeams,
  getTeamMembers,
  getTeamProjects,
  addTeamMember,
  addTeamMemberByName,
};
