import axios from './axios';

const fetchUserInfo = async (userId) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/employees/${userId}`
  );
  return data;
};

const toggleTaskState = async (taskId) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BACKEND_BASE_URL}/tasks/${taskId}`
  );
  return data;
};

export { fetchUserInfo, toggleTaskState };
