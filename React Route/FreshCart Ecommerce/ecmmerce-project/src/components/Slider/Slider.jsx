import React, { useEffect, useState } from 'react'
import styles from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider({images}) {

   const [imageArr, setImageArr] = useState([]);
   const [prID, setprID] = useState('');

   useEffect(() => {
     setImageArr(images);
    //  console.log(` images`, images);
    //  console.log(` imageArr`, imageArr);
   }, []);

  return (
    <>
      <Swiper   
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      style={{ margin: 'unset' }} 
      spaceBetween={5} 
      slidesPerView={1} 
      navigation
      pagination={{ clickable: true }}
      >
        {
           imageArr.map((imgSrc, index) => (
             <SwiperSlide key={index}>
               <div className='border-bottom'>
                <img src={imgSrc} alt={`Slide ${index + 1}`} className="img-fluid" />
               </div>
             </SwiperSlide>
           ))
          
        }

      </Swiper>
    </>
  );

}
