import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import './style.css'

export const Sliderp = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img alt="swiper" src="https://swiperjs.com/demos/images/nature-5.jpg" /></SwiperSlide>
      <SwiperSlide><img alt="swiper" src="https://swiperjs.com/demos/images/nature-3.jpg" /></SwiperSlide>
      <SwiperSlide><img alt="swiper" src="https://swiperjs.com/demos/images/nature-2.jpg" /></SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};
