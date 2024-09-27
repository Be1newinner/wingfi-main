"use client";

import React, { useState } from 'react'
import OrdersList from './OrdersList';

export default function Orders() {
    const [view, setView] = useState(false);
    const handleViewAll = () => {
      setView(!view);
    };

  return (
    <>
    <div className="border-2 w-[48%] max-sm:w-full m-2  bg-white rounded-2xl shadow-xl p-4 ">
    <div className="flex justify-between items-center py-2">
      <h1 className="font-bold text-xl"> Orders </h1>
      <p
        onClick={handleViewAll}
        className="text-xl items-center flex gap-2 font-bold cursor-pointer text-gray-400"
      >
        ...
        <div className="absolute w-24 -translate-x-[90%] mt-20 ">
        {view && (
            <div className="shadow-xl bg-white p-1 border-2 cursor-pointer">
                <p className="text-sm font-bold hover:text-sky-500 text-gray-700 "> This Week </p>
                <p className="text-sm font-bold hover:text-sky-500 text-gray-700 "> last Week </p>
            </div>
        )}
        </div>
      </p>
    </div>
    <div className='overflow-x-scroll no-scrollbar'>
    <div className="flex w-[600px] items-center py-3 text-xl gap-40 mx-10 font-bold ">
        <h1 className='w-[200px]'> Product</h1>
        <h1 className='w-[100px]'> Price</h1>
        <h1 className='w-[300px]'> Delivery date</h1>
    </div>
        <OrdersList />
    </div>
    </div>
    </>
  )
}
