'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import Image from 'next/image';
import { FaPlus, FaMinus } from 'react-icons/fa6';

export default function ClickChangeSwiper() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null); // State to track the selected color
  const [selectedStorage, setSelectedStorage] = useState(null); // State to track the selected storage
  const [price, setPrice] = useState(0); // State to track price
  const [quantity, setQuantity] = useState(1); // State to track the product quantity

  const slides = [
    {
      title: 'Slide 1',
      description: 'Lorem ipsum dolor sit amet',
      image: '/assets/product/0B.jpg', // Updated path
    },
    {
      title: 'Slide 2',
      description: 'Lorem ipsum dolor sit amet',
      image: '/assets/product/b1.png', // Updated path
    },
    {
      title: 'Slide 3',
      description: 'Lorem ipsum dolor sit amet',
      image: '/assets/product/joystick.png', // Updated path
    },
  ];

  const colors = [
    {
      color: 'red',
      name: 'Red',
      availableStorage: ['128GB', '256GB'],
      prices: {
        '128GB': 500,
        '256GB': 700,
      },
    },
    {
      color: 'green',
      name: 'Green',
      availableStorage: ['512GB', '64GB'],
      prices: {
        '512GB': 850,
        '64GB': 400,
      },
    },
    {
      color: 'blue',
      name: 'Blue',
      availableStorage: ['1TB', '256GB'],
      prices: {
        '1TB': 1000,
        '256GB': 750,
      },
    },
    // More colors...
  ];

  const allStorageOptions = ['128GB', '256GB', '512GB', '64GB', '1TB']; // All possible storage options

  const handleColorClick = (color) => {
    setSelectedColor(color); // Set the clicked color as the selected color
    setSelectedStorage(null); // Reset storage when color changes
    setPrice(0); // Reset price when color changes
  };

  const handleStorageClick = (storageOption) => {
    setSelectedStorage(storageOption); // Set the clicked storage as the selected storage

    const selectedColorData = colors.find((c) => c.color === selectedColor);
    if (selectedColorData) {
      const storagePrice = selectedColorData.prices[storageOption];
      setPrice(storagePrice || 0); // Set the price for the selected color and storage combination
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const fontSize = {
    fontSize: 'clamp(1.875rem, 1.7416rem + 0.7362vw, 2.625rem)',
  };

  return (
    <div className="px-[50px] py-[50px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 border-2 border-solid rounded-lg">
        <div className="flex flex-col gap-3 md:flex-row w-auto h-[550px] p-4">
          {/* Gallery Thumbs */}
          <div className="swiper-container gallery-thumbs w-full h-[25vh] md:w-[20%] md:h-full">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={3}
              direction="horizontal"
              breakpoints={{
                480: {
                  direction: 'vertical',
                  slidesPerView: 3,
                },
              }}
              watchSlidesProgress
              modules={[FreeMode, Thumbs]}
              className="w-full h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index} className="cursor-pointer opacity-75">
                  {slide.image ? (
                    <div className="border h-full w-full object-cover rounded-lg">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-contain rounded-xl" // Directly displaying the image
                      />
                    </div>
                  ) : (
                    <span>{slide.title}</span>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Gallery Top */}
          <div className="swiper-container border-2 border-solid p-4 rounded-lg gallery-top w-full h-[75vh] md:w-[80%] md:h-full">
            <Swiper
              spaceBetween={10}
              keyboard={{ enabled: true }}
              thumbs={{ swiper: thumbsSwiper }}
              navigation={false} // Disable navigation arrows
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
                      className="w-full h-full object-contain rounded-lg" // Directly displaying the image
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Product Options */}
        <div className="flex justify-center items-center gap-3 flex-col w-auto h-[550px] p-3">
          <div className="border border-solid p-4 rounded-lg">
            <h3 className="text-4xl font-bold" style={fontSize}>
              5G Smartphone
            </h3>
            <p className="text-gray-400 mt-2">
              5G Smartphone Etiam quis lobortis odio, at sodales mauris. Morbi fermentum pretium
              ligula, id efficitur quam mattis in. Fusce nec pretium ante. Vivamus vitae bibendum
              lacus, ac varius ligula.
            </p>

            {/* Color Selection */}
            <div className="my-5">
              <div className="flex gap-2 items-center mb-2 font-bold">
                <h2>Color:</h2>
                <h2 className="capitalize">{selectedColor || 'Select a color'}</h2>
              </div>

              <div className="flex items-center gap-2">
                {colors.map((colorOption) => (
                  <span
                    key={colorOption.color}
                    className={`w-[20px] h-[20px] rounded-full cursor-pointer ${
                      selectedColor === colorOption.color ? 'bg-blue-500 text-white' : 'bg-gray-300'
                    }`}
                    style={{ backgroundColor: colorOption.color }}
                    onClick={() => handleColorClick(colorOption.color)}
                  ></span>
                ))}
              </div>
            </div>

            {/* Storage Selection */}
            <div className="my-4">
              <div className="flex gap-2 items-center mb-2 font-bold">
                <h2>Storage:</h2>
                <h2>{selectedStorage || 'Select a storage'}</h2>
              </div>

              <div className="flex items-center gap-2">
                {allStorageOptions.map((storageOption) => {
                  const selectedColorData = colors.find((c) => c.color === selectedColor);
                  const isAvailable = selectedColorData?.availableStorage.includes(storageOption);

                  return (
                    <button
                      key={storageOption}
                      className={`px-3 py-1 rounded ${
                        selectedStorage === storageOption ? 'bg-blue-500 text-white' : 'bg-gray-300'
                      } ${isAvailable ? '' : 'opacity-50 cursor-not-allowed'}`}
                      onClick={() => isAvailable && handleStorageClick(storageOption)}
                      disabled={!isAvailable} // Disable if not available
                    >
                      {storageOption}
                    </button>
                  );
                })}
              </div>

              <div className="mt-4">
                <h2 className="text-xl font-semibold">Price: ${price}</h2>
              </div>

              {/* Quantity Selection */}
              <div className="flex  items-center gap-4 mt-5">
                <div className="flex items-center gap-3  border-2 rounded-full border-solid p-3">
                  <button className="px-4  text-xl font-bold  rounded" onClick={decrementQuantity}>
                    <FaMinus />
                  </button>
                  <span className="text-xl font-bold">{quantity}</span>
                  <button className="px-4  text-xl font-bold  rounded" onClick={incrementQuantity}>
                    <FaPlus />
                  </button>
                </div>
                <div className="flex items-center justify-center gap-3  border-2 rounded-full border-solid p-3 w-full">
                  <button className="font-bold">Add To Cart</button>
                </div>
              </div>

              <div className="flex justify-center items-center ">
                <button className="w-full bg-red-500 rounded-full p-3 mt-2 font-bold text-white">
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
