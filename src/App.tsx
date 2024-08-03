import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './Page/HomePage';
import FoodAndDrinkPage from './Page/FoodDrinkPage';
import ContactPage from './Page/ContactPage';
import AboutPage from './Page/AboutPage';

const App: React.FC = () => (
	<div className="App">
		<Router>
			<Routes>
				<Route index path="/" element={<HomePage />} />
				<Route path="foodAndDrink" element={<FoodAndDrinkPage />} />
				<Route path="contactUs" element={<ContactPage />} />
				<Route path="aboutUs" element={<AboutPage />} />
			</Routes>
		</Router>
	</div>
);

export default App;
