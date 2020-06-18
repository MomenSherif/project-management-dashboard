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
    case 'LOG_OUT':
      localStorage.clear();
      return {};
    default:
      return state;
  }
};

export default authenticationReducer;
