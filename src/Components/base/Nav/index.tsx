import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { navigation } from '../../../const';
import { classNames } from '../../../util';
import styles from './styles.module.css';
import {
	BiLogoFacebook,
	BiLogoLinkedin,
	BiLogoInstagram,
	BiLogoGmail,
} from 'react-icons/bi';
import { useEffect, useState } from 'react';

interface IconButtonProps {
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	customColor?: string;
}
interface IProps {
	toggleCollapsed?: () => void;
}

const NavBar = (props: IProps) => {
	const { toggleCollapsed } = props;
	let oldScrollY = 0;

	const [direction, setDirection] = useState('up');
	const [hiddenNav, setHiddenNav] = useState(false);
	const [hiddenSubNav, setHiddenSubNav] = useState(true);

	const controlDirection = () => {
		if (window.scrollY > oldScrollY) {
			setDirection('down');
		} else {
			setDirection('up');
		}
		oldScrollY = window.scrollY;
	};

	const listenScrollEvent = () => {
		window.scrollY > 80 ? setHiddenNav(true) : setHiddenNav(false);
		window.scrollY > 80 && direction === 'up'
			? setHiddenSubNav(false)
			: setHiddenSubNav(true);
	};
	useEffect(() => {
		window.addEventListener('scroll', listenScrollEvent);
	});
	useEffect(() => {
		window.addEventListener('scroll', controlDirection);
		return () => {
			window.removeEventListener('scroll', controlDirection);
		};
	}, []);

	const IconButton: React.FC<IconButtonProps> = ({ Icon, customColor }) => (
		<div className={styles.iconWrapper}>
			<Icon className={`${styles.icon}`} style={{ color: customColor }} />
			<Icon className={`${styles.iconWhite}`} />
		</div>
	);

	return (
		<>
			<Disclosure
				as="nav"
				className="bg-transparent fixed top-0 left-0 w-full z-50 py-6"
				style={{
					transform: hiddenNav
						? 'translateY(-100%)'
						: 'translateY(0px)',
					transition: 'transform .5s ease,box-shadow .5s ease',
				}}
			>
				<div className="xl:px-16">
					<div className="relative flex h-16 items-center justify-between w-full px-10">
						<div className="absolute inset-y-0 left-0 items-center w-full lg:hidden">
							{/* Mobile menu button*/}
							<div className="flex justify-between items-center px-20 w-full">
								<button className="text-white font-bold text-4xl ">
									<Link to="/"> Vend Tech </Link>
								</button>
								<DisclosureButton
									className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-[1000ms] "
									onClick={toggleCollapsed}
								>
									<Bars3Icon
										aria-hidden="true"
										className="block h-8 w-8 group-data-[open]:hidden"
									/>
									<XMarkIcon
										aria-hidden="true"
										className="hidden h-8 w-8 group-data-[open]:block"
									/>
								</DisclosureButton>
							</div>
						</div>
						<div className="flex-1 basis-[70%] hidden lg:block">
							<div className="flex justify-center items-center">
								<div className="flex flex-shrink-0 items-center flex-1 basis-[30%]">
									<button className="text-white font-bold text-4xl ">
										<Link to="/"> Vend Tech </Link>
									</button>
								</div>
								<div className="flex-1 basis-[60%]">
									<div className={styles.itemList}>
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												aria-current={
													item.current
														? 'page'
														: undefined
												}
												className={classNames(
													item.current
														? ' text-white'
														: 'text-gray-300 hover:text-white',
													'rounded-md px-3 py-2 text-sm font-medium'
												)}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="ml-6 justify-around flex-1 basis-[30%] hidden lg:block">
							<div className="flex items-center justify-center">
								<button className="px-5 py-2 font-thin text-sm text-white hover:opacity-80  bg-[#52B2BF] xl:mx-5 xl:px-2 ">
									Make Enquiry
								</button>
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
			</Disclosure>
			<Disclosure
				as="nav"
				className="bg-white text-black fixed top-0 left-0 w-full z-50 py-3 lg:py-6 "
				style={{
					transform: hiddenSubNav
						? 'translateY(-100%)'
						: 'translateY(0px)',
					transition:
						'transform .3s ease,height .3s ease,background .3s ease,opacity .3s ease,border-color .3s ease,box-shadow .3s ease,backdrop-filter .3s ease',
				}}
			>
				<div className="xl:px-16">
					<div className="relative flex h-12 items-center justify-between w-full px-10">
						<div className="absolute inset-y-0 left-0 items-center w-full lg:hidden">
							{/* Mobile menu button*/}
							<div className="flex justify-between items-center px-20 w-full">
								<button className="text-black font-bold text-4xl ">
									<Link to="/"> Vend Tech </Link>
								</button>
								<DisclosureButton
									className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition-all duration-[1000ms] "
									onClick={toggleCollapsed}
								>
									<Bars3Icon
										aria-hidden="true"
										className="block h-8 w-8 "
									/>
									<XMarkIcon
										aria-hidden="true"
										className="hidden h-8 w-8 "
									/>
								</DisclosureButton>
							</div>
						</div>
						<div className="flex-1 basis-[70%] hidden lg:block">
							<div className="flex justify-center items-center">
								<div className="flex flex-shrink-0 items-center flex-1 basis-[30%]">
									<button className="text-black font-bold text-4xl ">
										<Link to="/"> Vend Tech </Link>
									</button>
								</div>
								<div className="flex-1 basis-[60%]">
									<div className={styles.itemList2}>
										{navigation.map((item) => (
											<Link
												key={item.name}
												to={item.href}
												aria-current={
													item.current
														? 'page'
														: undefined
												}
												className={classNames(
													item.current
														? ' text-black'
														: ' hover:opacity-70',
													'rounded-md px-3 py-2 text-sm font-medium'
												)}
											>
												{item.name}
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>
						<div className="ml-6 justify-around flex-1 basis-[30%] hidden lg:block">
							<div className="flex items-center justify-center">
								<button className="px-5 py-2 font-thin text-sm text-white hover:opacity-80  bg-[#52B2BF] xl:mx-5 xl:px-2 ">
									Make Enquiry
								</button>
								<button className="mx-2 xl:mr-4">
									<IconButton
										Icon={BiLogoFacebook}
										customColor="#333"
									/>
								</button>
								<button className="mx-2 xl:mr-4">
									<IconButton
										Icon={BiLogoLinkedin}
										customColor="#333"
									/>
								</button>
								<button className="mx-2 xl:mr-4">
									<IconButton
										Icon={BiLogoInstagram}
										customColor="#333"
									/>
								</button>
								<button className="mx-2 xl:mr-4">
									<IconButton
										Icon={BiLogoGmail}
										customColor="#333"
									/>
								</button>
							</div>
						</div>
					</div>
				</div>
			</Disclosure>
		</>
	);
};

export default NavBar;
