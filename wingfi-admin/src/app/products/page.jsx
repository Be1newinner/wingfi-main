"use client";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";
import { useEffect, useState } from "react";
import LeftSidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { selectProduct } from "@/redux/selectors/product";
import {
  loadAllProductsRequest,
} from "@/redux/reducers/products";

export default function ProductsList() {
  const data = useSelector(selectProduct);
  // console.log("all data is : ",data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllProductsRequest());
  }, [dispatch]);

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
    <div className="flex flex-row bg-[#f2f7fb] h-screen overflow-hidden ">
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

        <main className="bg-gray-100 h-screen overflow-scroll no-scrollbar pb-48">
          <div className="flex flex-wrap justify-between items-center p-4 ">
            <h1 className="font-bold text-2xl ">Products </h1>
            <div className="flex gap-4 items-center ">
              <h1>Dashboard </h1>
              <IoIosArrowForward />
              <h1>products</h1>
              <IoIosArrowForward />
              <h1>ProductsList </h1>
            </div>
          </div>

          <div className="border-2 rounded-xl  shadow-xl bg-white w-[95%] max-sm:mx-auto mx-10 p-4 ">
            <div className="flex flex-wrap gap-2 justify-between ">
              <div className="flex flex-wrap gap-4 items-center">
                <h1 className="font-semibold">showing</h1>
                <select className="font-semibold text-gary-400 border-2 py-2 px-4 h-10 rounded-xl">
                  <option value="">10</option>
                  <option value="">20</option>
                  <option value="">30</option>
                </select>
                <h1 className="font-semibold">Entries</h1>
                <input
                  className="w-[400px] max-sm:w-full border-2 rounded-xl p-2 h-10 "
                  type="search"
                  placeholder="Search Here"
                />
              </div>
              <button className="w-[200px] max-sm:w-full font-bold text-blue-500 border-2 border-blue-500 rounded-xl px-4 py-2 hover:text-white hover:bg-blue-500">
                Add New
              </button>
            </div>
            <table className="w-full">
              <tr>
                <th className="text-left py-4">SrNo</th>
                <th className="text-left">Name</th>
                <th className="text-left">MRP</th>
                <th className="text-left">Price</th>
                <th className="text-left">Rating</th>
                <th className="text-left">SKU</th>
                <th className="text-left">Status</th>
              </tr>
              {data.map((d) => (
                <tr className="hover:bg-gray-200 duration-300">
                  <td className="py-4 text-center">{d.index}</td>
                  <td className="">{d.label}</td>
                  <td>{d.mrp}</td>
                  <td>{d.price}</td>
                  <td>{d.rating}</td>
                  <td>{d.sku}</td>
                  <td>{d.status}</td>
                </tr>
              ))}
            </table>
            <hr />
            <div className="flex flex-wrap gap-2 justify-between items-center py-4">
              <h1 className="font-semibold text-gra-400">Showing 10 entries</h1>
              <div className="flex gap-2 ">
                <div className="border-2 rounded-full text-2xl p-[10px] w-12 h-12 hover:bg-blue-500 hover:text-white  ">
                  <IoIosArrowBack />
                </div>
                <div className=" rounded-full text-2xl  pl-[17px] pt-[7px] w-12  h-12 hover:bg-blue-500 hover:text-white  ">
                  1
                </div>
                <div className=" rounded-full text-2xl bg-blue-500 pl-[17px] pt-[7px] w-12  h-12 text-white  ">
                  2
                </div>
                <div className=" rounded-full text-2xl pl-[17px] pt-[7px] w-12  h-12 hover:bg-blue-500 hover:text-white  ">
                  3
                </div>
                <div className="border-2 rounded-full hover:bg-blue-500 hover:text-white text-2xl  p-[10px] w-12  h-12  ">
                  <IoIosArrowForward />
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
