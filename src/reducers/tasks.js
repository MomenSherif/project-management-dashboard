const tasksReducerDefaultState = [];

const tasksReducer = (state = tasksReducerDefaultState, action) => {
  switch (action.type) {
    case 'ASSIGN_TASK':
      return state.concat(action.payload);
    default:
      return state;
  }
};

export default tasksReducer;
