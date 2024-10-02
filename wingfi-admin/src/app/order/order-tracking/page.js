"use client";
import { VscThreeBars } from "react-icons/vsc";

import { useState } from "react";
import LeftSidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function OrderTracking() {
  const [show, setShow] = useState(false);
  const handle = () => {
    setShow(true);
  };

  const handleClose = () => {
    if (show) {
      setShow(false);
    }
  };

  return (
    <div className="flex flex-row bg-[#f2f7fb] ">
      <div
        className={
          show ? "w-[280px] duration-500 max-sm:absolute  " : "w-20 duration-500"
        }
      >
        <LeftSidebar handleClose={handleClose} show={show} handle={handle} />
      </div>

      <div className={show ? "w-[60%] flex-1 " : "w-full"}>
        <header className="flex items-center  justify-between">
          <Header />
        </header>

        <main className="bg-gray-100 max-sm:w-full h-screen overflow-scroll no-scrollbar">
          <div className="flex flex-wrap gap-2 justify-between items-center p-4 ">
            <h1 className="font-bold text-2xl ">Add Attribute </h1>
            <div className="flex gap-4 items-center ">
              <h1>Dashboard </h1>
              <IoIosArrowForward />
              <h1>Order</h1>
              <IoIosArrowForward />
              <h1>Order Tracking </h1>
            </div>
          </div>

          <div className=" flex flex-wrap max-sm:mx-auto border-2 rounded-xl  shadow-xl bg-white w-[95%] mx-10 my-4  p-4 ">
            <Image src="/images/track-oder-1.png" alt="" width={300} height={400} />
            <div>
              <h1 className="font-bold text-xl mb-4">
                Pouch Pocket Hoodie Orange
              </h1>
              <div className="flex gap-20 font-bold py-2">
                <h1 className="text-gray-400 ">Order ID:</h1>
                <p>#192834</p>
              </div>
              <div className="flex gap-20 font-bold py-2">
                <h1 className="text-gray-400 ">Brand:</h1>
                <p>20 nov 2023</p>
              </div>
              <div className="flex gap-20 font-bold py-2">
                <h1 className="text-gray-400 ">Order Placed:</h1>
                <p>20 nov 2023</p>
              </div>
              <div className="flex gap-20 font-bold py-2">
                <h1 className="text-gray-400 ">Quantity:</h1>
                <p>20 nov 2023</p>
              </div>
              <button className="w-[200px] max-sm:w-full  font-bold text-blue-500 border-2 border-blue-500 rounded-xl px-4 py-2 hover:text-white hover:bg-blue-500">
                View Shop
              </button>
              <button className="w-[200px] max-sm:w-full max-sm:ml-0 mt-3 ml-4 font-bold text-blue-500 border-2 border-blue-500 rounded-xl px-4 py-2 hover:text-white hover:bg-blue-500">
                View Product
              </button>
            </div>
          </div>

          <div className="max-sm:mx-auto border-2 rounded-xl  shadow-xl bg-white w-[95%] mx-10 mb-4 p-4 ">
            <h1 className="font-bold text-xl">Details</h1>
            <p className="font-bold text-gray-400">
              Your items is on the way. Tracking information will be available
              within 24 hours.
            </p>
            <div className="my-6">
              <div className="w-full h-2 bg-gray-400">
                <div className="w-[70%] h-2 bg-blue-500"></div>
              </div>
              <div className="flex justify-between px-48 text-5xl -translate-y-7">
                <FaCheckCircle className="text-blue-500 bg-white" />
                <FaCheckCircle className="text-blue-500 bg-white" />
                <FaCheckCircle className="text-blue-500 bg-white" />
                <FaCheckCircle className="text-gray-400 bg-white" />
              </div>
            </div>

            <div className="flex flex-wrap justify-between px-44">
              <div className="font-bold justify-center">
                <h1 className="text-xl ">Recieving Orders</h1>
                <p className="text-gray-400">05:43 AM</p>
              </div>
              <div className="font-bold justify-center">
                <h1 className="text-xl ">Order processing</h1>
                <p className="text-gray-400">01:43 PM</p>
              </div>
              <div className="font-bold justify-center">
                <h1 className="text-xl ">Being delivered</h1>
                <p className="text-gray-400">Processing</p>
              </div>
              <div className="font-bold justify-center">
                <h1 className="text-xl text-gray-400 ">Delivered</h1>
                <p className="text-gray-400">Pending</p>
              </div>
            </div>
          </div>

          <div className=" border-2 rounded-xl  shadow-xl bg-white w-[95%] max-sm:mx-auto  mx-10 my-4  p-4 ">
            <div className="flex font-bold text-lg w-full h-10 items-center p-4 pr-60 justify-between bg-gray-200 rounded-xl">
              <h1>Date</h1>
              <h1>Time</h1>
              <h1>Description</h1>
              <h1>Location</h1>
            </div>
            <div className="flex text-gray-400 justify-between p-2">
              <p>20 Nov 2023</p>
              <p>2:30 PM</p>
              <p>The sender is preparing the goods</p>
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
            <hr />
            <div className="flex text-gray-400 justify-between p-2">
              <p>20 Nov 2023</p>
              <p>2:30 PM</p>
              <p>The sender is preparing the goods</p>
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
            <hr />
            <div className="flex text-gray-400 justify-between p-2">
              <p>20 Nov 2023</p>
              <p>2:30 PM</p>
              <p>The sender is preparing the goods</p>
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
            <hr />
            <div className="flex text-gray-400 justify-between p-2">
              <p>20 Nov 2023</p>
              <p>2:30 PM</p>
              <p>The sender is preparing the goods</p>
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
            <hr />
            <div className="flex text-gray-400 justify-between p-2">
              <p>20 Nov 2023</p>
              <p>2:30 PM</p>
              <p>The sender is preparing the goods</p>
              <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
            </div>
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
