import React, {Fragment} from 'react'
import '../App.css'
import '../index.css'
import '../style/style.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const MBanner: React.FC = () => {

  return (
    <div className="MBanner">
      <section id="banner">
        <Swiper
          slidesPerView={1.4}
          spaceBetween={14}
          loop={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <a href="#" className='banner-img1'></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className='banner-img2'></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className='banner-img3'></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className='banner-img1'></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className='banner-img2'></a>
          </SwiperSlide>
          <SwiperSlide>
            <a href="#" className='banner-img3'></a>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  )
}

export default MBanner