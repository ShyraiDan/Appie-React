import React from "react";
import "./Slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Img1 from "./../../../../i/showcase-1.png";
import Img2 from "./../../../../i/showcase-2.png";
import Img3 from "./../../../../i/showcase-3.png";
import Img4 from "./../../../../i/showcase-4.png";
function Slider() {
	const images = [Img1, Img2, Img3, Img4, Img1, Img2, Img3, Img4];
	return (
		<Swiper
			modules={[Pagination, Autoplay]}
			spaceBetween={25}
			autoplay={true}
			breakpoints={{
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 4,
				},
			}}
			pagination={{ el: ".pagination", clickable: true }}
		>
			{images.map((item, i) => {
				return (
					<SwiperSlide key={`slider-item-` + i}>
						<div className="slider__item">
							<img src={item} />
						</div>
					</SwiperSlide>
				);
			})}
			<div className="pagination"></div>
		</Swiper>
	);
}

export default Slider;
