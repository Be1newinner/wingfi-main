"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LeftSidebar from "@/components/Sidebar";
import { addNewProductsRequest } from "@/redux/reducers/products";
import Image from "next/image";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function AddProduct() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    label: "",
    mrp: 0,
    price: 0,
    sku: 0,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    dispatch(addNewProductsRequest(formData));
  };

  const handle = () => {
    setShow(true);
  };

  const handleClose = () => {
    if (show) {
      setShow(false);
    }
  };

  return (
    <div className="flex flex-row  h-screen overflow-hidden ">
      <div
        className={
          show
            ? "w-[280px] duration-500 max-sm:absolute  "
            : "w-20 duration-500"
        }
      >
        <LeftSidebar handleClose={handleClose} show={show} handle={handle} />
      </div>

      <div className={show ? " w-[60%]  flex-1" : "w-full"}>
        <header className="flex items-center  justify-between">
          <Header />
        </header>
        <main className="h-screen overflow-scroll no-scrollbar pb-48">
          <div className="flex flex-wrap justify-between p-4">
            <h1 className="font-bold text-2xl ">Add Products </h1>
            <div className="flex gap-4  ">
              <h1>Dashboard</h1>
              <h1>Products</h1>
              <h1>Add Product </h1>
            </div>
          </div>
          {/* ================cart input ================= */}
          <div>
            <div className="w-full flex gap-4">
              <div className="w-[48%] max-sm:w-full px-4 mx-4 shadow-xl bg-white border-2 rounded-xl">
                <h1 className="py-4 font-bold text-lg ">Product Name </h1>
                <input
                  type="text"
                  name="label"
                  id=""
                  value={formData.label}
                  placeholder="Enter Product Name"
                  className="border-2 w-full rounded-xl h-10 p-2 font-bold focus:outline-none"
                  onChange={handleChange}
                />
                <p className="font-bold text-gray-400">
                  Do not exceed 20 characters when entering the product name.
                </p>
                <div className="flex my-4 gap-4 justify-between">
                  <div className="w-[48%] ">
                    <h1 className="font-bold text-lg my-1 ">MRP</h1>
                    <input
                      type="text"
                      name="mrp"
                      id=""
                      value={formData.mrp}
                      placeholder="MRP"
                      className="border-2 w-full rounded-xl h-10 p-2 font-bold focus:outline-none"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-[48%] ">
                    <h1 className="font-bold text-lg my-1 ">Price</h1>
                    <input
                      type="text"
                      name="price"
                      id=""
                      value={formData.price}
                      placeholder="Price"
                      className="border-2 w-full rounded-xl h-10 p-2 font-bold focus:outline-none"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-[48%] ">
                    <h1 className="font-bold text-lg my-1 ">SKU</h1>
                    <input
                      type="text"
                      name="sku"
                      id=""
                      value={formData.sku}
                      placeholder="SKU"
                      className="border-2 w-full rounded-xl h-10 p-2 font-bold focus:outline-none"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <h1 className="font-bold my-4 text-lg ">Brand</h1>
                  <select
                    className="border-2 h-10 p-2  w-full rounded-lg font-bold text-gray-400"
                    name=""
                    id=""
                  >
                    <option value="">Shop</option>
                    <option value="">Product</option>
                  </select>
                </div>
                <div>
                  <h1 className="font-bold text-lg ">Description</h1>
                  <input
                    type="text"
                    className="w-full h-[200px] border-2 rounded-xl"
                    placeholder="Description"
                  />
                  <p className="text-gray-400 font-bold">
                    Do not exceed 100 characters when entering the product name.
                  </p>
                </div>
              </div>
              {/* ================cart input 2 ================= */}
              <div className="flex-1 max-sm:w-full max-sm:py-4 px-4 mx-4 shadow-xl border-2 rounded-xl">
                <h1 className="py-4 font-bold text-lg ">Product Name </h1>
                <div className="flex gap-4 max-sm:justify-center justify-between">
                  <div className="w-48 h-60 border-2 rounded-xl">
                    <Image
                      src="/images/upload-1.png"
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="w-48 h-60 border-2 rounded-xl">
                    <Image
                      src="/images/upload-2.png"
                      alt=""
                      width={300}
                      height={300}
                    />
                  </div>
                  <div className="w-48 h-60 border-2 border-dashed border-teal-400 rounded-xl overflow-hidden ">
                    <input
                      className="py-20 px-10"
                      type="file"
                      id="file-input"
                      name="ImageStyle"
                    />
                  </div>
                </div>
                <p>
                  You need to add at least 4 images. Pay attention to the
                  quality of the pictures you add, comply with the background
                  color standards. Pictures must be in certain dimensions.
                  Notice that the product shows all the detailsF
                </p>
                <div className="flex  justify-between py-2">
                  <div className="w-[48%] ">
                    <h1 className="font-bold text-xl ">Add size</h1>
                    <select className="border-2 w-full rounded-xl h-10 p-2">
                      <option value="">EU - 44</option>
                      <option value="">EU - 40</option>
                      <option value="">EU - 50</option>
                    </select>
                    <div className="flex flex-wrap gap-2 justify-between py-2">
                      <div className="border-2 rounded-xl h-10 p-2 w-24">
                        EU - 40
                      </div>
                      <div className="border-2 rounded-xl h-10 p-2 w-24">
                        EU - 40
                      </div>
                      <div className="border-2 rounded-xl h-10 p-2 w-24">
                        EU - 40
                      </div>
                      <div className="border-2 rounded-xl h-10 p-2 w-24">
                        EU - 40
                      </div>
                      <div className="border-2 rounded-xl h-10 p-2 w-24">
                        EU - 40
                      </div>
                      <div className="border-2 rounded-xl h-10 p-2 w-24">
                        EU - 40
                      </div>
                    </div>
                  </div>
                  <div className="w-[48%]">
                    <h1 className="font-bold text-xl ">Product date</h1>
                    <div className="flex font-bold items-center border-2 rounded-xl h-10 p-2 justify-between">
                      <input type="date" className="w-full" />
                    </div>
                  </div>
                </div>
                <div className="flex font-bold justify-between w-full">
                  <button
                    onClick={handleSubmit}
                    className="py-2 px-2 border-2 rounded-xl w-[30%] border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500 "
                  >
                    Add product
                  </button>
                  <button className="py-2 px-2 border-2 rounded-xl w-[30%] border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 ">
                    Save product
                  </button>
                  <button className="py-2 px-2 border-2 rounded-xl w-[30%] hover:border-blue-500 hover:text-white hover:bg-blue-500 ">
                    Schedule
                  </button>
                </div>
              </div>
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

export default AddProduct;
