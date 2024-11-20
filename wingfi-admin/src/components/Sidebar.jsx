"use client";

import React, { useState } from "react";
import { IoCloseSharp, IoGridOutline } from "react-icons/io5";
import { LuCopyPlus, LuShoppingCart } from "react-icons/lu";
import { RiUserLine } from "react-icons/ri";
import Link from "next/link";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export default function LeftSidebar({ handleClose, show, handle }) {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  // console.log("SHOW => ", show);
  return (
    <aside className="relative overflow-y-scroll  h-screen no-scrollbar bg-white shadow-md z-50 ">
      <div className="flex items-center justify-between py-[15px] px-5  ">
        {show ? (
          <h1 className="font-extrabold text-5xl">WINGFI</h1>
        ) : (
          <h1 className="font-extrabold text-5xl">W</h1>
        )}
        <div
          onClick={handleClose}
          className={!show ? "cursor-pointer hidden" : "inline"}
        >
          <IoCloseSharp className="text-2xl " />
        </div>
      </div>
      <hr />
      <div className="p-4">
        <h1
          className={
            !show
              ? "hidden"
              : "inline font-bold text-xs text-gray-400 pl-3 mb-[10px]"
          }
        >
          MAIN HOME
        </h1>
        <Link href="/">
          <div
            onClick={() => handleMenuClick("dashboard")}
            className={`flex items-center p-3 cursor-pointer rounded-xl duration-300 ${
              show ? "justify-between" : "justify-center "
            } ${
              activeMenu === "dashboard"
                ? "bg-[#3984FC] text-white hover:text-white"
                : "bg-[#E9F1FF] text-[#3984FC] hover:text-[#3984FC]" 
            }`}
            
          >
            <div
              className={show ? "flex gap-2 items-center  font-semibold" : ""}
            >
              <IoGridOutline />

              <h1 className={!show ? "hidden" : "inline"}>Dashboard</h1>
            </div>
          </div>
        </Link>
      </div>
      {/* =============== all page ================== */}
      <div className="p-4">
        <h1
          className={
            !show
              ? "hidden"
              : "inline font-bold text-xs text-gray-400 pl-3 mb-[10px]"
          }
        >
          ALL PAGE
        </h1>
        <Link href="/products">
          <div
             onClick={() => handleMenuClick("products")}
             className={`flex items-center p-3 cursor-pointer rounded-xl duration-300 ${
               show ? "justify-between" : "justify-center mb-10"
             } ${
               activeMenu === "products"
                 ? "bg-[#3984FC] text-white hover:text-white"
                 : "bg-[#E9F1FF] text-[#3984FC] hover:text-[#3984FC]" 
             }`}
          >
            <div className="flex gap-2 items-center font-semibold">
              <LuShoppingCart />

              <h1 className={!show ? "hidden" : "inline"}>Products</h1>
            </div>
          </div>
        </Link>
        <>
          <Link href="/products">
            <div className={!show ? "hidden" : "inline"}>
              <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                <div className="w-2 h-2 bg-gray-300 rotate-45">
                  <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                </div>
                <h1>Product List</h1>
              </div>
            </div>
          </Link>
          <Link href="/products/add-products">
            <div className={!show ? "hidden" : "inline"}>
              <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                <div className="w-2 h-2 bg-gray-300 rotate-45">
                  <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                </div>
                <h1>Add Product</h1>
              </div>
            </div>
          </Link>
        </>

        <Link href="/order">
          <div
             onClick={() => handleMenuClick("order")}
             className={`flex items-center p-3 cursor-pointer rounded-xl duration-300 ${
               show ? "justify-between" : "justify-center mb-10"
             } ${
               activeMenu === "order"
                 ? "bg-[#3984FC] text-white hover:text-white"
                 : "bg-[#E9F1FF] text-[#3984FC] hover:text-[#3984FC]" 
             }`}
          >
            <div className="flex gap-2 items-center font-semibold">
              <LuCopyPlus />

              <h1 className={!show ? "hidden" : "inline"}>Order</h1>
            </div>
          </div>
        </Link>
        <div className={!show ? "hidden" : "inline"}>
          <Link href="/order">
            <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
              <div className="w-2 h-2 bg-gray-300 rotate-45">
                <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
              </div>
              <h1>Order List</h1>
            </div>
          </Link>
        </div>

        <Link href="/user">
          <div
             onClick={() => handleMenuClick("user")}
             className={`flex items-center p-3 cursor-pointer rounded-xl duration-300 ${
               show ? "justify-between" : "justify-center mb-10"
             } ${
               activeMenu === "user"
                 ? "bg-[#3984FC] text-white hover:text-white"
                 : "bg-[#E9F1FF] text-[#3984FC] hover:text-[#3984FC]" 
             }`}
          >
            <div className="flex gap-2 items-center font-semibold">
              <RiUserLine />

              <h1 className={!show ? "hidden" : "inline"}>Customers</h1>
            </div>
          </div>
        </Link>
        <div className={!show ? "hidden" : "inline"}>
          <Link href="/user">
            <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
              <div className="w-2 h-2 bg-gray-300 rotate-45">
                <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
              </div>
              <h1>All User</h1>
            </div>
          </Link>
          <Link href="/user/login">
            <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
              <div className="w-2 h-2 bg-gray-300 rotate-45">
                <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
              </div>
              <h1>Login</h1>
            </div>
          </Link>
        </div>
        {!show ? (
          <div onClick={handle} className=" cursor-pointer flex justify-center mb-10">
            <MdOutlineKeyboardArrowRight size={26} />
          </div>
        ) : (
          <div
            onClick={handleClose}
            className=" cursor-pointer flex justify-end"
          >
            <MdOutlineKeyboardArrowLeft size={26} />
          </div>
        )}
      </div>
    </aside>
  );
}
