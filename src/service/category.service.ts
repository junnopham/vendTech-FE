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

const deleteCategoryById = async (id: string) => {
  const response = await axios.delete(`${CATEGORY_URL}/${id}`);

  return response.data;
};

export { getCategories, deleteCategoryById };
