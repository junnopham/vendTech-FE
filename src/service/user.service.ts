import axios from '../config/axios';
import { USER_URL } from '../const/api-url';

const signInWithUsernameAndPassword = async (signInRequest: SignInRequest) => {
  const response = await axios.post(`${USER_URL}/authenticate`, signInRequest, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return response.data;
};

const getUsers = async (pageSize: number, currentPage: number) => {
  const response = await axios.get(`${USER_URL}`, {
    params: {
      pageSize,
      currentPage,
    },
  });

  return response.data;
};

const updateUser = async (user: any) => {
  const response = await axios.put(`${USER_URL}/update`, user);

  return response.data;
};

export { signInWithUsernameAndPassword, getUsers, updateUser };
