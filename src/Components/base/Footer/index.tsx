import React from 'react';

const Footer = () => {
	return (
		<div className="min-h-[560px] bg-[#280D30] ">
			<div className="h-full p-[76px_90px] flex justify-between">
				<div className="w-[23%]">
					<div className="text-[#52B2BF] mb-[20px] text-[25px]">
						Services
					</div>
					<ul className="text-white text-[16px]">
						<li className="mb-[30px] hover:opacity-80 cursor-pointer">
							Catering and Engagement
						</li>
						<li className="mb-[30px] hover:opacity-80 cursor-pointer">
							Breakroom Procurement Solutions
						</li>
						<li className="mb-[30px] hover:opacity-80 cursor-pointer">
							Coffee Solutions
						</li>
						<li className="mb-[30px] hover:opacity-80 cursor-pointer">
							Flexible solutions to suit any operating mode
						</li>

						<div
							className="flex flex-shrink-0 items-center hover:opacity-80 cursor-pointer"
							style={{ flex: '1 1 30%', minWidth: 175 }}
						>
							<button className="text-white font-bold text-4xl ">
								Vend Tech
							</button>
						</div>
					</ul>
				</div>

				<div className="w-[23%]">
					<div className="text-[#52B2BF] mb-[30px] text-[25px]">
						Links
					</div>
					<ul className="text-white text-[16px] ">
						<li className="mb-[30px] hover:opacity-80 cursor-pointer">
							How it Works
						</li>
						<li className="mb-[30px] hover:opacity-80 cursor-pointer">
							What we offer
						</li>
						<li className="mb-[30px] hover:opacity-80 cursor-pointer">
							Why Morsl
						</li>
						<li className="mb-[30px] hover:opacity-80 cursor-pointer">
							Our Team
						</li>
						<li className="mb-[30px] hover:opacity-80 cursor-pointer">
							Media
						</li>
						<li className="mb-[30px] hover:opacity-80 cursor-pointer">
							Micro Markets
						</li>
					</ul>
				</div>

				<div style={{ width: '23%' }}>
					<div className="text-[#52B2BF] mb-[20px] text-[25px]">
						Contact Us
					</div>
					<div className="text-[16px] text-white italic">
						For supplier enquiries:
					</div>
					<div className=" pt-[20px] hover:opacity-80 cursor-pointer">
						<img
							src="https://www.morsl.com.au/wp-content/uploads/2023/12/King-Cabrera-Contact-Card-1024x752.png"
							alt="King Cabrera"
							className="transition-opacity duration-300"
						/>
					</div>
				</div>
				<div style={{ width: '23%' }}>
					<div className="text-[16px] text-white italic">
						For new services{' '}
						<span className="not-italic">enquiries:</span>
					</div>
					<div className=" pt-[20px] hover:opacity-80 cursor-pointer">
						<img
							src="https://www.morsl.com.au/wp-content/uploads/2023/11/Anna-Lewin-Tzannes-Contact-Card-1-1024x755.png"
							alt="Anna Lewin Tzannes"
							className="transition-opacity duration-300"
						/>
					</div>
					<div className=" pt-[20px] hover:opacity-80 cursor-pointer">
						<img
							src="https://www.morsl.com.au/wp-content/uploads/2023/11/Hugh-McGlone-Contact-Card-1024x752.png"
							alt="Hugh McGlone"
							className="transition-opacity duration-300"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
