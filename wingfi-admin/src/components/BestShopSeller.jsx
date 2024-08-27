import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa';
import BestShopSellerList from './BestShopSellerList';

export default function BestShopSeller() {
    const [view, setView] = useState(false);
    const handleViewAll = () => {
      setView(!view);
    };

  return (
    <>
    <div className="border-2 w-[35%] max-sm:w-full m-2 bg-white rounded-2xl shadow-xl p-4 ">
    <div className="flex justify-between items-center py-2">
      <h1 className="font-bold text-xl">Best Shop Sellers</h1>
      <p
        onClick={handleViewAll}
        className="text-xs flex gap-2 font-bold cursor-pointer text-gray-400"
      >
        View All
        <span>
          <FaAngleDown />
        </span> 
        <div className="absolute w-24 -translate-x-[20%] mt-5 ">
        {view && (
            <div className="shadow-xl bg-white p-1 border-2 cursor-pointer">
                <p className="text-sm font-bold hover:text-sky-500 text-gray-700 "> 3 Days </p>
                <p className="text-sm font-bold hover:text-sky-500 text-gray-700 "> 5 Days </p>
            </div>
        )}
        </div>
      </p>
    </div>
    <div className='overflow-x-scroll no-scrollbar '>
    <div className="flex items-center py-3 text-xl w-[600px] font-bold ">
        <h1 className='w-[210px]'>Shop</h1>
        <h1 className='w-[150px]'>Categories</h1>
        <h1 className='w-[140px]'>Total</h1>
        <h1 className='w-[100px]'>Status</h1>
    </div>
        <BestShopSellerList />
    </div>
    </div>
    </>
  )
}
