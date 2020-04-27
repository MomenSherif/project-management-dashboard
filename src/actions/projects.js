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
export { addProject, deleteProject, updateProject };
