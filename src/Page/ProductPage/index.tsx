import { useEffect, useState } from 'react';
import { AiFillAlipaySquare } from 'react-icons/ai';
import { getProducts } from '../../service/product.service';

const ProductPage = () => {
	const [products, setProducts] = useState<[]>([]);
	console.log(products);

	useEffect(() => {
		const getProduct = async () => {
			const productResponse = await getProducts(9);
			setProducts(productResponse?.data);
		};
		getProduct();
	}, []);
	return (
		<div>
			{/* PART 1 */}
			<div className="mt-10 px-48">
				<h2 className="text-[#1D1D1B] text-[30px] leading-[1] mb-5 uppercase p-[30px]">
					We don't just offer retail solutions, we create them.
				</h2>
				<div className="flex flex-wrap my-[30px]">
					<div className="flex flex-col flex-1 basis-1/2 p-[30px] items-start justify-between">
						<div className="text-left text-lg">
							<p className="mb-5">
								Covid-19 has exposed problematic business models
								and accelerated digital and customer
								transformation by more than a decade.
							</p>
							<p className="mb-5">
								As businesses and retailers scramble in and out
								of lockdowns, customers are also demanding
								alternative solutions to meet their everyday
								shopping and delivery needs. Contactless point
								of sale, click & collect and 24/7 accessibility
								are fundamental for retail businesses to prosper
								into this future of convenience.
							</p>
							<p className="mb-5">
								Attention must be turned to strengthen consumer
								bases and maximise on all forms of traffic. Our
								solutions exist to drive this.
							</p>
						</div>
						<button className="bg-[#2D2E82] text-[#fff] text-[15px] font-medium px-5 py-[10px]">
							Learn More
						</button>
					</div>
					<div className="flex-1 basis-1/2 p-[30px]">
						<img src="https://autoretailtech.com.au/wp-content/uploads/2023/07/home-img.jpg" />
					</div>
				</div>
			</div>
			{/* PART 2 */}
			<div className="relative bg-[url('https://autoretailtech.com.au/wp-content/uploads/2023/07/art-banner.jpg')] h-[20vh]">
				<h2 className="absolute uppercase text-[40px] font-bold leading-[1] text-[#fff] top-[50%] -translate-y-1/2 left-[10%]">
					Our Products & Solutions
				</h2>
			</div>
			{/* PART 3 */}
			<div className="px-48 py-[50px] bg-[#F5F5F5] flex flex-wrap w-full justify-start">
				{products?.map((product: any) => (
					<div
						className="bg-white px-[50px] py-[30px] mx-[5px] mb-[10px] min-h-[430px] w-[350px] max-w-[350px] min-w-[350px] flex-1 basis-1/4"
						key={product?.id}
					>
						<div className="mb-5 min-h-[250px] flex justify-center items-center">
							<img src={product?.image.url} className="h-full" />
						</div>
						<h2 className="text-[#1D1D1B] text-[25px] text-left font-medium uppercase">
							{product?.name}
						</h2>
						<div className="text-[#1D1D1B] text-[15px] text-left mb-5">
							<p>{product?.description}</p>
						</div>
						<div className="bg-[#1D1D1B] my-5 h-[1px]"></div>
						<button className="bg-[#2D2E82] px-5 py-[10px] text-[15px] font-bold text-white">
							More Details
						</button>
					</div>
				))}
			</div>
			{/* PART 4 */}
			<div className="flex flex-wrap px-48">
				<div className="flex-1 basis-1/2">
					<img src="https://autoretailtech.com.au/wp-content/uploads/2023/08/modular-vending.jpg" />
				</div>
				<div className="flex justify-center items-center flex-1 basis-1/2 bg-[#F5F5F5] text-[30px] font-bold leading-[1] text-[#1D1D1B] ">
					<p>Modula Vending</p>
				</div>
				<div className="flex justify-center items-center flex-1 basis-1/2 bg-[#F5F5F5] text-[30px] font-bold leading-[1] text-[#1D1D1B]">
					<p>Tailored Designs</p>
				</div>
				<div className="flex-1 basis-1/2">
					<img src="https://autoretailtech.com.au/wp-content/uploads/2023/08/tailored-design.jpg" />
				</div>
			</div>
			{/* PART 5 */}
			<div className="flex items-center bg-[url('https://autoretailtech.com.au/wp-content/uploads/2023/07/art-banner.jpg')] h-[50vh]">
				<div className="flex flex-col items-center justify-center bg-[#FFFFFFC7] w-full p-[10px]">
					<div className="max-w-[550px] p-[10px]">
						<div className="flex justify-center items-baseline">
							<p className="text-[#44295B] text-[150px] text-center leading-[100px]">
								“
							</p>
						</div>

						<p className=" mb-[10px] text-[#44295B] text-[30px] text-center font-medium">
							It is not the strongest of the species that
							survives, nor the most intelligent that survives. It
							is the one that is most adaptable to change.
						</p>
						<p className="text-[#163E7F] text-[18px] italic text-center">
							Charles Darwin
						</p>
					</div>
				</div>
			</div>
			{/* PART 6 */}
			<div className="flex justify-center items-center bg-[#262626] p-[30px]">
				<div className="flex flex-col justify-center items-center">
					<h2 className="text-[#fff] text-[60px] font-bold leading-[1]">
						BARISTA COFFEE
					</h2>
					<h2 className="text-[#fff] text-[30px] font-bold leading-[1]">
						AVAILABLE HERE
					</h2>
					<img src="https://autoretailtech.com.au/wp-content/uploads/2023/08/jonnee-coffee-logo.png" />
				</div>
			</div>
			{/* PART 7 */}
			<div className="px-48 bg-[#A99162] py-[50px]">
				<h2 className="text-[30px] font-bold leading-[1] mb-5 p-[10px]">
					Discover Jonnee Coffee
				</h2>
				<div className="flex flex-wrap p-[10px]">
					<div className="flex-1 basis-1/2 p-[10px]">
						<img src="https://autoretailtech.com.au/wp-content/uploads/2023/08/jonnee-coffee-img-1.jpg" />
					</div>
					<div className="flex-1 basis-1/2 p-[10px]">
						<div className="text-[#fff] p-[10px] text-[15px] text-left font-light">
							<p className="mb-5">
								Jonnee Coffee is leading the computerised
								barista industry by giving customers what they
								want – a perfect cup of coffee, hot chocolate
								and chai, at the push of a button. Perfect every
								time!
							</p>
							<p className="mb-5">
								Our latest Jonnee Coffee Computerised Barista
								technology has now made it possible to have your
								very own 5-Star café in less than a square
								metre, installed into your workplace or
								location, free of charge.
							</p>
							<p className="mb-5">
								All Jonnee Coffee recipes have been masterfully
								created with one of Australia’s top Baristas.
								Our coffee beans have been specially sourced
								from right across the globe and roasted locally
								to ensure you get the best tasting coffee, hot
								chocolate and chai latte every time.
							</p>
							<p className="mb-5">
								The Jonnee Coffee offer is an all-inclusive
								service with no fixed term contract. For
								locations that qualify, our computerised
								baristas will be installed free of charge and
								fully maintained by our qualified team.
							</p>
							<p className="mb-5">
								To find out more, follow the link:
							</p>
						</div>
						<button className="py-[10px] px-5 bg-[#262626] font-light text-white text-[15px]">
							Learn More
						</button>
					</div>
				</div>
			</div>
			{/* PART 8 */}
			<div className="relative bg-[url('https://autoretailtech.com.au/wp-content/uploads/2023/07/art-banner.jpg')] h-[60vh]">
				<img
					src="https://autoretailtech.com.au/wp-content/uploads/2023/08/footer-banner-1.jpg"
					className="absolute max-w-[80vw] h-[50vh] top-[10%] left-[10%]"
				/>
				<div className="absolute z-10 bg-[#AC4A6D] text-white flex flex-col px-[30px] py-24 max-w-[28vw] justify-center align-middle top-[20%] left-[15%]">
					<p className="text-xl mb-5">
						Read the latest News & Updates from the world of
						automated retail and delivery technologies:
					</p>
					<div className="bg-[#44295B] flex flex-col justify-center align-middle p-[8px] text-center">
						<h4 className="text-[17px]">CHECK BACK SOON</h4>
						<p className="text-[14px]">
							Once posts are published, you'll see them here.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductPage;
