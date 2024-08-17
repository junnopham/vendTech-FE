import NavBar from '../Nav';
import SubNavBar from '../SubNav';

interface IProps {
	type?: 'main' | 'sub';
}
const Header = (props: IProps) => {
	const { type = 'main' } = props;
	return (
		<div className="relative">
			<div className="flex justify-center">
				<video
					src={require('../../../assets/background.mp4')}
					autoPlay
					loop
					muted
					className="w-[75%vw] h-full object-container

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
