import axios from '../config/axios';
import { CATEGORY_URL } from '../const/api-url';

const getCategories = async (pageSize: number, currentPage: number) => {
	const response = await axios(CATEGORY_URL, {
		params: {
			pageSize,
			currentPage,
		},
	});

	return response.data;
};

const getCategoryById = async (id: string) => {
	const response = await axios.get(`${CATEGORY_URL}/${id}`);

	return response.data;
};

const createCategory = async (data: FormData) => {
	const response = await axios.post(CATEGORY_URL, data, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});

	return response.data;
};

const updateCategoryById = async (id: string, data: FormData) => {
	const response = await axios.post(`${CATEGORY_URL}/${id}`, data, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});

	return response.data;
};

const deleteCategoryById = async (id: string) => {
	const response = await axios.delete(`${CATEGORY_URL}/${id}`);

	return response.data;
};

export {
	getCategories,
	getCategoryById,
	createCategory,
	updateCategoryById,
	deleteCategoryById,
};
