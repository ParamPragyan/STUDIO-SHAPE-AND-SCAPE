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
import { div } from '@tensorflow/tfjs';

SwiperCore.use([Autoplay]);

const Slider2 = () => {
  return (
    <div>
      <div className='bg-[#000000] h-[3rem] flex '><h1 className=' ml-[8rem] px-[1rem] text-[2rem] text-black bg-white font-[Oswald]'>Our Services</h1>
</div> 
       <div className="container-slider">
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
        className="swiper_container "
      >
            <SwiperSlide  >
            {/* <img src={img1} alt="" /> */}
          <div class="group relative rounded-[2rem] overflow-hidden transition-shadow ease hover:shadow-xl hover:shadow-black/30">
      <div class=" ">
        <img class="  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img1} alt="" />
      </div>
      <div class=" absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <div className='bg-[#00000091] backdrop-blur-[10px] m-2 w-[140%]'> <h1 class="font-[Oswald] py-[1rem]  text-3xl  text-white">Shooting Star</h1></div>
       
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
            </SwiperSlide>

            <SwiperSlide>
            
            <div class="group relative rounded-[2rem] overflow-hidden transition-shadow ease hover:shadow-xl hover:shadow-black/30">
      <div class=" ">
        <img class="  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img2} alt="" />
      </div>
      <div class=" absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <div className='bg-[#00000091] backdrop-blur-[10px] m-2 w-[140%]'> <h1 class="font-[Oswald] py-[1rem]  text-3xl  text-white">Shooting Star</h1></div>
       
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
            </SwiperSlide>
            <SwiperSlide>
            
            <div class="group relative rounded-[2rem] overflow-hidden transition-shadow ease hover:shadow-xl hover:shadow-black/30">
      <div class=" ">
        <img class="  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img3} alt="" />
      </div>
      <div class=" absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <div className='bg-[#00000091] backdrop-blur-[10px] m-2 w-[140%]'> <h1 class="font-[Oswald] py-[1rem]  text-3xl  text-white">Shooting Star</h1></div>
       
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
            </SwiperSlide>
            <SwiperSlide>
            
            <div class="group relative rounded-[2rem] overflow-hidden transition-shadow ease hover:shadow-xl hover:shadow-black/30">
      <div class=" ">
        <img class="  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img4} alt="" />
      </div>
      <div class=" absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <div className='bg-[#00000091] backdrop-blur-[10px] m-2 w-[140%]'> <h1 class="font-[Oswald] py-[1rem]  text-3xl  text-white">Shooting Star</h1></div>
       
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
            </SwiperSlide>
            <SwiperSlide>
            
            <div class="group relative rounded-[2rem] overflow-hidden transition-shadow ease hover:shadow-xl hover:shadow-black/30">
      <div class=" ">
        <img class="  transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src={img5} alt="" />
      </div>
      <div class=" absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 group-hover:from-black/50 group-hover:via-black/40 group-hover:to-black/70"></div>
      <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
        <div className='bg-[#00000091] backdrop-blur-[10px] m-2 w-[140%]'> <h1 class="font-[Oswald] py-[1rem]  text-3xl  text-white">Shooting Star</h1></div>
       
        <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
        <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
      </div>
    </div>
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
    </div>
   
  )
}

export default Slider2