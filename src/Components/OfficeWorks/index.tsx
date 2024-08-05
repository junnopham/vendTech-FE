import morsl03 from '../../assets/morsl-03.jpg';
import { itemInfo1 } from '../../const';
import Card from '../base/Card';
const OfficeWorks = () => {
	return (
		<div className="pt-28 pb-40" style={{ backgroundColor: '#ecece5' }}>
			<div className="flex px-20 pb-24" style={{ flex: '1 1 50%' }}>
				<div
					className="px-10 flex justify-center align-middle"
					style={{ flex: '1 1 50%' }}
				>
					<img
						src={morsl03}
						className="object-cover rounded-lg"
						style={{ maxWidth: 500, maxHeight: 300 }}
					/>
				</div>
				<div
					className="flex flex-col justify-center px-10 "
					style={{ flex: '1 1 50%' }}
				>
					<h3
						className="font-bold text-3xl text-main mb-2"
						style={{ color: '#e7592a', lineHeight: '64px' }}
					>
						Did you know?
					</h3>
					<p className="mb-6 font-light">
						Research suggests that effective health and wellbeing
						programs offer a <b>significant return on investme</b>
						<strong>nt for employers</strong>. How? They can lead to
						increased productivity, reduced absenteeism, improved
						staff morale and better engagement at work.
					</p>
					<p className="mb-6 font-light">
						Watch the video or download the written case study to
						learn how Morsl has improved employee health and
						wellbeing at Officeworks:
					</p>
					<a
						href="https://www.morsl.com.au/wp-content/uploads/2021/09/OFFICEWORKS-CASE-STUDY.pdf"
						target="_blank"
						rel="noreferrer"
						style={{ color: '#e85a2a' }}
					>
						OFFICEWORKS CASE STUDY
					</a>
				</div>
			</div>
			<div className="px-24">
				<Card items={itemInfo1} />
			</div>
		</div>
	);
};

export default OfficeWorks;
