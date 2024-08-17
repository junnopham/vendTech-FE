import React from 'react';
import {Route, BrowserRouter as Router, Routes, Navigate} from 'react-router-dom';
import HomePage from './Page/HomePage';
import FoodAndDrinkPage from './Page/FoodDrinkPage';
import ContactPage from './Page/ContactPage';
import AboutPage from './Page/AboutPage';
import Products from './Page/Admin/Products';
import GuestInfo from './Page/Admin/GuestInfo';
import Dashboard from './Page/Admin/DashboardPage';
import User from './Page/Admin/User';
import Category from './Page/Admin/Category';
import SignIn from "./Page/Auth/SignIn";

const App: React.FC = () => (
    <div className="App">
        <Router>
            <Routes>
                <Route index path="/" element={<HomePage/>}/>
                <Route path="foodAndDrink" element={<FoodAndDrinkPage/>}/>
                <Route path="contactUs" element={<ContactPage/>}/>
                <Route path="aboutUs" element={<AboutPage/>}/>
                <Route path="admin" element={<Dashboard/>}>
                    <Route index element={<Navigate to="users" />}/>
                    <Route path="users" element={<User/>}/>
                    <Route path="guestInfo" element={<GuestInfo/>}/>
                    <Route path="products" element={<Products/>}/>
                    <Route path="category" element={<Category/>}/>
                </Route>
                <Route path="auth">
                    <Route path="sign_in" element={<SignIn/>}/>
                </Route>
            </Routes>
        </Router>
    </div>
);

export default App;
