import axios from '../config/axios';
import { GUESTINFO_URL } from '../const/api-url';

const getGuestInfo = async (pageSize: number, currentPage: number) => {
  const response = await axios(GUESTINFO_URL, {
    params: {
      pageSize,
      currentPage,
    },
  });

  return response.data;
};

const deleteGuestInfo = async (id: string) => {
  const response = await axios.delete(`${GUESTINFO_URL}/${id}`);

  return response.data;
};

export { getGuestInfo, deleteGuestInfo };
