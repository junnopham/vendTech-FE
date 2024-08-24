const AboutPage = () => {
	return (
		<div>
			{/* PART 1 */}
			<div className="h-96 bg-[url('https://autoretailtech.com.au/wp-content/uploads/2023/07/art-banner.jpg')] relative">
				<h1 className="text-white text-[40px] font-bold absolute top-[50%] left-[10%]">
					ABOUT US
				</h1>
			</div>
			{/* PART 2 */}
			<div className="bg-black">
				<div className="flex flex-wrap px-4 py-20 lg:mx-16 xl:mx-36">
					<div className="flex flex-wrap">
						<div className="flex-1 lg:basis-[65%] hidden lg:block">
							<img
								src="https://autoretailtech.com.au/wp-content/uploads/2023/10/6-DSC01785.jpeg"
								className="h-full"
							/>
						</div>
						<div className="flex flex-col md:flex-row flex-wrap flex-1 basis-full lg:flex-col lg:basis-[35%]">
							<div className="flex-1 md:px-2">
								<img
									src="https://autoretailtech.com.au/wp-content/uploads/2023/10/7-DSC01787-1024x965.jpeg"
									className="h-full w-full"
								/>
							</div>

							<div className="flex-1 flex flex-col justify-center items-center p-10 md:p-8  bg-white ">
								<h2 className="text-[#1D1D1B] text-[38px] font-sans font-normal leading-[1] pb-5">
									WHO WE ARE
								</h2>
								<p className="text-base text-[#1D1D1B] font-normal text-left ">
									We’re product innovators. We’re focused on
									what’s smart. Smart technology. Smart
									design. Smart solutions. We don’t just offer
									automated retail solutions, we create them.
								</p>
							</div>
						</div>
					</div>
					<div className="text-white text-center mt-20 mx-20 md:mx-25 lg:mx-40">
						<h4 className="mb-5 leading-[48px] text-[38px]">
							WHY US
						</h4>
						<p className="mb-5">
							We are the sole Jofemar distributor for more than 28
							years in Australia and have imported, operated, and
							supplied in excess of 10,000 Jofemar vending
							machines to the Australian market. We continue to
							operate and provide servicing and support for all
							Jofemar equipment Australia- wide.
						</p>
						<p className="mb-5">
							Automated Retail Technologies provides a full level
							of support - IT backup, spare parts, vending machine
							equipment maintenance, installation services and
							training across all states and ongoing training to
							staff at no cost.
						</p>
						<p className="mb-5">
							Our factory trained team has extensive technical
							knowledge of all aspects of the operations of the
							vending machines with technical support not just in
							the APAC region but direct channels within the
							Jofemar factory in Spain.
						</p>
					</div>
				</div>
			</div>
			{/* PART 3 */}
			<div className=" relative bg-[url(https://autoretailtech.com.au/wp-content/uploads/2023/10/autoretailtech-img.jpg)] h-[90vh]">
				<div className="absolute bg-[#44295B] px-5 py-10 top-0 left-0 translate-x-[6%] translate-y-[1%] sm:translate-y-[5%] text-white w-[90vw] min-h-[70vh] max-w-[90vh] md:w-[70vw] md:h-[70vh] lg:px-10 lg:py-10 xl:top-[20px] xl:left-[30px] xl:w-[45vw] xl:px-[50px] xl:py-10">
					<h4 className="text-[38px] mb-5 leading-[48px]">
						<p>Integrated</p>
						<p>Technologies</p>
					</h4>

					<div className="text-base pr-[10px]">
						<p className="mb-5">
							Ensure you are well-positioned to be flexible and
							adaptable to changing member needs. Our integrated
							approach allows for future growth and expansion, as
							we can easily scale up operations without worrying
							about compatibility issues.
						</p>
						<p className="mb-5">
							We have a distinct advantage as all of our equipment
							and software seamlessly integrate with each other.
							Whether it's our automated micro markets, click &
							collect & parcel delivery lockers, smart fridges, or
							any other equipment. All building management
							software, courier integration, and member management
							API can be easily integrated.
						</p>
						<p className="mb-5">
							This provides a comprehensive and efficient solution
							for our clients, streamlining their operations and
							enhancing their overall customer experience
						</p>
					</div>
				</div>
			</div>
			{/* PART 4 */}
			<div className="my-[100px] mx-20 xl:mx-[150px]">
				<div className="text-center mb-5">
					<p className="text-[#E41F67] text-base font-semibold mb-[10px]">
						THROUGH CIRCULAR ECONOMY
					</p>
					<h4 className="text-[24px] font-medium leading-[34px] xl:text-[50px] xl:leading-[52px] uppercase">
						Sustainability
					</h4>
				</div>
				<div className="flex flex-col flex-wrap md:flex-row">
					<div className="flex-1 md:basis-[50%] flex flex-col justify-center">
						<div className="mb-5">
							<h4 className="text-[18px] xl:text-[20px] font-bold leading-8">
								Carbon Emissions R
							</h4>
							<p className="font-light">
								Reduce the need for residents to travel to the
								nearest stores, which will ultimately reduce
								residents' carbon footprint on a daily basis.
							</p>
						</div>
						<div className="mb-5">
							<h4 className="text-[18px] xl:text-[20px] leading-8 font-bold">
								Self-Sustaining Ecosystem
							</h4>
							<p className="font-light">
								Creating a self-sustaining living ecosystem
								making an impactful contribution towards
								sustainable living given the volume of Aria
								Property Group residents.
							</p>
						</div>
						<div className="mb-5">
							<h4 className="text-[18px] xl:text-[20px] leading-8 font-bold">
								Nothing Wasted
							</h4>
							<p className="font-light">
								Equipped with real-time monitoring system that
								automatically indicates low stock levels needing
								to to be replenished and alerts for perishables
								that are coming close to their use-by date,
								helping to manage and reduce waste.
							</p>
						</div>
						<div className="mb-5">
							<h4 className="text-[18px] xl:text-[20px] leading-8 font-bold">
								Minimized Packaging
							</h4>
							<p className="font-light">
								Unlike conventional retail, our machines enable
								products/goods to be vended with minimal or no
								packaging.
							</p>
						</div>
					</div>
					<div className="flex-1 md:basis-[50%] flex justify-center">
						<img
							src="https://autoretailtech.com.au/wp-content/uploads/2023/11/about-us-2.2-696x1024.jpg"
							className="h-full"
						/>
					</div>
				</div>
			</div>
			{/* PART 5 */}
			<div className="relative bg-[url('https://autoretailtech.com.au/wp-content/uploads/2023/07/art-banner.jpg')] min-h-[40vh] lg:min-h-[60vh]">
				<div className="absolute bg-[url('https://autoretailtech.com.au/wp-content/uploads/2023/08/footer-banner-1.jpg')] max-w-[80vw] min-h-[30vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full lg:max-w-full lg:min-h-[50vh]">
					<div className="absolute z-10 bg-[#AC4A6D] text-white w-[85%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col h-full px-6 justify-center items-center md:h-[80%] md:px-[30px] md:py-24 md:max-w-[50vw] lg:max-w-[28vw] lg:top-[50%] lg:left-[20%] lg:px-10">
						<p className="text-[15px] lg:text-xl mb-5">
							Read the latest News & Updates from the world of
							automated retail and delivery technologies:
						</p>
						<div className="bg-[#44295B] flex flex-col justify-center align-middle p-[8px] text-center">
							<h4 className="text-[15px] lg:text-[17px]">
								CHECK BACK SOON
							</h4>
							<p className="text-[12px] lg:text-[14px]">
								Once posts are published, you'll see them here.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
