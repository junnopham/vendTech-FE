import { Link, Outlet, useLocation } from 'react-router-dom';
import Footer from '../../Components/base/Footer';
import Header from '../../Components/base/Header';
import { useEffect, useState } from 'react';
import styles from './style.module.css';
import { navigation } from '../../const';
import {
	BiLogoFacebook,
	BiLogoLinkedin,
	BiLogoInstagram,
	BiLogoGmail,
} from 'react-icons/bi';
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
	const IconButton: React.FC<IconButtonProps> = ({ Icon, customColor }) => (
		<div className={styles.iconWrapper}>
			<Icon
				className={`${styles.icon} text-[20px]`}
				style={{ color: customColor }}
			/>
		</div>
	);
	useEffect(() => {
		setCollapsed(false);
	}, [isHomePage]);

	return (
		<>
			<div className="relative">
				<div
					className={`${styles.slideDown} ${collapsed ? 'block' : 'hidden'}`}
				>
					<div
						className="fixed top-0 left-0 right-0 bottom-0 "
						ref={ref}
					>
						<div
							className={`${inView ? 'opacity-1' : 'opacity-0'} flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center justify-center items-center transition-all duration-[3000ms]`}
						>
							{navigation.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									aria-current={
										item.current ? 'page' : undefined
									}
									className="text-white px-5 py-[6px] text-xs"
								>
									{item.name}
								</Link>
							))}

							<div className="bg-white h-[1px] w-[15vw] my-10"></div>
							<div>
								<button className="mx-2 xl:mr-4">
									<IconButton
										Icon={BiLogoFacebook}
										customColor="#fff"
									/>
								</button>
								<button className="mx-2 xl:mr-4">
									<IconButton
										Icon={BiLogoLinkedin}
										customColor="#fff"
									/>
								</button>
								<button className="mx-2 xl:mr-4">
									<IconButton
										Icon={BiLogoInstagram}
										customColor="#fff"
									/>
								</button>
								<button className="mx-2 xl:mr-4">
									<IconButton
										Icon={BiLogoGmail}
										customColor="#fff"
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
				<Header type={isHomePage} toggleCollapsed={toggleCollapsed} />
				<Outlet />
				<Footer />
			</div>
		</>
	);
};

export default HomePage;
