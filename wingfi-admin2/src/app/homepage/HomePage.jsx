import React, { useState } from "react";
import Header from "../../components/Header";
import AnalysisCart from "../../components/AnalysisCart";
import TopProducts from "../../components/TopProducts";
import TopCountrySales from "../../components/TopCountrySales";
import BestShopSeller from "../../components/BestShopSeller";
import ProductOverview from "../../components/ProductOverview";
import Orders from "../../components/Orders";
import Earnings from "../../components/Earning";
import NewComments from "../../components/NewComments";
import Footer from "../../components/Footer";
import LeftSidebar from "../../components/Sidebar";
import { VscThreeBars } from "react-icons/vsc";

export default function HomePage() {
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
    <div className="flex flex-row ">
      <div
        className={
          show ? "w-[280px] duration-500 max-sm:absolute  " : "w-0 duration-500"
        }
      >
        <LeftSidebar handleClose={handleClose} />
      </div>

      <div className={show ? " w-[60%]  flex-1" : "w-full"}>
        <header className="flex items-center  justify-between">
          <div
            className={!show ? "text-3xl pl-2 bg-white py-[26px]" : "hidden"}
          >
            <VscThreeBars onClick={handle} />
          </div>
          <Header />
        </header>

        <main className="mx-5  justify-center">
          <div>
            <AnalysisCart />
          </div>
          <div className="flex flex-wrap">
            <TopProducts />
            <TopCountrySales />
          </div>
          <div className="flex flex-wrap">
            <BestShopSeller />
            <ProductOverview />
          </div>
          <div className="flex flex-wrap">
            <Orders />
            <Earnings />
          </div>
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
