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

export { getFoodDrinkCategories, getFoodDrink };
