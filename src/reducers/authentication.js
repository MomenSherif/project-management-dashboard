const authenticationReducerDefaultValue = {};

const authenticationReducer = (
  state = authenticationReducerDefaultValue,
  action
) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...action.user,
      };
    default:
      return state;
  }
};

export default authenticationReducer;
