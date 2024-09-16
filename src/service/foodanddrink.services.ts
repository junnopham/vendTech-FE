import axios from '../config/axios';
import { FOOD_AND_DRINK_URL, FOOD_DRINK_CATEGORY_URL } from '../const/api-url';

const getFoodDrinkCategories = async (
	pageSize: number,
	currentPage?: number
) => {
	const response = await axios.get(FOOD_DRINK_CATEGORY_URL, {
		params: {
			pageSize,
			currentPage,
		},
	});

	return response.data;
};

const getFoodDrinkCategory = async (
	pageSize: number,
	currentPage?: number,
	category?: string
) => {
	const response = await axios.get(FOOD_DRINK_CATEGORY_URL, {
		params: {
			pageSize,
			currentPage,
			category,
		},
	});

	return response.data;
};

const getFoodDrinkCategoryById = async (id: string) => {
	const url = `${FOOD_DRINK_CATEGORY_URL}/${id}`;
	const response = await axios.get(url);
	return response.data;
};

const createFoodDrinkCategory = async (data: FormData) => {
	const response = await axios.post(FOOD_DRINK_CATEGORY_URL, data, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});

	return response.data;
};

const updateFoodDrinkCategoryById = async (id: string, data: FormData) => {
	const url = `${FOOD_DRINK_CATEGORY_URL}/${id}`;
	const response = await axios.post(url, data, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return response.data;
};

const deleteFoodDrinkCategoryById = async (id: string) => {
	const response = await axios.delete(`${FOOD_DRINK_CATEGORY_URL}/${id}`);
	return response.data;
};

const getFoodDrink = async (
	pageSize: number,
	currentPage?: number,
	category?: string
) => {
	const response = await axios.get(FOOD_AND_DRINK_URL, {
		params: {
			pageSize,
			currentPage,
			category,
		},
	});

	return response.data;
};

const getFoodDrinkById = async (id: string) => {
	const url = `${FOOD_AND_DRINK_URL}/${id}`;
	const response = await axios.get(url);
	return response.data;
};

const createFoodDrink = async (data: FormData) => {
	const response = await axios.post(FOOD_AND_DRINK_URL, data, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});

	return response.data;
};

const updateFoodDrinkById = async (id: string, data: FormData) => {
	const url = `${FOOD_AND_DRINK_URL}/${id}`;
	const response = await axios.post(url, data, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return response.data;
};

const deleteFoodDrinkById = async (id: string) => {
	const response = await axios.delete(`${FOOD_AND_DRINK_URL}/${id}`);
	return response.data;
};

export {
	getFoodDrinkCategories,
	getFoodDrinkCategory,
	getFoodDrinkCategoryById,
	createFoodDrinkCategory,
	updateFoodDrinkCategoryById,
	deleteFoodDrinkCategoryById,
	getFoodDrink,
	getFoodDrinkById,
	createFoodDrink,
	updateFoodDrinkById,
	deleteFoodDrinkById,
};
