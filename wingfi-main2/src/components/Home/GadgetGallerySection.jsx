'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
// import { Pagination } from 'swiper/modules';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function GadgetGallerySection() {
  const slides = [
    {
      name: 'Slide 1',
      url: 'https://swiperjs.com/demos/images/nature-1.jpg',
    },
    {
      name: 'Slide 2',
      url: 'https://swiperjs.com/demos/images/nature-2.jpg',
    },
    {
      name: 'Slide 3',
      url: 'https://swiperjs.com/demos/images/nature-3.jpg',
    },
    {
      name: 'Slide 4',
      url: 'https://swiperjs.com/demos/images/nature-4.jpg',
    },
    {
      name: 'Slide 5',
      url: 'https://swiperjs.com/demos/images/nature-5.jpg',
    },
    {
      name: 'Slide 6',
      url: 'https://swiperjs.com/demos/images/nature-6.jpg',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-[50px] py-[50px]">
      <p className="font-bold uppercase text-sm border-[3px] border-[#5784ff] px-5 py-2 rounded-full text-[#5784ff] text-center">
        Gadget Gallery
      </p>
      <p className="text-5xl font-bold py-5">Unveiling Our Mobile Marvels!</p>
      <div className="w-full py-10">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 150,
          modifier: 2.5,
          slideShadows: true,
        }}
        autoplay
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
          {slides.map((slide, index) => (
            <SwiperSlide
              key={index}
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <img
                src={slide.url}
                alt={slide.name}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform" // Scale effect on hover
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
