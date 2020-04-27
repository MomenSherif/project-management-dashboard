const projectsReducerDefaultState = [
  {
    id: 1,
    title: 'Front End Project',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
      asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
      facilis provident minima aspernatur eligendi cupiditate assumenda,
      incidunt praesentium. Accusantium.`,
    state: 'In Progress',
    budget: 200000,
    deadline: new Date().now,
    createdAt: Date.now(),
  },
  {
    id: 2,
    title: 'Back End Project',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
        asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
        facilis provident minima aspernatur eligendi cupiditate assumenda,
        incidunt praesentium. Accusantium.`,
    state: 'In Progress',
    budget: 200000,
    deadline: new Date().now,
    createdAt: Date.now(),
  },
  {
    id: 3,
    title: 'MEAN Stack Project',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
        asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati
        facilis provident minima aspernatur eligendi cupiditate assumenda,
        incidunt praesentium. Accusantium.`,
    state: 'In Progress',
    budget: 200000,
    deadline: new Date().now,
    createdAt: Date.now(),
  },
];

const projectsReducer = (state = projectsReducerDefaultState, action) => {
  switch (action.type) {
    case 'GET_PROJECT_BY_ID':
      const projectIndex = state.find((project) => project.id === +action.id);
      console.log(state[projectIndex]);
      return state[projectIndex];
    default:
      return state;
  }
};
export default projectsReducer;
