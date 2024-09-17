import { useParams } from 'react-router-dom';
import Product from './Product';

const ProductDetailPage = () => {
	let { id } = useParams();

	return (
		<div>
			{/* PART 1 */}
			<div className="mt-10 xl:px-48">
				<h2 className="text-[#1D1D1B] text-[30px] leading-[1] mb-5 uppercase p-[30px]">
					We don't just offer retail solutions, we create them.
				</h2>
				<div className="flex flex-col flex-wrap my-[30px] md:flex-row">
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
			<Product productId={id} />
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
					<h2 className="text-[#fff] text-[40px] lg:text-[60px] font-bold leading-[1] text-center">
						BARISTA COFFEE
					</h2>
					<h2 className="text-[#fff] text-[20px] lg:text-[30px] font-bold leading-[1]">
						AVAILABLE HERE
					</h2>
					<img src="https://autoretailtech.com.au/wp-content/uploads/2023/08/jonnee-coffee-logo.png" />
				</div>
			</div>
			{/* PART 7 */}
			<div className="bg-[#A99162] px-12 py-[50px] 2xl:px-48">
				<h2 className="text-[30px] font-bold leading-[1] mb-5 p-[10px] text-center lg:text-left lg:px-14 2xl:px-36">
					Discover Jonnee Coffee
				</h2>
				<div className="flex flex-col flex-wrap p-[10px] md:flex-row">
					<div className="flex-1 basis-1/2 p-[10px] flex justify-center items-center md:items-start">
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

export default ProductDetailPage;
