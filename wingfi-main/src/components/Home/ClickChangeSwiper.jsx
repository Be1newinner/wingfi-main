"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import { FaPlus, FaMinus } from "react-icons/fa6";
import product1 from "@/assets/pro_1150_1.webp";
import product2 from "@/assets/pro_1155_1.webp";
import product3 from "@/assets/pro_1156_1.webp";
import { CartButton } from "../ProductViewSm/CartButton";
import getProductFromURL from "@/service/getProductFromURL/getProductFromURLService";
import { Theme_colors_class } from "@/infrastructure/theme";

export default function ClickChangeSwiper({ params }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [price] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const slug = params?.slug || "";
  const FilteredProduct = getProductFromURL({ slug });

  if (FilteredProduct.error) {
    return <div>{FilteredProduct.error}</div>;
  }

  const slides = [
    {
      title: "Slide 1",
      description: "Lorem ipsum dolor sit amet",
      image: product1,
    },
    {
      title: "Slide 2",
      description: "Lorem ipsum dolor sit amet",
      image: product2,
    },
    {
      title: "Slide 3",
      description: "Lorem ipsum dolor sit amet",
      image: product3,
    },
  ];

  const incrementQuantity = () => setQuantity((prev) => prev + 1);

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const fontSize = {
    fontSize: "clamp(1.875rem, 1.7416rem + 0.7362vw, 2.625rem)",
  };

  return (
    <div className="px-[50px] py-[50px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 border border-solid rounded-lg">
        <div className="flex flex-col gap-3 md:flex-row w-auto h-[550px] p-4">
          <div className="swiper-container gallery-thumbs w-full h-[25vh] md:w-[20%] md:h-full">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={3}
              breakpoints={{
                480: { direction: "vertical", slidesPerView: 3 },
              }}
              watchSlidesProgress
              modules={[FreeMode, Thumbs]}
              className="w-full h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="cursor-pointer opacity-75">
                  <div className="h-full w-full object-cover rounded-lg">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={200}
                      height={200}
                      className="w-full h-full object-contain rounded-xl"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="swiper-container p-4 rounded-lg gallery-top w-full h-[75vh] md:w-[80%] md:h-full">
            <Swiper
              spaceBetween={10}
              keyboard={{ enabled: true }}
              thumbs={{ swiper: thumbsSwiper }}
              navigation={false}
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
                      className="w-full h-full object-contain rounded-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3 flex-col w-auto h-[550px] p-3">
          <div className="border border-solid p-4 rounded-lg">
            <h3 className="text-4xl font-bold" style={fontSize}>
              Power Bank
            </h3>
            <p className="text-gray-400 mt-2">
              Always stay powered up, anywhere you go. Efficient and reliable
              charging designed for convenience and versatility. Stay connected
              and ready for anything, with a power bank you can depend on.
            </p>

            <div className="my-4">
              <div className="mt-4">
                <h2 className="text-xl font-semibold">Price: ${price}</h2>
              </div>

              <div className="flex items-center gap-4 mt-5">
                <div className="flex items-center gap-3 border-2 rounded-full border-solid p-3">
                  <button
                    className="px-4 text-xl font-bold"
                    onClick={decrementQuantity}
                  >
                    <FaMinus />
                  </button>
                  <span className="text-xl font-bold">{quantity}</span>
                  <button
                    className="px-4 text-xl font-bold"
                    onClick={incrementQuantity}
                  >
                    <FaPlus />
                  </button>
                </div>
                <div
                  className={
                    "flex items-center justify-center gap-3 border-2 rounded-full border-solid p-3 w-full" +
                    " " +
                    Theme_colors_class.primary
                  }
                >
                  <CartButton
                    item={FilteredProduct.data}
                    text="Add to Cart"
                    size="btn-md"
                    flex="flex-1"
                    color="btn-neutral"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center mt-2">
                <button className="w-full bg-red-500 rounded-full p-3 font-bold text-white">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
