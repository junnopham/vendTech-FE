import NavBar from '../Nav';
import SubNavBar from '../SubNav';

interface IProps {
	type?: 'main' | 'sub';
	toggleCollapsed?: () => void;
}
const Header = (props: IProps) => {
	const { type = 'main', toggleCollapsed } = props;
	return (
		<div className="relative">
			<div className="flex justify-center">
				<video
					src={require('../../../assets/background.mp4')}
					autoPlay
					loop
					muted
					className="h-[50vh] md:h-[75vh] w-full object-fill
					"
				/>
			</div>
			<div>
				{type === 'main' && (
					<NavBar toggleCollapsed={toggleCollapsed} />
				)}
				{type === 'sub' && <SubNavBar />}
			</div>
		</div>
	);
};

export default Header;
