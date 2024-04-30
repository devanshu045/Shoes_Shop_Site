import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import './Swipershophome.scss'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/mousewheel'
import 'swiper/css/free-mode'
import { Mousewheel , FreeMode,Pagination } from 'swiper/modules';


const Swipershophome = () => {
  return (
    <div className="swiper-main">
     <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        Mousewheel={true}
        pagination={{
          clickable: true,
          
        }}
        modules={[Mousewheel,FreeMode, Pagination]}
        className="swiper-container"
      >
       <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
      <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
      <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
      <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
      <SwiperSlide className='swiper-slide'>Slide 1</SwiperSlide>
      <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
      <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
      <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
        
    </Swiper>
    </div>
  )
}

export default Swipershophome