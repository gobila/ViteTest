import axios from '../axios';

export const usersApi = async (page, perPage) => {
  const { data } = await axios.get('/users', {
    params: { page, per_page: perPage },
    headers: {
      'x-api-key': 'reqres-free-v1',
    },
  });

  return data;
};
