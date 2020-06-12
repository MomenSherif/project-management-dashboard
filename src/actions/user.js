import axios from 'axios';

const fetchUserInfo = (userId) => {
  return async (dispatch) => {
    const { data } = await axios.get(`url/${userId}`);
    return data;
  };
};

export { fetchUserInfo };
