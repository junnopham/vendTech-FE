import { useInView } from 'react-intersection-observer';
import vend from '../../assets/vend.jpg';
import AddCircleIcon from '../base/AddCircleIcon';
const MicroMarket = () => {
	const { ref, inView } = useInView({
		threshold: 0.6,
		triggerOnce: true,
	});

	return (
		<div
			className="flex flex-wrap  flex-col xl:flex-row pt-28 justify-center items-center"
			ref={ref}
		>
			<div className="flex flex-col flex-1 basis-full lg:basis-1/2 justify-center px-6 max-w-[600px] min-w-[300px]">
				<h3 className="font-bold text-3xl text-main mb-2 text-[#52B2BF] leading-[64px]">
					Vend Tech Micro Market
				</h3>
				<p
					className={`mb-6 font-light transition-all duration-1000 ${inView ? 'opacity-1' : 'translate-y-full opacity-0'}`}
				>
					Our automated, self-service café solution, serving fresh
					food, snacks and drinks inside the workplace.
				</p>
				<p className="mb-6 font-light">
					Available 24/7, our micro markets make healthy eating quick,
					easy and affordable, elevating employee wellbeing and
					productivity at minimal to no cost to you.
				</p>
			</div>
			<div className="mx-6 relative flex-1 lg:basis-1/2 max-w-[600px]">
				<img src={vend} className="w-full h-full" />
				<AddCircleIcon
					classesName="absolute top-[10%] right-[15%]"
					title="Operated within a secure and controlled environment, with smart security and inventory controls."
				/>
				<AddCircleIcon
					classesName="absolute top-[30%] left-[40%]"
					position="left"
					title="We manage the design, installation and launch, helping to create a welcoming environment for your staff"
				/>
				<AddCircleIcon
					classesName="absolute bottom-[20%] left-[20%]"
					position="bottom"
					title="A modular design, customised to suit the size and demographics of your team"
				/>
				<AddCircleIcon
					classesName="absolute top-[50%] right-0"
					position="left"
					title="User friendly kiosks micro-market technology brand, ensuring speed and convenience"
				/>
			</div>
		</div>
	);
};

export default MicroMarket;
