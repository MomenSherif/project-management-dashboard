import axios from './axios';

const assignTeamToProject = async (projectId, teamId) => {
  const {
    data,
  } = await axios.post(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/projects/${projectId}/assign-team`,
    { teamId }
  );
  return data;
};

export { assignTeamToProject };
