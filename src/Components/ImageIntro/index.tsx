import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './style.css';
import { imageList } from '../../const';

const ImageIntro = () => {
	return (
		<div className="py-20 px-3">
			<Swiper
				watchSlidesProgress={true}
				slidesPerView={3}
				className="w-full"
				// width={2480}
				speed={800}
			>
				{imageList.map((img) => {
					return (
						<SwiperSlide key={img.id} className="lg:mx-[16px]">
							<img
								src={img.url}
								className="h-full w-full object-cover hover:cursor-pointer"
							/>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</div>
	);
};
export default ImageIntro;
