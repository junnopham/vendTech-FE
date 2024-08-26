import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Components/base/Footer';
import Header from '../../Components/base/Header';
import { useEffect, useState } from 'react';

import { useInView } from 'react-intersection-observer';
interface IconButtonProps {
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	customColor?: string;
}
const HomePage = () => {
	const location = useLocation();
	const isHomePage = location.pathname === '/' ? 'main' : 'sub';
	const [collapsed, setCollapsed] = useState(false);
	const { ref, inView } = useInView({
		threshold: 0.6,
	});

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	useEffect(() => {
		setCollapsed(false);
	}, [isHomePage, location]);

	return (
		<>
			<div className="relative">
				<Header
					type={isHomePage}
					toggleCollapsed={toggleCollapsed}
					collapsed={collapsed}
				/>
				<Outlet />
				<Footer />
			</div>
		</>
	);
};

export default HomePage;
