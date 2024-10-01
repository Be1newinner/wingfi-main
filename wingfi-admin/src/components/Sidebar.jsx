"use client";

import React from "react";
import { FiLayers } from "react-icons/fi";
import { IoCloseSharp, IoGridOutline } from "react-icons/io5";
import { LuCopyPlus, LuShoppingCart } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";
import Link from "next/link";

export default function LeftSidebar({ handleClose }) {
  return (
    <aside className="relative overflow-y-scroll  h-screen no-scrollbar bg-white shadow-md z-50 ">
      <div className="flex items-center justify-between py-[15px] px-5  ">
        <h1 className="font-extrabold text-5xl">WINGFI</h1>
        <div onClick={handleClose} className="cursor-pointer">
          <IoCloseSharp className="text-2xl " />
        </div>
      </div>
      <hr />
      <div className="p-4">
        <h1 className="font-bold text-xs text-gray-400 pl-3 mb-[10px]">
          MAIN HOME
        </h1>
        <Link href="/">
          <div
            className={
              "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer bg-[#E9F1FF] text-[#3984FC] rounded-xl duration-300"
            }
          >
            <div className="flex gap-2 items-center font-semibold">
              <IoGridOutline />

              <h1>Dashboard</h1>
            </div>
          </div>
        </Link>
      </div>
      {/* =============== all page ================== */}
      <div className="p-4">
        <h1 className="font-bold text-xs text-gray-400 pl-3 mb-[10px]">
          ALL PAGE
        </h1>
        <div
          className={
            "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer bg-[#E9F1FF] text-[#3984FC] rounded-xl duration-300"
          }
        >
          <div className="flex gap-2 items-center font-semibold">
            <LuShoppingCart />

            <h1>Products</h1>
          </div>
        </div>

        <>
          <Link href="/products">
            <div>
              <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                <div className="w-2 h-2 bg-gray-300 rotate-45">
                  <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                </div>
                <h1>Product List</h1>
              </div>
            </div>
          </Link>
          <Link href="/products/add-products">
            <div>
              <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                <div className="w-2 h-2 bg-gray-300 rotate-45">
                  <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                </div>
                <h1>Add Product</h1>
              </div>
            </div>
          </Link>
        </>

        <div
          className={
            "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer bg-[#E9F1FF] text-[#3984FC] rounded-xl duration-300"
          }
        >
          <div className="flex gap-2 items-center font-semibold">
            <FiLayers />

            <h1>Category</h1>
          </div>
        </div>

        <div>
          <Link href="/category">
            <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
              <div className="w-2 h-2 bg-gray-300 rotate-45">
                <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
              </div>
              <h1>Category List</h1>
            </div>
          </Link>
          <Link href="/category/new-category">
            <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
              <div className="w-2 h-2 bg-gray-300 rotate-45">
                <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
              </div>
              <h1>Add Category</h1>
            </div>
          </Link>
        </div>

        <div
          className={
            "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer bg-[#E9F1FF] text-[#3984FC] rounded-xl duration-300"
          }
        >
          <div className="flex gap-2 items-center font-semibold">
            <LuCopyPlus />

            <h1>Order</h1>
          </div>
        </div>

        <div>
          <Link href="/order">
            <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
              <div className="w-2 h-2 bg-gray-300 rotate-45">
                <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
              </div>
              <h1>Order List</h1>
            </div>
          </Link>
        </div>

        <div
          className={
            "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer bg-[#E9F1FF] text-[#3984FC] rounded-xl duration-300"
          }
        >
          <div className="flex gap-2 items-center font-semibold">
            <RiUserLine />

            <h1>Customers</h1>
          </div>
        </div>

        <div>
          <Link href="/user">
            <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
              <div className="w-2 h-2 bg-gray-300 rotate-45">
                <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
              </div>
              <h1>All User</h1>
            </div>
          </Link>
        </div>
      </div>
    </aside>
  );
}
