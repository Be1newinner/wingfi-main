/** @format */

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import product1 from '@/assets/pro_1150_1.webp';
import product2 from '@/assets/pro_1155_1.webp';
import product3 from '@/assets/pro_1156_1.webp';
import { CartButton } from '../ProductViewSm/CartButton';
import getProductFromURL from '@/service/getProductFromURL/getProductFromURLService';
import { Theme_colors_class } from '@/infrastructure/theme';
import Link from 'next/link';
// import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const ProductsData = [
  {
    title: 'Wingfi 20000 Mah 22.5W Compact Power Bank EnergyHub',
    price: 1399,
    mrp: 4499,
    slug: 'wingfi-20000-mah-22.5w-compact-power-bank-energyhub-1152',
    image: 0,
    rating: 5,
    sku: 1152,
    special: 1,
  },
];

export default function ClickChangeSwiper({ params }) {
  const slug = params?.slug || '';
  const FilteredProduct = getProductFromURL({ slug });

  if (FilteredProduct.error) {
    return <div>{FilteredProduct.error}</div>;
  }

  const slides = [
    {
      title: 'Slide 1',
      description: 'Lorem ipsum dolor sit amet',
      image: product1,
    },
    {
      title: 'Slide 2',
      description: 'Lorem ipsum dolor sit amet',
      image: product2,
    },
    {
      title: 'Slide 3',
      description: 'Lorem ipsum dolor sit amet',
      image: product3,
    },
  ];

  const fontSize = {
    fontSize: 'clamp(1.875rem, 1.7416rem + 0.7362vw, 2.625rem)',
  };

  return (
    <div className="px-[50px] py-[50px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 border border-solid rounded-lg">
        <div className="flex flex-col gap-3 md:flex-row w-auto h-[550px] p-4 overflow-hidden">
          <div className="swiper-container p-4 rounded-lg gallery-top w-full h-[75vh] md:w-[80%] md:h-full">
            <Swiper
              spaceBetween={10}
              keyboard={{ enabled: true }}
              // navigation={true}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }}
              pagination={{ clickable: true }}
              watchSlidesProgress
              loop={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="w-full h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col items-center justify-center h-full bg-white">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
              {/* Custom navigation buttons */}
              <div className="swiper-button-prev text-black  border border-gray-300 rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-lg"></div>
              <div className="swiper-button-next text-black  border border-gray-300 rounded-full w-[50px] h-[50px] flex items-center justify-center shadow-lg"></div>
            </Swiper>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 flex-col w-auto h-[550px] p-3">
          {ProductsData.map((data, i) => (
            <div key={i} className="border border-solid p-4 rounded-lg">
              <h3 className="text-4xl font-bold" style={fontSize}>
                {data.title}
              </h3>
              <p className="text-gray-400 mt-2">
                Always stay powered up, anywhere you go. Efficient and reliable
                charging designed for convenience and versatility. Stay
                connected and ready for anything, with a power bank you can
                depend on.
              </p>

              <div className="my-4">
                {/* <div className="mt-4">
                  <h2 className="text-xl font-semibold">
                    Price: ${data.price}
                  </h2>
                </div> */}

                <div>
                  <span className="text-error text-2xl font-bold">
                    ₹ {data?.price}/-
                  </span>
                  <span className="text-xs text-gray-600 line-through ml-2">
                    ₹ {data?.mrp}/-
                  </span>
                </div>

                <div className="flex items-end gap-2 mt-4">
                  <div className="text-error flex">
                    {Array?.from({
                      length: Math.floor(data?.rating),
                    })?.map((item, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <div className="divider divider-horizontal" />
                  <span className="text-xs">15 Customer Ratings</span>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
