import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import SwiperCore, { Autoplay } from "swiper";


import img1 from "./../../assets/img1.jpg"
import img2 from "./../../assets/img2.jpg"
import img3 from "./../../assets/img3.jpg"
import img4 from "./../../assets/img4.jpg"
import img5 from "./../../assets/img5.jpg"


import "./Slider2.css"

SwiperCore.use([Autoplay]);

const Slider2 = () => {
  return (
    <div className="container-slider">
        <h1 className='heading'>Our Services</h1>
        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        // loopFillGroupWithBlank={true}
        autoplay={{ delay: 3000 }}
        // navigation={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 40,
          depth: 100,
          modifier: 2.5,
          slideShadows: true,
          
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 150,
          },
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
            <SwiperSlide>
            <img src={img1} alt="img1" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={img2} alt="img2" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={img3} alt="img3" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={img4} alt="img4" />
            </SwiperSlide>
            <SwiperSlide>
            <img src={img5} alt="img5" />
            </SwiperSlide>

            <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>

        </Swiper>
    </div>
  )
}

export default Slider2