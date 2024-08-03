import background from '../../../asset/backgrond.jpg';
import NavBar from '../Nav';

const navigation = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'Contact Us', href: '/contactUs', current: false },
	{ name: 'Food and Drink', href: '/foodAndDrink', current: false },
	{ name: 'About Us', href: '/aboutUs', current: false }
];

const Header = () => {
	return (
		<div className="relative">
			<div className="h-screen w-screen">
				<img
					src={background}
					alt="background"
					className="w-full h-full object-cover"
				/>
			</div>
			<div>
				<NavBar />
			</div>
		</div>
	);
};

export default Header;
