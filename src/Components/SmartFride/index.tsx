import { useInView } from 'react-intersection-observer';
import morsl02 from '../../assets/morsl-02.png';
import AddCircleIcon from '../base/AddCircleIcon';
const SmartFridge = () => {
	const { ref, inView } = useInView({
		threshold: 0.6,
		triggerOnce: true
	});
	const animationClass = 'translate-y-full opacity-0';
	return (
		<div className="flex py-28" ref={ref}>
			<div className="pl-3 pr-3 relative max-h-[520px]">
				<img src={morsl02} className="h-full w-full" />
				<AddCircleIcon
					classesName={`absolute left-[230px] top-[20px] transition-all duration-1000 ${inView ? 'opacity-1' : animationClass}`}
				/>
				<AddCircleIcon
					classesName={`${inView ? 'opacity-1' : animationClass} absolute right-[250px] top-[20%] transition-all duration-1000`}
				/>
				<AddCircleIcon
					classesName={`${inView ? 'opacity-1' : animationClass} absolute left-[230px] top-[30%] transition-all duration-1000`}
				/>
				<AddCircleIcon
					classesName={`${inView ? 'opacity-1' : animationClass} absolute right-[250px] bottom-[40%] transition-all duration-1000`}
				/>
				<AddCircleIcon
					classesName={`${inView ? 'opacity-1' : animationClass} absolute left-[230px] bottom-[10%] transition-all duration-1000`}
				/>
			</div>
			<div className="flex flex-col justify-center pl-3 pr-3">
				<h3
					className="font-bold text-3xl text-main mb-2"
					style={{ color: '#52B2BF', lineHeight: '64px' }}
				>
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
