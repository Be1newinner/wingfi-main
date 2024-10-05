"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import AnalysisCart from "@/components/AnalysisCart";
import TopProducts from "@/components/TopProducts";
// import TopProducts from "@/components/";
// import ProductOverview from "@/components/ProductOverview";
import Orders from "@/components/Orders";
// import Earnings from "@/components/Earning";
import NewComments from "@/components/NewComments";
import Footer from "@/components/Footer";
import LeftSidebar from "@/components/Sidebar";
import { VscThreeBars } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { loadAllProductsRequest } from "@/redux/reducers/products";

export default function HomePage() {
  const [show, setShow] = useState(false);
  const handle = () => {
    setShow(true);
  };

  const dispatch = useDispatch();

  const handleClose = () => {
    if (show) {
      setShow(false);
    }
  };

  useEffect(() => {
    dispatch(
      loadAllProductsRequest()
    );
  }, [dispatch]);


  return (
    <div className="flex flex-row h-screen overflow-hidden">
      <div
        className={
          show ? "w-[280px] duration-500 max-sm:absolute  " : "w-20 duration-500"
        }
      >
        <LeftSidebar handleClose={handleClose} show={show} handle={handle} />
      </div>

      <div className={show ? " w-[60%]  flex-1" : "w-full"}>
        <header className="flex items-center  justify-between">
          <Header />
        </header>

        <main className="mx-5 h-screen overflow-scroll scrollbar-hide  justify-center pb-48">
          <div>
            <AnalysisCart />
          </div>
          <div className="flex flex-wrap justify-between">
            <TopProducts />
            <Orders />
            {/* <TopCountrySales /> */}
          </div>
          <div className="flex flex-wrap justify-between">
            {/* <BestShopSeller /> */}
            
            {/* <ProductOverview /> */}
          </div>
          {/* <div className="flex flex-wrap"> */}
            
            {/* <Earnings /> */}
          {/* </div> */}
          <div>
            <NewComments />
          </div>
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}
