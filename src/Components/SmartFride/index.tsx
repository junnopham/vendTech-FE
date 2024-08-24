import { useInView } from 'react-intersection-observer';
import morsl02 from '../../assets/morsl-02.png';
import AddCircleIcon from '../base/AddCircleIcon';
const SmartFridge = () => {
	const { ref, inView } = useInView({
		threshold: 0.6,
		triggerOnce: true,
	});
	const animationClass = 'translate-y-full opacity-0';
	return (
		<div
			className="flex flex-col flex-wrap py-28 justify-center items-center lg:flex-row"
			ref={ref}
		>
			<div className="flex-1 basis-1/2 pl-3 pr-3 relative w-[100vw] lg:max-w-[750px] lg:min-w-[700px]">
				<img src={morsl02} className="h-full w-full " />
				<AddCircleIcon
					classesName={`absolute left-[30%] top-[5%] transition-all duration-1000 ${inView ? 'opacity-1' : animationClass}`}
				/>
				<AddCircleIcon
					classesName={`${inView ? 'opacity-1' : animationClass} absolute right-[34%] top-[20%] transition-all duration-1000`}
				/>
				<AddCircleIcon
					classesName={`${inView ? 'opacity-1' : animationClass} absolute left-[30%] top-[30%] transition-all duration-1000`}
				/>
				<AddCircleIcon
					classesName={`${inView ? 'opacity-1' : animationClass} absolute right-[34%] bottom-[40%] transition-all duration-1000`}
				/>
				<AddCircleIcon
					classesName={`${inView ? 'opacity-1' : animationClass} absolute left-[30%] bottom-[10%] transition-all duration-1000`}
				/>
			</div>
			<div className="flex flex-col flex-1 basis-1/2 justify-center px-6 max-w-[500px]">
				<h3 className="font-bold text-3xl text-main mb-2 text-[#52B2BF] leading-[64px] mt-6">
					Vend Tech Smart Fridge
				</h3>
				<p
					className={`mb-6 font-light transition-all duration-1000 ${inView ? 'opacity-1' : animationClass}`}
				>
					Our innovative, AI powered food solution, serving fresh and
					healthy options in smaller workplaces and public spaces.
				</p>
				<p className="mb-6 font-light">
					Customers simply tap a credit/debit card or scan the QR code
					to open the door, take their desired products and then close
					the door to be automatically charged for their selection.
				</p>
			</div>
		</div>
	);
};

export default SmartFridge;
