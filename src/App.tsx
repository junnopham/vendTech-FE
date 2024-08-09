import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import FoodAndDrinkPage from './Page/FoodDrinkPage';
import ContactPage from './Page/ContactPage';
import AboutPage from './Page/AboutPage';
import Products from './Page/Admin/Products';
import GuestInfo from './Page/Admin/GuestInfo';
import Dashboard from './Page/Admin/DashboardPage';
import User from './Page/Admin/User';
import Category from './Page/Admin/Category';

const App: React.FC = () => (
	<div className="App">
		<Router>
			<Routes>
				<Route index path="/" element={<HomePage />} />
				<Route path="foodAndDrink" element={<FoodAndDrinkPage />} />
				<Route path="contactUs" element={<ContactPage />} />
				<Route path="aboutUs" element={<AboutPage />} />
				<Route path="admin" element={<Dashboard />}>
					<Route index element={<User />} />
					<Route path="guestInfo" element={<GuestInfo />} />
					<Route path="products" element={<Products />} />
					<Route path="category" element={<Category />} />
				</Route>
			</Routes>
		</Router>
	</div>
);

export default App;
