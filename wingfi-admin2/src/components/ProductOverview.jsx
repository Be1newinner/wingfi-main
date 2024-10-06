"use client";

import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import ProductOverivewList from "./ProductOverivewList";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function ProductOverview() {
  const [view, setView] = useState(false);
  const handleViewAll = () => {
    setView(!view);
  };

  return (
    <>
    <div className="border-2 w-[61%] max-sm:w-full m-2 bg-white rounded-2xl shadow-xl p-4 overflow-hidden">
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-xl">Product Overview</h1>
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
                <p className="text-sm font-bold hover:text-sky-500 text-gray-700 "> 7 Days </p>
            </div>
        )}
        </div>
      </p>
    </div> 
    <div className="overflow-x-scroll no-scrollbar">
      <div className="flex text-xl font-bold my-2 w-[800px]">
        <h1 className="w-[400px] pr-5">Name</h1>
        <h1 className="w-[200px] pr-5">Product ID</h1>
        <h1 className="w-[100px] pr-5">Price</h1>
        <h1 className="w-[100px] pr-5">Quantity</h1>
        <h1 className="w-[100px] pr-5">Sale</h1>
        <h1 className="w-[100px] pr-5">Revenue</h1>
        <h1 className="w-[100px] pr-5">Status</h1>
      </div>
        <ProductOverivewList />
    </div>
    <hr />
            <div className="flex justify-between items-center py-6">
              <h1 className="font-semibold text-gra-400">Showing 10 entries</h1>
              <div className="flex gap-2">
                <div className="border-2 rounded-full text-2xl p-[10px] w-13 h-12 hover:bg-blue-500 hover:text-white  ">
                  <IoIosArrowBack />
                </div>
                <div className=" rounded-full text-2xl  pl-[17px] pt-[7px] w-12  h-12 hover:bg-blue-500 hover:text-white  ">
                  1
                </div>
                <div className=" rounded-full text-2xl bg-blue-500 pl-[17px] pt-[7px] w-12  h-12 text-white  ">
                  2
                </div>
                <div className=" rounded-full text-2xl  pl-[17px] pt-[7px] w-12  h-12 hover:bg-blue-500 hover:text-white  ">
                  3
                </div>
                <div className="border-2 rounded-full hover:bg-blue-500 hover:text-white text-2xl  p-[10px] w-12  h-12  ">
                  <IoIosArrowForward />
                </div>
              </div>
            </div>
    </div>
     
    </>
  );
}

