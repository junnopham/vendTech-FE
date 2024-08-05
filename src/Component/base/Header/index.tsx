import background from '../../../asset/backgrond.jpg';
import NavBar from '../Nav';
import header from '../../../asset/header.png';

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
					src={header}
					alt="background"
					className="w-full h-full object-container"
				/>
				{/* <iframe src="https://www.youtube.com/watch?v=mwlK17pilrU"></iframe>
				 */}
				{/* <iframe
					width="932"
					height="524"
					src="https://www.youtube.com/embed/mwlK17pilrU"
					title="The Jofemar Advantage"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				></iframe> */}
				{/* <video src="https://www.youtube.com/embed/mwlK17pilrU"></video> */}
			</div>
			<div>
				<NavBar />
			</div>
		</div>
	);
};

export default Header;
