import background from '../../../assets/backgrond.jpg';
import videoBg from '../../../assets/background.mp4';
import NavBar from '../Nav';
import header from '../../../assets/header.png';

const navigation = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'Contact Us', href: '/contactUs', current: false },
	{ name: 'Food and Drink', href: '/foodAndDrink', current: false },
	{ name: 'About Us', href: '/aboutUs', current: false }
];

const Header = () => {
	return (
		<div className="relative">
			<div className="h-full w-screen">
				<video
					src={require('../../../assets/background.mp4')}
					autoPlay
					loop
					muted
					className="w-full h-full object-container
					"
				/>
			</div>
			<div>
				<NavBar />
			</div>
		</div>
	);
};

export default Header;
