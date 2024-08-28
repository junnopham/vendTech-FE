import axios from '../config/axios';
import { GUESTINFO_URL } from '../const/api-url';

interface IGuestInfo {
	firstName: string;
	lastName: string;
	phoneNumber?: string;
	message?: string;
	email: string;
}

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

const createGuestInfo = async (guestInfo: IGuestInfo) => {
	const { firstName, lastName, phoneNumber, message, email } = guestInfo;
	const response = await axios.post(GUESTINFO_URL, {
		firstName,
		lastName,
		phoneNumber,
		message,
		email,
	});
	return response;
};

export { getGuestInfo, deleteGuestInfo, createGuestInfo };
