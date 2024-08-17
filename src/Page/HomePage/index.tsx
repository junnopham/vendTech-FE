import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Components/base/Footer';
import Header from '../../Components/base/Header';

const HomePage = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/' ? 'main' : 'sub';
	return (
		<>
			<Header type={isHomePage} />
			<Outlet />
			<Footer />
		</>
	);
};

export default HomePage;
