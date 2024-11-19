/** @format */

'use client';
import Image from 'next/image';
import { useState } from 'react';
// import image1 from '@/assets/1.png';
// import image2 from '@/assets/2.png';
// import image3 from '@/assets/3.png';
// import image4 from '@/assets/4.png';
// import image5 from '@/assets/5.png';

function RightSlider({ images }) {
  const [activeImage, setActiveImage] = useState(0);

  //   const images = [image1, image2, image3, image4, image5];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-4">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(index)}
                className={`aspect-w-1 aspect-h-1 bg-white rounded-lg overflow-hidden shadow-sm ${
                  activeImage === index ? 'ring-2 ring-violet-500' : ''
                }`}
              >
                <Image
                  src={image}
                  alt={`Thumbnail view ${index + 1}`}
                  className="w-[100px] h-[80px] object-contain object-center p-2"
                />
              </button>
            ))}
          </div>
          <div className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <Image
              src={images[activeImage]}
              alt={`Product view ${activeImage + 1}`}
              className="w-full h-[600px] object-contain object-center p-4"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default RightSlider;
