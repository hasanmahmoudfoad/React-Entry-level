import { Component } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/modules';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default class SwiperComponent extends Component {



  render() {
    return (
      <>
        <div className="my-5">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{  delay: 5000 }}
          >
            <SwiperSlide><img src="https://picsum.photos/300/300?random=1"/></SwiperSlide>
            <SwiperSlide><img src="https://picsum.photos/300/300?random=2"/></SwiperSlide>
            <SwiperSlide><img src="https://picsum.photos/300/300?random=3"/></SwiperSlide>
            <SwiperSlide><img src="https://picsum.photos/300/300?random=4"/></SwiperSlide>
            <SwiperSlide><img src="https://picsum.photos/300/300?random=5"/></SwiperSlide>
            <SwiperSlide><img src="https://picsum.photos/300/300?random=6"/></SwiperSlide>
            <SwiperSlide><img src="https://picsum.photos/300/300?random=7"/></SwiperSlide>
            <SwiperSlide><img src="https://picsum.photos/300/300?random=8"/></SwiperSlide>
          </Swiper>
        </div>
    </>
    );
  }
}

