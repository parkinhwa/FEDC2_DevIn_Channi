import axios from 'axios';

export const users = {
  getUsers: async () => {
    try {
      const response = await axios.get('/users/get-users');
      // console.log(response.data);
      return response.data;
    } catch (e) {
      console.error(e);
    }
  },
};
