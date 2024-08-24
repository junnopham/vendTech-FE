import { useInView } from 'react-intersection-observer';
import { imageFoodList, itemFoodList } from '../../const';
import { CiCreditCard1 } from 'react-icons/ci';

const FoodItem = () => {
	const { ref, inView } = useInView({
		threshold: 0.25,
		triggerOnce: true,
	});

	return (
		<div className="md:px-16 xl:px-24 py-[calc(100vw*0.1)]" ref={ref}>
			<div
				className={`flex flex-col lg:flex-row mb-6 transition-all duration-1000 ${inView ? 'opacity-1' : 'translate-y-full opacity-0'}`}
			>
				{imageFoodList.map((img) => {
					return (
						<div
							className="text-center flex justify-center p-3"
							key={img.id}
						>
							<img src={img.url} className="max-w-[50%] h-full" />
						</div>
					);
				})}
			</div>
			<div
				className={`flex flex-col flex-wrap justify-center items-center text-center pt-5 xl:px-20 transition-all duration-1000 ${inView ? 'opacity-1' : 'translate-y-full opacity-0'} md:flex-row`}
			>
				{itemFoodList.map((item) => {
					return (
						<div
							className="flex flex-col py-3 xl:p-9 max-w-[300px]  "
							key={item.id}
						>
							<div className="flex justify-center mb-6">
								<CiCreditCard1 className="h-[57px] w-[50px] opacity-25 hover:cursor-pointer" />
							</div>
							<h5 className="text-2xl font-extrabold leading-6 text-[#290e30] mb-4 px-2">
								{item.title}
							</h5>
							<p className="text-[#0A0A0A] opacity-65 leading-[32px] ">
								{item.description}
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default FoodItem;
