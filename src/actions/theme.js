const toggleTheme = () => {
  localStorage.setItem(
    'theme',
    localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
  );
  return {
    type: 'TOGGLE_THEME',
  };
};

const setTheme = (theme = 'light') => ({
  type: 'SET_THEME',
  theme,
});

export { toggleTheme, setTheme };
