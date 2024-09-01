import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import logo from '../../../assets/logo-ventech.svg';

import { navigation } from '../../../const';
import { classNames } from '../../../util';
import styles from './styles.module.css';
import {
	BiLogoFacebook,
	BiLogoGmail,
	BiLogoInstagram,
	BiLogoLinkedin,
	BiSolidDashboard,
} from 'react-icons/bi';
import React, { useEffect, useState } from 'react';

interface IconButtonProps {
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	customColor?: string;
}

interface IProps {
	toggleCollapsed?: () => void;
	collapsed?: boolean;
}

const NavBar = (props: IProps) => {
	const { toggleCollapsed, collapsed } = props;
	let oldScrollY = 0;

	const [direction, setDirection] = useState('up');
	const [hiddenNav, setHiddenNav] = useState(false);
	const [hiddenSubNav, setHiddenSubNav] = useState(true);
	const [isDisplay, setIsDisplay] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(
		localStorage.getItem('authToken') && localStorage.getItem('user')
	);

	const controlDirection = () => {
		if (window.scrollY > oldScrollY) {
			setDirection('down');
		} else {
			setDirection('up');
		}
		oldScrollY = window.scrollY;
	};

	const listenScrollEvent = () => {
		if (collapsed) {
			setIsDisplay(true);
		} else {
			setIsDisplay(false);
		}

		if (window.scrollY > 80) {
			if (isDisplay && !hiddenNav) {
				setHiddenNav(false);
				setHiddenSubNav(true);
				return;
			}
			if (isDisplay && !hiddenSubNav) {
				setHiddenNav(true);
				setHiddenSubNav(false);
				return;
			}
			setHiddenNav(true);
			setHiddenSubNav(true);
		}
		if (window.scrollY < 1) {
			setHiddenNav(false);
			setHiddenSubNav(true);
			return;
		}

		if (window.scrollY > 80 && direction === 'up') {
			setHiddenSubNav(false);
			return;
		}
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
			<div>
				<Disclosure
					as="nav"
					className={`${hiddenNav ? 'opacity-0' : 'opacity-1'} bg-white top-0 left-0 w-full z-[1000] py-3 lg:py-6 transition-all duration-300 `}
				>
					<div className="xl:px-16">
						<div className="relative flex h-12 items-center justify-between w-full px-10">
							<div className="absolute inset-y-0 left-0 items-center w-full lg:hidden">
								{/* Mobile menu button*/}
								<div className="flex justify-between items-center pr-10 pl-20 lg:px-20 w-full">
									<button className="text-black font-bold text-4xl ">
										<Link to="/">
											<img
												src={logo}
												alt="logo"
												width={200}
												height={50}
											/>
										</Link>
									</button>
									<DisclosureButton
										className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition-all "
										onClick={toggleCollapsed}
									>
										<Bars3Icon
											aria-hidden="true"
											className={`${collapsed ? 'hidden' : 'block'} block h-8 w-8`}
										/>
										<XMarkIcon
											aria-hidden="true"
											className={`${collapsed ? 'block' : 'hidden'} block h-8 w-8`}
										/>
									</DisclosureButton>
								</div>
							</div>
							<div className="flex-1 basis-[70%] hidden lg:block">
								<div className="flex justify-center items-center">
									<div className="flex flex-shrink-0 items-center flex-1 basis-[30%]">
										<button className="text-black font-bold text-4xl ">
											<Link to="/">
												<img
													src={logo}
													alt="logo"
													width={200}
													height={50}
												/>
											</Link>
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
									<ScrollLink
										smooth={true}
										duration={1000}
										to="formSubmit"
										className="px-5 py-2 font-thin text-sm text-white hover:opacity-80  bg-[#52B2BF] xl:mx-5 xl:px-2 cursor-pointer"
									>
										Make Enquiry
									</ScrollLink>
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
									{isLoggedIn && (
										<Link to="/admin">
											<IconButton
												Icon={BiSolidDashboard}
												customColor="#333"
											/>
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</Disclosure>
				<Disclosure
					as="nav"
					className={`${hiddenSubNav ? 'opacity-0' : 'opacity-1'} bg-white fixed top-0 left-0 w-full z-[1000] py-3 lg:py-6 transition-all duration-300 `}
				>
					<div className="xl:px-16">
						<div className="relative flex h-12 items-center justify-between w-full px-10">
							<div className="absolute inset-y-0 left-0 items-center w-full lg:hidden">
								{/* Mobile menu button*/}
								<div className="flex justify-between items-center pr-10 pl-20 lg:px-20 w-full">
									<button className="text-black font-bold text-4xl ">
										<Link to="/">
											<img
												src={logo}
												alt="logo"
												width={200}
												height={50}
											/>
										</Link>
									</button>
									<DisclosureButton
										className="group relative inline-flex items-center justify-center rounded-md p-2 text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-black transition-all "
										onClick={toggleCollapsed}
									>
										<Bars3Icon
											aria-hidden="true"
											className={`${collapsed ? 'hidden' : 'block'} block h-8 w-8`}
										/>
										<XMarkIcon
											aria-hidden="true"
											className={`${collapsed ? 'block' : 'hidden'} block h-8 w-8`}
										/>
									</DisclosureButton>
								</div>
							</div>
							<div className="flex-1 basis-[70%] hidden lg:block">
								<div className="flex justify-center items-center">
									<div className="flex flex-shrink-0 items-center flex-1 basis-[30%]">
										<button className="text-black font-bold text-4xl ">
											<Link to="/">
												<img
													src={logo}
													alt="logo"
													width={200}
													height={50}
												/>
											</Link>
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
									<ScrollLink
										smooth={true}
										duration={1000}
										to="formSubmit"
										className="px-5 py-2 font-thin text-sm text-white hover:opacity-80  bg-[#52B2BF] xl:mx-5 xl:px-2 cursor-pointer"
									>
										Make Enquiry
									</ScrollLink>
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
									{isLoggedIn && (
										<Link to="/admin">
											<IconButton
												Icon={BiSolidDashboard}
												customColor="#333"
											/>
										</Link>
									)}
								</div>
							</div>
						</div>
					</div>
				</Disclosure>
				<div
					className={` ${collapsed && styles.slideDown} lg:hidden z-10`}
				>
					<div
						className={`${styles.slideDown} ${collapsed ? 'block' : 'hidden'}`}
					>
						<div
							className={`flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center justify-center items-center`}
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
			</div>
		</>
	);
};

export default NavBar;
