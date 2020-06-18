import axios from 'axios';

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
};

const logOut = () => ({
  type: 'LOG_OUT',
});
export { login, logOut, signUp, autoLogin };
