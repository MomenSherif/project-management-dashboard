import axios from '../api/axios';

const addProject = (project) => ({
  type: 'ADD_PROJECT',
  project,
});

const deleteProject = (id) => ({
  type: 'DELETE_PROJECT',
  id,
});

const updateProject = (id, updates) => ({
  type: 'UPDATE_PROJECT',
  id,
  updates,
});

const toggleTeam = (teamId, projectId) => ({
  type: 'TOGGLE_TEAM',
  teamId,
  projectId,
});

const getProjects = () => (dispatch) => {
  return axios.get('http://localhost:4000/projects').then((response) => {
    dispatch({
      type: 'GET_PROJECTS',
      projects: response.data,
    });
  });
};

const addProjectSuccess = (project) => (dispatch) => {
  return axios
    .post('http://localhost:4000/projects', project)
    .then((response) => {
      dispatch(addProject(response.data));
    });
};

const deleteProjectSuccess = (id) => (dispatch) => {
  return axios.delete(`http://localhost:4000/projects/${id}`);
};

const updateProjectSuccess = (project, id) => (dispatch) => {
  return axios
    .patch(`http://localhost:4000/projects/${id}`, project)
    .then((response) => {
      dispatch(updateProject(id, project));
    });
};

export {
  addProject,
  deleteProject,
  updateProject,
  toggleTeam,
  getProjects,
  updateProjectSuccess,
  deleteProjectSuccess,
  addProjectSuccess,
};
