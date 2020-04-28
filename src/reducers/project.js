const projectsReducerDefaultState = [
  {
    id: 1,
    title: 'Front End Project',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
      asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
      facilis provident minima aspernatur eligendi cupiditate assumenda,
      incidunt praesentium. Accusantium.`,
    state: 'in-progress',
    budget: 200000,
    deadline: new Date(),
    createdAt: Date.now(),
  },
  {
    id: 2,
    title: 'Back End Project',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
        asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
        facilis provident minima aspernatur eligendi cupiditate assumenda,
        incidunt praesentium. Accusantium.`,
    state: 'in-review',
    budget: 200000,
    deadline: new Date(),
    createdAt: Date.now(),
  },
  {
    id: 3,
    title: 'MEAN Stack Project',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
        asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
        facilis provident minima aspernatur eligendi cupiditate assumenda,
        incidunt praesentium. Accusantium.`,
    state: 'done',
    budget: 200000,
    deadline: new Date(),
    createdAt: Date.now(),
  },
];

const projectsReducer = (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_PROJECT':
      console.log(action.project);
      return state.concat(action.project);
    case 'DELETE_PROJECT':
      return state.filter((project) => project.id !== action.id);
    case 'UPDATE_PROJECT':
      return state.map((project) =>
        project.id !== action.id ? project : { ...project, ...action.updates }
      );
    default:
      return state;
  }
};
export default projectsReducer;
