import {
	Disclosure,
	DisclosureButton,
	DisclosurePanel
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../../asset/Logo.svg';
import { Link } from 'react-router-dom';
import { navigation } from '../../../const';
import { classNames } from '../../../util';
import styles from './styles.module.css';
import {
	BiLogoFacebook,
	BiLogoLinkedin,
	BiLogoInstagram,
	BiLogoGmail
} from 'react-icons/bi';
import { useEffect, useState } from 'react';

const NavBar = () => {
	let oldScrollY = 0;

	const [direction, setDirection] = useState('up');
	const [hiddenNav, setHiddenNav] = useState(false);
	const [hiddenSubNav, setHiddenSubNav] = useState(true);
	console.log(direction);

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
		console.log(window.scrollY);
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
	return (
		<>
			<Disclosure
				as="nav"
				className="bg-transparent fixed top-0 left-0 w-full z-50 flex pt-6 px-36"
				style={{
					visibility: hiddenNav ? 'hidden' : 'visible'
				}}
			>
				<div className="mx-auto px-2 sm:px-6 lg:px-16 w-full">
					<div className="relative flex h-16 items-center justify-between">
						<div
							className="absolute inset-y-0 left-0 flex items-center sm:hidden"
							style={{ flex: '1 1 0%' }}
						>
							{/* Mobile menu button*/}
							<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Open main menu</span>
								<Bars3Icon
									aria-hidden="true"
									className="block h-6 w-6 group-data-[open]:hidden"
								/>
								<XMarkIcon
									aria-hidden="true"
									className="hidden h-6 w-6 group-data-[open]:block"
								/>
							</DisclosureButton>
						</div>
						<div
							className="flex flex-1 items-center justify-center align-middle sm:justify-start"
							style={{ flex: '1 1 60%' }}
						>
							<div
								className="flex flex-shrink-0 items-center"
								style={{ flex: '1 1 30%', minWidth: 175 }}
							>
								<button className="text-white font-bold text-4xl ">
									Vend Tech
								</button>
							</div>
							<div
								className="hidden sm:ml-6 sm:block"
								style={{ flex: '1 1 100%' }}
							>
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
						<div
							className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 justify-center"
							style={{ minWidth: 300, flex: '1 1 20%' }}
						>
							<button
								style={{ backgroundColor: 'rgb(232, 90, 42)' }}
								className="px-5 py-1 font-thin text-sm text-white hover:opacity-80 mr-10"
							>
								Make Enquiry
							</button>
							<button className="mr-4">
								<BiLogoFacebook className="text-gray-300 hover:text-white" />
							</button>
							<button className="mr-4">
								<BiLogoLinkedin className="text-gray-300 hover:text-white" />
							</button>
							<button className="mr-4">
								<BiLogoInstagram className="text-gray-300 hover:text-white" />
							</button>
							<button className="mr-4">
								<BiLogoGmail className="text-gray-300 hover:text-white" />
							</button>
						</div>
					</div>
				</div>
			</Disclosure>
			<Disclosure
				as="nav"
				className="bg-white text-black fixed top-0 left-0 w-full z-50 flex pt-6 px-36"
				style={{ visibility: hiddenSubNav ? 'hidden' : 'visible' }}
			>
				<div className="mx-auto px-2 sm:px-6 lg:px-16 w-full">
					<div className="relative flex h-16 items-center justify-between">
						<div
							className="absolute inset-y-0 left-0 flex items-center sm:hidden"
							style={{ flex: '1 1 0%' }}
						>
							{/* Mobile menu button*/}
							<DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
								<span className="absolute -inset-0.5" />
								<span className="sr-only">Open main menu</span>
								<Bars3Icon
									aria-hidden="true"
									className="block h-6 w-6 group-data-[open]:hidden"
								/>
								<XMarkIcon
									aria-hidden="true"
									className="hidden h-6 w-6 group-data-[open]:block"
								/>
							</DisclosureButton>
						</div>
						<div
							className="flex flex-1 items-center justify-center align-middle sm:justify-start"
							style={{ flex: '1 1 60%' }}
						>
							<div
								className="flex flex-shrink-0 items-center"
								style={{ flex: '1 1 30%', minWidth: 175 }}
							>
								<button className="text-black font-bold text-4xl ">
									Vend Tech
								</button>
							</div>
							<div
								className="hidden sm:ml-6 sm:block"
								style={{ flex: '1 1 100%' }}
							>
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
													: 'text-black hover:text-black',
												'rounded-md px-3 py-2 text-sm font-medium'
											)}
										>
											{item.name}
										</Link>
									))}
								</div>
							</div>
						</div>
						<div
							className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 justify-center"
							style={{ minWidth: 300, flex: '1 1 20%' }}
						>
							<button
								style={{ backgroundColor: 'rgb(232, 90, 42)' }}
								className="px-5 py-1 font-thin text-sm text-white hover:opacity-80 mr-10"
							>
								Make Enquiry
							</button>
							<button className="mr-4">
								<BiLogoFacebook className="text-gray-300 hover:text-white" />
							</button>
							<button className="mr-4">
								<BiLogoLinkedin className="text-gray-300 hover:text-white" />
							</button>
							<button className="mr-4">
								<BiLogoInstagram className="text-gray-300 hover:text-white" />
							</button>
							<button className="mr-4">
								<BiLogoGmail className="text-gray-300 hover:text-white" />
							</button>
						</div>
					</div>
				</div>
			</Disclosure>
		</>
	);
};

export default NavBar;
