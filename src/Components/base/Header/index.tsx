import NavBar from '../Nav';
import SubNavBar from '../SubNav';

interface IProps {
	type?: 'main' | 'sub';
}
const Header = (props: IProps) => {
	const { type = 'main' } = props;
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
				{type === 'main' && <NavBar />}
				{type === 'sub' && <SubNavBar />}
			</div>
		</div>
	);
};

export default Header;
