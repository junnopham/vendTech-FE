import morsl03 from '../../assets/morsl-03.jpg';
import { itemInfo1 } from '../../const';
import Card from '../base/Card';

const OfficeWorks = () => {
	return (
		<div className=" py-10 lg:pt-28 lg:pb-40 bg-[#ecece5]">
			<div className="flex flex-col flex-wrap justify-center items-center lg:px-20 lg:pb-24 lg:flex-row">
				<div className="flex flex-1 sm:basis-auto xl:basis-1/2 px-10 justify-center align-middle xl:max-w-[700px] ">
					<img
						src={morsl03}
						className="object-cover rounded-lg xl:w-full"
					/>
				</div>
				<div className="flex flex-col flex-1 sm:basis-auto xl:basis-1/2 justify-center px-10 max-w-[800px]">
					<h3 className="font-bold text-3xl text-main mb-2 text-[#52B2BF] leading-[64px]">
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
					<span className="text-[#52B2BF]">
						OFFICEWORKS CASE STUDY
					</span>
				</div>
			</div>
			<div className="px-24">
				<Card items={itemInfo1} />
			</div>
		</div>
	);
};

export default OfficeWorks;
