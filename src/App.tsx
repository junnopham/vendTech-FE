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
import Main from './Components/base/Main';
import ProductPage from './Page/ProductPage';

const App: React.FC = () => (
	<div className="App">
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />}>
					<Route index element={<Main />} />
					<Route path="products" element={<ProductPage />} />
					<Route
						path="food-and-drink"
						element={<FoodAndDrinkPage />}
					/>
					<Route path="contact-us" element={<ContactPage />} />
					<Route path="about-us" element={<AboutPage />} />
				</Route>

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
