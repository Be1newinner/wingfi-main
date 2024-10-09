'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import { FaRegHeart, FaHeart } from 'react-icons/fa'; // Import filled heart icon

import { useState } from 'react';

export function ProductViewList3({ item, rating }) {
  const [isFavorite, setIsFavorite] = useState(false); // State to manage heart icon

  const titleFormat = {
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    WebkitLineClamp: 2,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };

  return (
    <li className="relative shadow-md border p-5 w-full">
      <div className="overflow-hidden transition-transform duration-300 hover:scale-110">
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${item.sku}%2F0.webp?alt=media`}
          width={759}
          height={1500}
          alt=""
          className="h-[150px] w-full object-contain"
        />
      </div>

      <span
        className={`absolute top-[20px] right-[20px] transition-transform duration-300 ${
          isFavorite ? 'scale-100 text-red-500' : 'scale-110 text-gray-400'
        }`}
        onClick={() => setIsFavorite(!isFavorite)} // Toggle favorite state
      >
        {isFavorite ? <FaHeart /> : <FaRegHeart />} {/* Conditional rendering of heart */}
      </span>

      <div className="flex flex-col gap-2 mt-3">
        <Link href={'/shop/' + item?.slug}>
          <h2 className="leading-6 font-bold text-lg" style={titleFormat}>
            {item?.title}
          </h2>
        </Link>

        <div className="flex items-end justify-between cursor-pointer">
          <div>
            <div className="flex gap-1 text-yellow-400">
              {Array.from({ length: 5 }, (_, index) => (
                <FaStar
                  key={index}
                  className={index < rating ? 'text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>

            <div className="flex flex-col-reverse">
              <span className="text-error font-[700]">₹{item?.price}/-</span>
              <span className="text-gray-400 line-through">₹{item?.mrp || 0}/-</span>
            </div>
          </div>

          <div>
            <button className="bg-red-500 text-white px-4 py-2 rounded text-md font-bold">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
