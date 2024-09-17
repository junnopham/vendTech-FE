interface Product {
	_id: string;
	name: string;
	description: string;
	action: string;
	mainImage: Image;
	images: Image[];
	category: string;
}

interface FoodDrink {
	_id: string;
	name: string;
	description: string;
	action: string;
	image: Image;
	category: string;
}

interface Image {
	name: string;
	type: string;
	url: string;
}

interface User {
	_id: string;
	username: string;
	email: string;
	createdAt: string;
	updatedAt: string;
}

interface GuestInfo {
	_id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
	message: string;
	createdAt: string;
	updatedAt: string;
}

interface Category {
	_id: string;
	name: string;
	description: string;
	image: {
		name: string;
		type: string;
		url: string;
	};
	createdAt: string;
	updatedAt: string;
}

interface SignInRequest {
	username: string;
	password: string;
}
