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
  return axios
    .get(`${process.env.REACT_APP_BACKEND_BASE_URL}/projects`)
    .then((response) => {
      dispatch({
        type: 'GET_PROJECTS',
        projects: response.data,
      });
      return response.data;
    });
};

const getProjectById = (id) => (dispatch) => {
  return axios.get(`${process.env.REACT_APP_BACKEND_BASE_URL}/projects/${id}`);
};

const addProjectSuccess = (project) => (dispatch) => {
  return axios
    .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/projects`, project)
    .then((response) => {
      dispatch(addProject(response.data));
    });
};

const deleteProjectSuccess = (id) => (dispatch) => {
  return axios.delete(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/projects/${id}`
  );
};

const updateProjectSuccess = (id, project) => (dispatch) => {
  return axios.patch(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/projects/${id}`,
    project
  );
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
  getProjectById,
};
