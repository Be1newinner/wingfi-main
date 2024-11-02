"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { FaRegStar, FaStar } from "react-icons/fa";
import ajay from "@/assets/testimonials/Ajay.png";
import purushottam from "@/assets/testimonials/Purushottam.png";
import suraj from "@/assets/testimonials/Suraj.png";

const Testimonials = () => {
  const TestimonialsData = [
    {
      title: "WingFi Power Bank: Charge More, Weighs Less, Looks Great",
      desc: "The WingFi Powerbank is fantastic! It charges my phone multiple times, is lightweight, and looks great. The fast-charging feature is a game-changer. Highly recommended!",
      image: ajay,
      name: "Ajay Kumar",
      stars: 5,
    },
    {
      title: "WingFi Power Bank: Lightweight, Powerful, and Fast-Charging",
      desc: "I love the WingFi Powerbank! It’s lightweight, charges my phone multiple times, and has a sleek design. Fast-charging is a huge plus. Highly recommend it!",
      image: purushottam,
      name: "Purushottam",
      stars: 5,
    },
    {
      title: "WingFi 20,000mAh Fast-Charge Power Bank",
      desc: "With a 20,000mAh capacity and fast-charging capability, the WingFi Powerbank is impressive. It’s compact, safe, and perfect for on-the-go charging.",
      image: suraj,
      name: "Suraj Gupta",
      stars: 5,
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col items-center px-[50px] py-[50px]">
        <p className="font-bold uppercase text-sm border-[3px] border-[#5784ff] px-5 py-2 rounded-full text-[#5784ff] text-center">
          Testimonials
        </p>
        <p className="text-5xl font-bold py-5">Our Customer Feedback</p>
        <div className="w-full py-10">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper "
          >
            {TestimonialsData.map((data, index) => (
              <SwiperSlide
                key={index}
                className="group  flex flex-col w-full mx-auto mb-12  border-[1px] hover:border-sky-500 border-[#e4e1e1] rounded-3xl cursor-pointer"
              >
                <div className="p-5">
                  <div className="flex items-center pb-5">
                    {[...Array(5)].map((_, index) =>
                      index < data.stars ? (
                        <FaStar
                          key={index}
                          className="text-yellow-500 group-hover:text-sky-500 transition-colors duration-1000 hover:bg-gradient-to-r"
                          size={24}
                        />
                      ) : (
                        <FaRegStar
                          key={index}
                          className="text-gray-300"
                          size={24}
                        />
                      )
                    )}
                  </div>
                  <h1 className="text-2xl font-bold text-left">{data.title}</h1>
                  <p className="text-left py-5 text-[#707171] border-b-2">
                    {data.desc}
                  </p>
                  <div className="flex items-center gap-4 py-5">
                    <Image
                      src={data.image}
                      alt="user"
                      width={50}
                      height={50}
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <p className="text-2xl font-semibold">{data.name}</p>
                      {/* <p className="text-lg text-[#707171] font-semibold">
                        Los Angeles
                      </p> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
