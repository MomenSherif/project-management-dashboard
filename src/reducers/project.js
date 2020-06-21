const projectsReducerDefaultState = [];
const projectsReducer = (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_PROJECTS':
      return action.projects;
    case 'ADD_PROJECT':
      return state.concat(action.project);
    case 'DELETE_PROJECT':
      return state.filter((project) => project.id !== action.id);
    case 'UPDATE_PROJECT':
      return state.map((project) =>
        project.id !== action.id ? project : { ...project, ...action.updates }
      );
    case 'TOGGLE_TEAM':
      const project = state.find((project) => project._id === action.projectId);
      if (!project.teams.includes(action.teamId)) {
        project.teams.push(action.teamId);
      } else {
        const teams = project.teams.filter((ele) => ele !== action.teamId);
        project.teams = teams;
      }
      return state.map((proj) =>
        proj.id !== action.projectId ? proj : { ...project }
      );
    default:
      return state;
  }
};
export default projectsReducer;
