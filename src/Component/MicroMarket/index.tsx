import morsl01 from '../../asset/morsl-01.png';
const MicroMarket = () => {
	return (
		<div className="flex pt-28">
			<div className="flex flex-col justify-center pl-3 pr-3">
				<h3
					className="font-bold text-3xl text-main mb-2"
					style={{ color: '#e7592a', lineHeight: '64px' }}
				>
					Morsl Micro Market
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
			<div className="pl-3 pr-3">
				<img src={morsl01} />
			</div>
		</div>
	);
};

export default MicroMarket;
