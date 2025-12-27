import React, { useEffect, useState } from 'react'
import styles from './ProductImagesSlider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function ProductImagesSlider({ propImages }) {

  //  const [images, setImages] = useState(propImages);

  // useEffect(() => {
  //   if (propImages) {
  //     setImages(propImages);
  //   }
  //   console.log(`array of images`, images);
  // }, []);

  console.log(`array of propImages`, propImages);

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        style={{ margin: 'unset' }}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {propImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className='border border-3 border-primary  overflow-hidden rounded-5'>
              <img src={img} alt={`Slide ${index}`} className="img-fluid" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );

}
