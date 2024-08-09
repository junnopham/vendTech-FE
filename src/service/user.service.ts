import axios from '../config/axios';
import { PRODUCTS_URL } from '../const/api-url';

const getProducts = async (pageSize: number, currentPage: number) => {
	const response = await axios.get(PRODUCTS_URL, {
		params: {
			pageSize,
			currentPage
		}
	});

	return response.data;
};

const deleteProductById = async (id:string) => {
	const response = await axios.delete(`${PRODUCTS_URL}/${id}`);
	return response.data;
};

export { getProducts, deleteProductById };
