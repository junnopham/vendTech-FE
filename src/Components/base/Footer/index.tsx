import sheraton from '../../../assets/clients/sheraton.jpg';
import officeworks from '../../../assets/clients/officeworks.jpg';
import queenland from '../../../assets/clients/queenland-police.jpg';
import intercontinental from '../../../assets/clients/intercontinental.jpg';
import mantra from '../../../assets/clients/mantra.jpg';
import audi from '../../../assets/clients/audi.jpg';
import target from '../../../assets/clients/target.jpg';

const Footer = () => {
	const clients = [
		sheraton,
		officeworks,
		intercontinental,
		queenland,
		mantra,
		audi,
		target,
	];

	return (
		<div className="min-h-[560px]">
			<div className="h-full lg:p-[76px_90px] flex flex-col justify-between pl-5">
				<div className="lg:w-[100%] ">
					<div className="text-[#52B2BF] mb-[20px] text-[25px]">
						Our Client
					</div>
					<div className="flex flex-wrap">
						{clients.map((client) => (
							<img
								src={client}
								style={{ height: '120px' }}
								alt="client"
							/>
						))}
					</div>
				</div>

				<div className="lg:w-[100%]  mb-8">
					<div>
						<div className="text-[#52B2BF] mb-[20px] text-[25px]">
							Customer Think About Us
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
