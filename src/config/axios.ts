import axios from 'axios';
import { BASE_URL } from '../const/api-url';

const request = axios.create({
	baseURL: BASE_URL,
});

request.interceptors.request.use(
	(config) => {
		const accessToken = localStorage.getItem('authToken');
		if (accessToken) {
			config.headers.authorization = accessToken;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

request.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		const status = error.response.status;

		if (status === 401) {
			window.location.assign('/sign-in');
		}

		return Promise.reject(error);
	}
);

export const setAuthorizationHeader = (token: string | null) => {
	if (token) {
		request.defaults.headers.common['authorization'] = token;
	} else {
		delete request.defaults.headers.common['authorization'];
	}
};

export default request;
