"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import product1 from "@/assets/pro_1150_1.webp";
import product2 from "@/assets/pro_1155_1.webp";
import product3 from "@/assets/pro_1156_1.webp";
import product4 from "@/assets/pro_1157_1.webp";
import product5 from "@/assets/pro_1158_1.webp";
import product6 from "@/assets/pro_1159_1.webp";
import product7 from "@/assets/pro_1160_1.webp";

const Product = () => {
  const product = [
    {
      name: "Slide 1",
      url: product1,
      subhead: "Messi 20W Power Bank",
      view: "View Specs",
    },
    {
      name: "Slide 2",
      url: product2,
      subhead: "Compact 18W Power Bank",
      view: "View Specs",
    },
    {
      name: "Slide 3",
      url: product3,
      subhead: "10000mAh 18W Power Bank",
      view: "View Specs",
    },
    {
      name: "Slide 4",
      url: product4,
      subhead: "10000mAh 18W Power Bank",
      view: "View Specs",
    },
    {
      name: "Slide 5",
      url: product5,
      subhead: "20000mAh 20W Power Bank",
      view: "View Specs",
    },
    {
      name: "Slide 6",
      url: product6,
      subhead: "Slim 18W Power Bank",
      view: "View Specs",
    },
    {
      name: "Slide 7",
      url: product7,
      subhead: "Slim 18W Power Bank",
      view: "View Specs",
    },
  ];

  return (
    <>
      <div className="w-full  flex flex-col items-center justify-center px-[50px] py-[50px]">
        <p className="font-bold uppercase text-sm border-[3px] border-[#5784ff] px-5 py-2 rounded-full text-[#5784ff] text-center">
          Discover Products
        </p>
        <p className="text-5xl font-bold py-5">Our Products</p>
        <div className="w-full  py-10">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper "
          >
            {product.map((data, index) => (
              <SwiperSlide
                key={index}
                className="group flex flex-col w-1/3 h-full mb-12  border-[1px] border-[#e4e1e1] rounded-3xl cursor-pointer"
              >
                <div className="h-[300px] p-5 overflow-hidden border-b-2 flex-grow">
                  <Image
                    src={data.url}
                    alt=""
                    width={200}
                    height={300}
                    className="object-cover h-full w-full rounded-lg group-hover:scale-105 ease-in-out duration-300"
                  />
                </div>
                <div className="p-5 h-[150px] ">
                  <p className="text-2xl h-[80px] font-bold text-center pb-2 group-hover:text-sky-500 ease-in duration-1000">
                    {data.subhead}
                  </p>
                  <p className="text-base underline font-bold text-center group-hover:text-sky-500 ease-in duration-1000 cursor-pointer">
                    {data.view}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Product;
