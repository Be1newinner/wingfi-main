"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import { Pagination } from 'swiper/modules';
import { EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import product1 from "@/assets/pro_1150_1.webp";
import product2 from "@/assets/pro_1155_1.webp";
import product3 from "@/assets/pro_1156_1.webp";
import product4 from "@/assets/pro_1157_1.webp";
import product5 from "@/assets/pro_1158_1.webp";
import product6 from "@/assets/pro_1159_1.webp";
import product7 from "@/assets/pro_1160_1.webp";

export default function GadgetGallerySection() {
  const slides = [
    {
      name: "Slide 1",
      url: product1,
    },
    {
      name: "Slide 2",
      url: product2,
    },
    {
      name: "Slide 3",
      url: product3,
    },
    {
      name: "Slide 4",
      url: product4,
    },
    {
      name: "Slide 5",
      url: product5,
    },
    {
      name: "Slide 6",
      url: product6,
    },
    {
      name: "Slide 7",
      url: product7,
    },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center px-[50px] py-[50px]">
      <p className="font-bold uppercase text-sm border-[3px] border-[#5784ff] px-5 py-2 rounded-full text-[#5784ff] text-center">
        Gadget Gallery
      </p>
      <p className="text-5xl font-bold py-5">Limitless Power in Your Pocket!</p>
      <div className="w-full py-10">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={3}
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
                width: "400px",
                height: "400px",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Image
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
