import vend from '../../asset/vend.jpg';
const MicroMarket = () => {
	return (
		<div className="flex pt-28">
			<div
				className="flex flex-col justify-center px-20 "
				style={{ maxWidth: 600 }}
			>
				<h3
					className="font-bold text-3xl text-main mb-2"
					style={{ color: '#e7592a', lineHeight: '64px' }}
				>
					Vend Tech Micro Market
				</h3>
				<p className="mb-6 font-light">
					Our automated, self-service café solution, serving fresh
					food, snacks and drinks inside the workplace.
				</p>
				<p className="mb-6 font-light">
					Available 24/7, our micro markets make healthy eating quick,
					easy and affordable, elevating employee wellbeing and
					productivity at minimal to no cost to you.
				</p>
			</div>
			<div className="px-20 ">
				<img src={vend} />
			</div>
		</div>
	);
};

export default MicroMarket;
