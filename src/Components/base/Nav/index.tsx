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
	BiLogoGmail
} from 'react-icons/bi';
import { useEffect, useState } from 'react';

interface IconButtonProps {
	Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
	customColor?: string;
}

const NavBar = () => {
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
				className="bg-transparent fixed top-0 left-0 w-full z-50 flex py-6 px-36"
				style={{
					transform: hiddenNav
						? 'translateY(-100%)'
						: 'translateY(0px)',
					transition: 'transform .5s ease,box-shadow .5s ease'
				}}
			>
				<div className="mx-auto sm:px-6 lg:px-16 w-full">
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
							style={{ flex: '1 1 70%' }}
						>
							<div
								className="flex flex-shrink-0 items-center"
								style={{ flex: '1 1 30%', minWidth: 175 }}
							>
								<button className="text-white font-bold text-4xl ">
									<Link to="/"> Vend Tech </Link>
								</button>
							</div>
							<div
								className="hidden sm:ml-6 sm:block"
								style={{ flex: '1 1 70%' }}
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
							style={{ minWidth: 300, flex: '1 1 30%' }}
						>
							<button className="px-5 py-2 font-thin text-sm text-white hover:opacity-80 mx-5 bg-[#52B2BF]">
								Make Enquiry
							</button>
							<button className="mr-4">
								<IconButton
									Icon={BiLogoFacebook}
									customColor="#fff"
								/>
							</button>
							<button className="mr-4">
								<IconButton
									Icon={BiLogoLinkedin}
									customColor="#fff"
								/>
							</button>
							<button className="mr-4">
								<IconButton
									Icon={BiLogoInstagram}
									customColor="#fff"
								/>
							</button>
							<button className="mr-4">
								<IconButton
									Icon={BiLogoGmail}
									customColor="#fff"
								/>
							</button>
						</div>
					</div>
				</div>
			</Disclosure>
			<Disclosure
				as="nav"
				className="bg-white text-black fixed top-0 left-0 w-full z-50 flex py-6 px-36"
				style={{
					transform: hiddenSubNav
						? 'translateY(-100%)'
						: 'translateY(0px)',
					transition:
						'transform .3s ease,height .3s ease,background .3s ease,opacity .3s ease,border-color .3s ease,box-shadow .3s ease,backdrop-filter .3s ease'
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
								<button className="text-black font-bold text-4xl ">
									<Link to="/"> Vend Tech </Link>
								</button>
							</div>
							<div
								className="hidden sm:ml-6 sm:block"
								style={{ flex: '1 1 70%' }}
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
							<button className="px-5 py-2 font-thin text-sm text-white hover:opacity-80 mx-5 bg-[#52B2BF]">
								Make Enquiry
							</button>
							<button className={styles.iconSubNav}>
								<IconButton Icon={BiLogoFacebook} />
							</button>
							<button className={styles.iconSubNav}>
								<IconButton Icon={BiLogoLinkedin} />
							</button>
							<button className={styles.iconSubNav}>
								<IconButton Icon={BiLogoInstagram} />
							</button>
							<button className={styles.iconSubNav}>
								<IconButton Icon={BiLogoGmail} />
							</button>
						</div>
					</div>
				</div>
			</Disclosure>
		</>
	);
};

export default NavBar;
