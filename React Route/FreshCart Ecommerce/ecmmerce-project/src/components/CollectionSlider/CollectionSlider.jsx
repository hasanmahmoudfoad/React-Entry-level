import styles from './CollectionSlider.module.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default function CollectionSlider() {

  const [Collection, setCollection] = useState([]);

  async function getAllCollections() {
    try {
      const { data } = await axios('https://ecommerce.routemisr.com/api/v1/categories');
      setCollection(data.data);
      console.log(data.data);
      
    } catch (error) {
      console.error("Error fetching Collections: ", error);
    }

  }

  useEffect(() => {
    getAllCollections();
  }, [])



  return <>
    <h2>Collections</h2>

    <div className='container-fluid'>




      <div className='row'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
        >
          {
            Collection.map((collection) => (
              <div key={collection._id} className="col-12 col-md-6 col-lg-4 mb-4">


                <SwiperSlide key={collection._id} >
                  <div className={styles.slideContainer}>
                    <div className={styles.collectionImgContainer}>
                      <img className={styles.collectionImg} src={collection.image} />
                    </div>

                    <h5 className='display-6'>{collection.name}</h5>
                  </div>
                </SwiperSlide>




              </div>
            ))
          }
        </Swiper>
      </div>
    </div>

  </>


}
