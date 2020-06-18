import axios from 'axios';
import store from '../store';

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const { token } = store.getState().auth;
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
