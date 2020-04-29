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
export { addProject, deleteProject, updateProject, toggleTeam };
