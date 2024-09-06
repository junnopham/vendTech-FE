import React from 'react';
import {
	BrowserRouter as Router,
	Navigate,
	Route,
	Routes,
} from 'react-router-dom';
import HomePage from './Page/HomePage';
import FoodAndDrinkPage from './Page/FoodDrinkPage';
import ContactPage from './Page/ContactPage';
import AboutPage from './Page/AboutPage';
import Products from './Page/Admin/Products';
import GuestInfo from './Page/Admin/GuestInfo';
import Dashboard from './Page/Admin/DashboardPage';
import User from './Page/Admin/Profile';
import Category from './Page/Admin/Category';
import Main from './Components/base/Main';
import ProductPage from './Page/ProductPage';
import SignIn from './Page/Auth/SignIn';
import ForgotPassword from './Page/Auth/ForgotPassword';
import ProductDetailPage from './Page/ProductDetailPage';
import FoodDrinkDetailPage from './Page/FoodDrinkDetailPage';

const App: React.FC = () => {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />}>
						<Route index element={<Main />} />
						<Route path="products" element={<ProductPage />} />
						<Route
							path="product/:id"
							element={<ProductDetailPage />}
						/>
						<Route
							path="food-and-drink"
							element={<FoodAndDrinkPage />}
						/>
						<Route
							path="food-and-drink/:id"
							element={<FoodDrinkDetailPage />}
						/>
						<Route path="contact-us" element={<ContactPage />} />
						<Route path="about-us" element={<AboutPage />} />
					</Route>
					<Route path="admin" element={<Dashboard />}>
						<Route index element={<Navigate to="profile" />} />
						<Route path="profile" element={<User />} />
						<Route path="guestInfo" element={<GuestInfo />} />
						<Route
							path="product-management"
							element={<Products />}
						/>
						<Route path="category" element={<Category />} />
					</Route>
					<Route path="sign-in" element={<SignIn />} />
					<Route path="reset-password" element={<ForgotPassword />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;
