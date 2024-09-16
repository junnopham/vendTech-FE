import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';

const SliderImage = (props: any) => {
	const { data } = props;

	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		centerMode: true,
		centerPadding: '0',
	};

	const [currentImage, setCurrentImage] = useState<string>(
		data.mainImage.url
	);

	return (
		<>
			<div className="w-3/12 h-full flex flex-col items-center gap-2">
				<img
					className="pl-4 pt-2 w-auto h-60"
					src={currentImage}
					alt=""
				/>
				<div className="slider-container">
					<Slider {...settings}>
						<div
							className="slider-item"
							onClick={() => setCurrentImage(data.mainImage.url)}
						>
							<img src={data.mainImage.url} alt="" />
						</div>
						{data?.images.map((image: any) => (
							<div
								className="slider-item"
								onClick={() => setCurrentImage(image.url)}
							>
								<img src={image.url} alt="" />
							</div>
						))}
					</Slider>
				</div>
			</div>
		</>
	);
};

export default SliderImage;
