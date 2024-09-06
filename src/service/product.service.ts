import axios from '../config/axios';
import { PRODUCTS_URL } from '../const/api-url';

const getProducts = async (
	pageSize: number,
	currentPage?: number,
	category?: string
) => {
	const response = await axios.get(PRODUCTS_URL, {
		params: {
			pageSize,
			currentPage,
			category,
		},
	});

	return response.data;
};

const getProductById = async (id: string) => {
	const url = `${PRODUCTS_URL}/${id}`;
	const response = await axios.get(url);
	return response.data;
};

const createProduct = async (product: FormData) => {
	const response = await axios.post(PRODUCTS_URL, product, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});

	return response.data;
};

const updateProductById = async (id: string, product: FormData) => {
	const url = `${PRODUCTS_URL}/${id}`;
	const response = await axios.post(url, product, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return response.data;
};

const deleteProductById = async (id: string) => {
	const response = await axios.delete(`${PRODUCTS_URL}/${id}`);
	return response.data;
};

export {
	getProducts,
	getProductById,
	createProduct,
	updateProductById,
	deleteProductById,
};
