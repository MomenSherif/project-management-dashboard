const themeReducer = (state = 'light', action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return state === 'light' ? 'dark' : 'light';
    case 'SET_THEME':
      return action.theme;
    default:
      return state;
  }
};

export default themeReducer;
