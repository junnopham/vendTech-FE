import sheraton from '../../../assets/clients/sheraton.jpg';
import officeworks from '../../../assets/clients/officeworks.jpg';
import queenland from '../../../assets/clients/queenland-police.jpg';
import intercontinental from '../../../assets/clients/intercontinental.jpg';
import mantra from '../../../assets/clients/mantra.jpg';
import audi from '../../../assets/clients/audi.jpg';
import target from '../../../assets/clients/target.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
	const clients = [
		officeworks,
		sheraton,
		intercontinental,
		queenland,
		mantra,
		audi,
		target,
	];
	const contact = [
		{ label: 'Services', url: 'https://www.facebook.com/' },
		{ label: 'Links', url: 'https://www.facebook.com/' },
		{ label: 'Photo Gallery', url: 'https://www.facebook.com/' },
		{ label: 'What we offer', url: 'https://www.facebook.com/' },
		{ label: 'Media', url: 'https://www.facebook.com/' },
	];

	return (
		<div className="">
			<div className="h-full lg:p-[76px_90px] flex flex-row justify-between pl-5">
				<div className="lg:w-[60%] ">
					<div className="text-[#52B2BF] mb-[20px] text-[28px] font-semibold">
						Our Clients
					</div>
					<div className="flex flex-wrap">
						{clients.map((client, index) => (
							<img
								src={client}
								style={{ height: '120px' }}
								alt="client"
								key={index}
							/>
						))}
					</div>
				</div>

				<div className="lg:w-[40%]  mb-8">
					<div>
						<div className="text-[#52B2BF] mb-[20px] text-[28px] font-semibold">
							Our contact
						</div>
						<div className="flex flex-wrap">
							{contact.map((contact, index) => (
								<Link
									to={contact.url}
									className="rounded-md pe-3 py-2 text-lg font-medium"
									key={index}
								>
									{contact.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
			<div className="copy-right text-center pb-1">
				Copyright © 2024 Ezvending Pty ltd - All Rights Reserved.
			</div>
		</div>
	);
};

export default Footer;
