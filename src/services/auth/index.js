import axios from '../axios';

export const authApi = async (userData) => {
  const { data } = await axios.post('/login', userData, {
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  });

  return data;
};
