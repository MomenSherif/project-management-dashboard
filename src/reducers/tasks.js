const tasksReducerDefaultState = [
  {
    id: 1,
    title: 'Front End Task',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae
          asperiores culpa quidem iste cum, labore sequi ex eaque obcaecati`,
    state: 'in-progress',
    deadline: new Date(),
    employeeId: 2,
    projectId: 1
  }
];

const tasksReducer = (state = tasksReducerDefaultState, action) => {
  switch (action.type) {
    case 'ASSIGN_TASK':
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default tasksReducer;
