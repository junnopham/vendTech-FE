const Footer = () => {
	return (
		<div className="min-h-[560px] bg-[#280D30]">
			<div className="h-full lg:p-[76px_90px] flex flex-col justify-between pl-5 lg:flex-row">
				<div className="lg:w-[23%] ">
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

						<div className="flex flex-shrink-0 items-center hover:opacity-80 cursor-pointer flex-1 basis-1/3 lg:min-w-[175px] py-6">
							<button className="text-white font-bold text-4xl ">
								Vend Tech
							</button>
						</div>
					</ul>
				</div>

				<div className="lg:w-[23%] ">
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

				<div className="lg:w-[23%]  mb-8">
					<div>
						<div className="text-[#52B2BF] mb-[20px] text-[25px]">
							Contact Us
						</div>
						<div className="text-[16px] text-white italic">
							For supplier enquiries:
						</div>
						<div className=" pt-[20px] hover:opacity-80 cursor-pointer flex justify-center items-center">
							<img
								src="https://www.morsl.com.au/wp-content/uploads/2023/12/King-Cabrera-Contact-Card-1024x752.png"
								alt="King Cabrera"
								className="transition-opacity duration-300 w-[60%] lg:w-full"
							/>
						</div>
					</div>
				</div>
				<div className="lg:w-[23%] pb-16">
					<div className="text-[16px] text-white italic">
						For new services
						<span className="not-italic">enquiries:</span>
					</div>
					<div className=" pt-[20px] hover:opacity-80 cursor-pointer flex justify-center items-center">
						<img
							src="https://www.morsl.com.au/wp-content/uploads/2023/11/Anna-Lewin-Tzannes-Contact-Card-1-1024x755.png"
							alt="Anna Lewin Tzannes"
							className="transition-opacity duration-300 w-[60%] lg:w-full"
						/>
					</div>
					<div className=" pt-[20px] hover:opacity-80 cursor-pointer flex justify-center items-center">
						<img
							src="https://www.morsl.com.au/wp-content/uploads/2023/11/Hugh-McGlone-Contact-Card-1024x752.png"
							alt="Hugh McGlone"
							className="transition-opacity duration-300 w-[60%] lg:w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
