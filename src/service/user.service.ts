import axios from '../config/axios';
import { RESET_PASSWORD_URL, USER_URL } from '../const/api-url';

const signInWithUsernameAndPassword = async (signInRequest: SignInRequest) => {
	const response = await axios.post(
		`${USER_URL}/authenticate`,
		signInRequest,
		{
			headers: {
				'Content-Type': 'application/json',
			},
		}
	);

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

const getUserByUsername = async (username: string) => {
	const response = await axios.get(`${USER_URL}/${username}`);

	return response.data;
};

const updateUser = async (user: any) => {
	const response = await axios.post(`${USER_URL}/update`, user);

	return response.data;
};

const forgotPassword = async (email: string) => {
	const response = await axios.get(`${RESET_PASSWORD_URL}/${email}`);

	return response.data;
};

const resetPassword = async (data: {
	userId: string;
	token: string;
	password: string;
}) => {
	const response = await axios.post(RESET_PASSWORD_URL, data);

	return response.data;
};

export {
	signInWithUsernameAndPassword,
	getUsers,
	getUserByUsername,
	updateUser,
	forgotPassword,
	resetPassword,
};
