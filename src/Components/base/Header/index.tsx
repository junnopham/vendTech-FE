import NavBar from '../Nav';
import SubNavBar from '../SubNav';

interface IProps {
	type?: 'main' | 'sub';
	toggleCollapsed?: () => void;
	collapsed?: boolean;
}

const Header = (props: IProps) => {
	const { type = 'main', toggleCollapsed, collapsed } = props;
	return (
		<div>
			<div>
				{type === 'main' && (
					<NavBar
						toggleCollapsed={toggleCollapsed}
						collapsed={collapsed}
					/>
				)}
				{type === 'sub' && (
					<SubNavBar
						toggleCollapsed={toggleCollapsed}
						collapsed={collapsed}
					/>
				)}
			</div>
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
		</div>
	);
};

export default Header;
