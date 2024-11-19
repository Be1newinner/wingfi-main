/** @format */

'use client';

import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import './style.css';
import { Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';
import { ProductsData } from '@/service/Products/ProductsService';

const Product = () => {
  const [productsArray, setProductsArray] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await ProductsData({
          lim: 15,
          order: 's',
          coll: 'p43duc',
        });
        setProductsArray(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    fetchProducts();
  }, []);

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
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {productsArray.map((data, index) => (
              <SwiperSlide
                key={index}
                className="group flex flex-col w-1/3 h-full mb-12 border-[1px] border-[#e4e1e1] rounded-3xl cursor-pointer"
              >
                <Link href={`/shop/${data.slug}`} key={index}>
                  <div className="h-[350px] p-5 overflow-hidden border-b-2 flex-grow">
                    <Image
                      src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${data.sku}%2F1.webp?alt=media`}
                      alt={data.title}
                      width={200}
                      height={300}
                      className="object-cover h-full w-full rounded-lg group-hover:scale-105 ease-in-out duration-300"
                    />
                  </div>
                  <div className="p-5 h-[180px]">
                    <p className="text-2xl h-[100px] font-bold text-center pb-2 group-hover:text-sky-500 ease-in duration-1000">
                      {data.title}
                    </p>
                    <p className="text-base underline font-bold text-center group-hover:text-sky-500 ease-in duration-1000 cursor-pointer">
                      View Specs
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Product;
