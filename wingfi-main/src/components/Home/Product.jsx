/** @format */

'use client';

import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick'; // Import react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';
import Image from 'next/image';
import Link from 'next/link';
import { ProductsData } from '@/service/Products/ProductsService';
import { FaStar, FaHeart } from 'react-icons/fa';
import { CartButton } from '../ProductViewSm/CartButton';
import { Theme_colors_class } from '@/infrastructure/theme';

const Product = () => {
  const [productsArray, setProductsArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const sliderRef = useRef(null); // Create a reference for the slick slider

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const products = await ProductsData({
          lim: 15,
          order: 's',
          coll: 'p43duc',
        });
        setProductsArray(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId],
    );
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`inline-block ${
          index < rating ? 'text-yellow-500' : 'text-gray-300'
        }`}
      />
    ));
  };

  // Skeleton loader
  const ProductSkeleton = () => (
    <div className="w-full h-[600px] animate-pulse bg-gray-200 rounded-3xl">
      <div className="h-[400px] bg-gray-300"></div>
      <div className="p-5 space-y-3">
        <div className="h-6 bg-gray-400 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-gray-400 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
  );

  // Slick slider settings
  const settings = {
    slidesToScroll: 1,
    slidesToShow: 4,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center justify-center lg:px-[50px] px-5 py-[50px]">
      <p className="font-bold uppercase text-sm border-[3px] border-[#5784ff] px-5 py-2 rounded-full text-[#5784ff] text-center">
        Discover Products
      </p>
      <p className="text-5xl font-bold py-5">Our Products</p>
      <div className="w-full py-10">
        <Slider ref={sliderRef} {...settings}>
          {loading
            ? Array(4)
                .fill(0)
                .map((_, index) => (
                  <div key={index}>
                    <ProductSkeleton />
                  </div>
                ))
            : productsArray.map((data, index) => (
                <div
                  key={index}
                  className="group flex p-2 flex-col w-full h-full mb-12  cursor-pointer relative"
                >
                  <div className="flex flex-col h-full p-1 border border-gray-200 rounded-lg">
                    <Link href={`/shop/${data.slug}`} className="w-full">
                      <div className="h-[400px] lg:p-5 sm:p-2 p-1 overflow-hidden border-b-2 flex-grow relative">
                        <Image
                          src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${data.sku}%2F1.webp?alt=media`}
                          alt={data.title}
                          width={200}
                          height={300}
                          className="object-cover h-full w-full rounded-lg group-hover:scale-105 ease-in-out duration-300"
                        />
                      </div>
                      <div className="p-5 h-[250px]">
                        <p className="text-lg pb-2 font-bold text-left group-hover:text-red-500 ease-in duration-1000">
                          {data.title}
                        </p>
                        <div className="flex justify-start items-left space-x-2 mb-2">
                          <p className="text-lg font-bold text-red-600">
                            ₹ {data.price}
                          </p>
                          <p className="text-sm line-through text-gray-500">
                            MRP: ₹ {data.mrp}
                          </p>
                        </div>
                        <div className="flex justify-start mb-2">
                          {renderStars(data.rating)}
                        </div>
                        <div className="flex items-center gap-4 mt-5">
                          <div
                            className={
                              'flex items-center justify-center gap-3 border-2 rounded-full border-solid w-fit' +
                              ' ' +
                              Theme_colors_class.primary
                            }
                          >
                            <CartButton
                              item={data}
                              text="Add to Cart"
                              size="btn-md"
                              flex="flex-1"
                              color="btn-neutral"
                            />
                          </div>
                          <Link href={'/cart'}>
                            <button className="btn btn-error rounded-sm hover:text-white px-8 btn-outline">
                              Go To Cart
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
        </Slider>
      </div>
    </div>
  );
};

export default Product;
