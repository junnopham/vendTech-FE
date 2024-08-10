import { RiAddCircleFill } from 'react-icons/ri';
import styles from './style.module.css';
import { Tooltip } from 'antd';
type propsIconType = {
	classesName?: string;
	title?: string;
	position?: 'top' | 'left' | 'right' | 'bottom';
};
const AddCircleIcon = (props: propsIconType) => {
	const { classesName, title, position = 'top' } = props;
	return (
		<div className={`${classesName} ${styles.wrap}`}>
			<div className={styles.wrapIcon}>
				<Tooltip
					title={
						<p className="text-black max-w-[150px] text-xs px-1 text-left text-pretty">
							{title}
						</p>
					}
					placement={position}
					color="white"
				>
					<RiAddCircleFill className={`${styles.icon}`} />
				</Tooltip>
			</div>
		</div>
	);
};

export default AddCircleIcon;
