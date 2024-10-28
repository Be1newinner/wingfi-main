"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import shopping from "../../assets/shopping.webp";

const Product = () => {
  const product = [
    {
      name: "Slide 1",
      url: shopping,
      subhead: "Charger Dock",
      view: "View Specs",
    },
    {
      name: "Slide 2",
      url: shopping,
      subhead: "Mobile Phone",
      view: "View Specs",
    },
    {
      name: "Slide 3",
      url: shopping,
      subhead: "Wireless Charger",
      view: "View Specs",
    },
    {
      name: "Slide 4",
      url: shopping,
      subhead: "Tws HeadPhones",
      view: "View Specs",
    },
    {
      name: "Slide 5",
      url: shopping,
      subhead: "Pencil Pro",
      view: "View Specs",
    },
    {
      name: "Slide 6",
      url: shopping,
      subhead: "Find My Tag",
      view: "View Specs",
    },
    {
      name: "Slide 7",
      url: shopping,
      subhead: "Tws HeadPhones",
      view: "View Specs",
    },
  ];

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center px-[50px] py-[50px]">
        <p className="font-bold uppercase text-sm border-[3px] border-[#5784ff] px-5 py-2 rounded-full text-[#5784ff] text-center">
          Discover Products
        </p>
        <p className="text-5xl font-bold py-5">Our Products</p>
        <div className="w-full py-10">
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
                className=" flex flex-col w-1/3 mb-12  border-[1px] border-[#e4e1e1] rounded-3xl cursor-pointer"
              >
                <div className="h-[80%] p-5 overflow-hidden border-b-2 ">
                  <Image
                    src={data.url}
                    alt=""
                    width={200}
                    height={300}
                    className="object-cover h-full w-full rounded-lg hover:scale-105 ease-in-out duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-2xl font-bold text-center pb-2 hover:text-sky-500 ease-in duration-1000">
                    {data.subhead}
                  </p>
                  <p className="text-base underline font-bold text-center hover:text-sky-500 ease-in duration-1000 cursor-pointer">{data.view}</p>
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
