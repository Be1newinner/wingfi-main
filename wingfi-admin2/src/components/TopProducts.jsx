"use client";
import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import TopProductsList from "./TopProductsList";

export default function TopProducts() {
  const [view, setView] = useState(false);
  const handleViewAll = () => {
    setView(!view);
  };

  return (
    <>
    <div className=" border-2 w-[48%] max-sm:w-full m-2 bg-white rounded-2xl shadow-xl p-4">
    <div className="flex  justify-between items-center">
      <h1 className="font-bold text-xl">Top Products</h1>
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
        <TopProductsList className="hover:bg-gray-300" />
    </div>
    </>
  );
}
