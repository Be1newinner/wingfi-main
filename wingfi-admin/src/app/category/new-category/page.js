"use client";
import { VscThreeBars } from "react-icons/vsc";

import { useState } from "react";
import LeftSidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IoIosArrowForward } from "react-icons/io";

export default function NewCategory() {
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
          show ? "w-[280px] duration-500 max-sm:absolute  " : "w-0 duration-500"
        }
      >
        <LeftSidebar handleClose={handleClose} />
      </div>

      <div className={show ? "w-[60%] flex-1 " : "w-full"}>
        <header className="flex items-center  justify-between">
          <div className={show ? "hidden" : "text-3xl pl-2 bg-white py-[26px]"}>
            <VscThreeBars onClick={handle} />
          </div>
          <Header />
        </header>
        <main className="bg-gray-100">
          <div className="flex flex-wrap justify-between items-center p-4 ">
            <h1 className="font-bold text-2xl ">Add Attribute </h1>
            <div className="flex gap-4 items-center ">
              <h1>Dashboard </h1>
              <IoIosArrowForward />
              <h1>Category</h1>
              <IoIosArrowForward />
              <h1>New Category </h1>
            </div>
          </div>

          <div className="border-2 rounded-xl font-bold shadow-xl bg-white w-[95%] max-sm:w-full max-sm:mx-auto mx-10 p-4 ">
            <div className=" flex flex-wrap  justify-center gap-2  my-2 items-center">
              <h1>Product name </h1>
              <input
                className="w-[70%]  max-sm:w-full h-[50px] rounded-xl px-2 border-2"
                type="text"
                placeholder="Category name"
              />
            </div>
            <div className=" flex flex-wrap  justify-center gap-2  my-2 items-center">
              <h1>Upload image </h1>
              <input
                className="w-[70%] max-sm:w-full  h-[300px] rounded-xl px-2 border-2 pt-32 pl-[30%]"
                type="file"
              />
            </div>
            <div className=" flex flex-wrap  justify-center gap-2  my-2 items-center">
              <h1>Select Category Icon</h1>
              <select
                className="w-[70%] max-sm:w-full  h-[50px] rounded-xl px-2 border-2"
                name=""
                id=""
              >
                <option value="">select icon</option>
                <option value="">icon 1 </option>
                <option value="">icon 2</option>
              </select>
            </div>

            <button className="w-[200px] max-sm:w-full max-sm:ml-0 ml-[50%] my-2 font-bold text-white bg-blue-500 border-2 rounded-xl px-4 py-2 hover:text-blue-500 hover:bg-white hover:border-blue-500">
              Add New
            </button>
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
