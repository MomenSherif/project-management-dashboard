import axios from 'axios';
import { setTheme } from './theme';

const loginSuccess = (user) => ({
  type: 'LOG_IN',
  user,
});

const login = (email, password) => async (dispatch) => {
  const {
    data: { employee, token },
  } = await axios.post(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/employees/sign-in`,
    {
      email,
      password,
    }
  );
  const user = { ...employee, token };
  localStorage.setItem('user', JSON.stringify(user));
  dispatch(loginSuccess(user));
  dispatch(setTheme(localStorage.getItem('theme')));
};

const signUp = (data) => async (dispatch) => {
  const {
    data: { employee, token },
  } = await axios.post(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/organizations`,
    { ...data, role: 'business-owner' }
  );
  const user = { ...employee, token };
  localStorage.setItem('user', JSON.stringify(user));
  dispatch(loginSuccess(user));
};

const autoLogin = () => async (dispatch) => {
  const user = localStorage.getItem('user');
  if (!user) return;
  dispatch(loginSuccess(JSON.parse(user)));
  dispatch(setTheme(localStorage.getItem('theme')));
};

const logOutSuccess = () => ({
  type: 'LOG_OUT',
});

const logOut = () => async (dispatch) => {
  localStorage.removeItem('user');
  dispatch(setTheme('light'));
  dispatch(logOutSuccess());
};

export { login, logOut, signUp, autoLogin };
