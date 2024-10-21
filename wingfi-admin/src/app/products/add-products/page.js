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
            <div className="w-full gap-4">
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

                <button
                  onClick={handleSubmit}
                  className="py-2 px-2 mb-4 border-2 rounded-xl w-[30%] border-blue-500 bg-blue-500 text-white hover:bg-white hover:text-blue-500 "
                >
                  Add product
                </button>
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
