const OurProduct = () => {
	return (
		<div className="lg:pt-28 px-4 lg:pb-32">
			<div className="px-3 pb-6">
				<h3 className="font-bold text-3xl text-main mb-2 text-[#52B2BF] leading-[64px]">
					Our Products
				</h3>
			</div>
			<div className="flex flex-wrap px-3 gap-x-28 font-thin">
				<ul className="list-disc flex-1 lg:basis-1/2 w-full">
					<li className="mb-8 pl-9 leading-8">
						We survey employees, aligning our offering to meet their
						needs and preferences. We can offer gluten-free,
						vegetarian, vegan, paleo, nut free, kosher and halal
						options.
					</li>

					<li className="mb-8 pl-9 leading-8">
						A broad and rotating range of 1,000+ products, including
						fresh fruit, ready-to-eat meals, sandwiches, wraps,
						salads, sushi, snacks and drinks.
					</li>
					<li className="mb-8 pl-9 leading-8">
						Our markets follow the 70/30 rule to encourage healthy
						and balanced eating habits, with 70% delicious
						better-for-you options and 30% indulgent treats. This
						ensures that we cater to everyone’s tastes and compete
						effectively with other providers.
					</li>
				</ul>
				<div className=" flex-1 basis-full max-w-[40%]  hidden md:block md:basis-1/2">
					<img
						src={
							'https://www.morsl.com.au/wp-content/uploads/2021/08/shutterstock_397748143-1536x1141.jpg'
						}
						loading="lazy"
						decoding="async"
						className="w-full"
						style={{
							borderRadius: 5,
							boxShadow:
								'rgba(0,0,0,.04) 0 1px 0,rgba(0,0,0,.05) 0 2px 7px,rgba(0,0,0,.06) 0 12px 22px',
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default OurProduct;
