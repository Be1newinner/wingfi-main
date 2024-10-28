'use client';

import React, { useEffect, useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './home.css';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { gsap } from 'gsap';
import image1 from '../../assets/hero-bgs/image1.png';

const HeroSection = () => {
  const swiperRef = useRef(null); // Use ref to get access to Swiper instance

  useEffect(() => {
    if (swiperRef.current) {
      const swiperInstance = swiperRef.current.swiper;

      // GSAP animation for each SwiperSlide
      const animateSlide = (index) => {
        const currentSlide = swiperInstance.slides[index];
        gsap.fromTo(
          currentSlide,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1, // Duration for animation
            ease: 'power2.inOut',
          },
        );
      };

      // Initial animation for the first slide
      animateSlide(swiperInstance.activeIndex);

      // Event listener to trigger animation on slide change
      swiperInstance.on('slideChangeTransitionStart', () => {
        animateSlide(swiperInstance.activeIndex);
      });
    }
  }, []);

  return (
    <div
      style={{ backgroundImage: "url('../../assets/hero-bgs/slider-bg.jpg')" }}
      className="h-screen w-full bg-no-repeat bg-cover"
    >
      <Swiper
        direction={'vertical'}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        grabCursor
        preloadImages={true}
        lazy={true}
        className="swiper-container"
        ref={swiperRef} // Set ref to Swiper component
      >
        <SwiperSlide className="swiper-slide">
          <div className="h-full flex justify-center items-center flex-col">
            <div>
              <h2 className="text-8xl font-bold text-white">6.7 Inches</h2>
              <h4 className="text-3xl font-bold text-white">3D Curved 13 Pro+ 5G</h4>
            </div>
            <div>
              <Image src={image1} alt="image 1" width={200} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="h-full flex justify-center items-center flex-col">
            <div>
              <h2 className="text-8xl font-bold text-white">6.7 Inches</h2>
              <h4 className="text-3xl font-bold text-white">3D Curved 13 Pro+ 5G</h4>
            </div>
            <div className="relative h-[200px]">
              <Image src={image1} alt="image 1" width={200} />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="h-full flex justify-center items-center flex-col">
            <div>
              <h2 className="text-8xl font-bold text-white">6.7 Inches</h2>
              <h4 className="text-3xl font-bold text-white">3D Curved 13 Pro+ 5G</h4>
            </div>
            <div>
              <Image src={image1} alt="image 1" width={200} />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSection;
