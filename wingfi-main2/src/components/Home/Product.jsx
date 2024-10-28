"use client";

import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './style.css';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
// import { url } from 'inspector';

const Product = () => {

    const product = [
        {
          name: 'Slide 1',
          url: 'https://swiperjs.com/demos/images/nature-1.jpg',
          subhead:"Charger Dock",
          view:"View Space"
        },
        {
          name: 'Slide 2',
          url: 'https://swiperjs.com/demos/images/nature-2.jpg',
          subhead:"Mobile Phone",
          view:"View Space"
        },
        {
          name: 'Slide 3',
          url: 'https://swiperjs.com/demos/images/nature-3.jpg',
          subhead:"Wireless Charger",
          view:"View Space"
        },
        {
          name: 'Slide 4',
          url: 'https://swiperjs.com/demos/images/nature-4.jpg',
          subhead:"Tws HeadPhones",
          view:"View Space"
        },
        {
          name: 'Slide 5',
          url: 'https://swiperjs.com/demos/images/nature-5.jpg',
          subhead:"Pencil Pro",
          view:"View Space"
        },
        {
          name: 'Slide 6',
          url: 'https://swiperjs.com/demos/images/nature-6.jpg',
          subhead:"Find My Tag",
          view:"View Space"
        },
        {
          name: 'Slide 7',
            url: 'https://swiperjs.com/demos/images/nature-4.jpg',
            subhead:"Tws HeadPhones",
            view:"View Space"
          },
      ];

  return (
    <>
    
    <div className="w-full flex flex-col items-center justify-center px-[50px] py-[50px]">
      <p className="font-bold uppercase text-sm border-[3px] border-[#5784ff] px-5 py-2 rounded-full text-[#5784ff] text-center">
        Gadget Gallery
      </p>
      <p className="text-5xl font-bold py-5">Unveiling Our Mobile Marvels!</p>
      <div className="w-full py-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay:3000,
          disableOnInteraction:false
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper "
      >
        {product.map((data,index)=>(
               
          <SwiperSlide
          key={index}
          className='h-[450px] w-[327px] border-[1px] border-[#707070] rounded-lg'
        >
          <img src={data.url} alt={data.name}
           className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform"
          />
          
        </SwiperSlide>
   
        ))}
      </Swiper>
      </div>
    </div>

    </>
  )
}

export default Product