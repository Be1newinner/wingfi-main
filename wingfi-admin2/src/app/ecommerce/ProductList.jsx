import React, { useState } from "react";
import Header from "../../components/Header";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import image1 from "../../assets/images/1.png";
import { AiOutlineEdit } from "react-icons/ai";
import { VscThreeBars } from "react-icons/vsc";
import LeftSidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";
import { selectCategory } from "../../redux/selectors/category";

export default function ProductList() {
  const category = useSelector(selectCategory);
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
    <div className="flex flex-row bg-slate-100 pb-8">
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
              <h1>product</h1>
              <IoIosArrowForward />
              <h1>Product List </h1>
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
            <table className="overflow-x-scroll no-scrollbar py-4 w-full border-collapse">
              <thead>
                <tr className="font-bold flex justify-between bg-gray-50 h-10 rounded-xl items-center p-2 w-full  ">
                  <th className="h-16 flex items-center flex-1">Image</th>
                  <th className="h-16 flex items-center flex-1">Title</th>
                  <th className="h-16 flex items-center flex-1">Price</th>
                  <th className="h-16 flex items-center flex-1">MRP</th>
                  <th className="h-16 flex items-center flex-1">Status</th>
                  <th className="h-16 flex items-center flex-1">SKU</th>
                  <th className="h-16 flex items-center flex-1">Start date</th>
                  <th className="h-16 flex items-center justify-center flex-1">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {category.map((d) => (
                  <tr className="flex items-center justify-between flex-1 hover:bg-gray-200 duration-300 rounded-xl cursor-pointer border-b">
                    <td className="font-bold h-16 flex items-center flex-1">
                      <img src={image1} alt="" />
                    </td>
                    <td className="h-16 flex items-center flex-1">
                      <h1>{d.name}</h1>
                    </td>
                    <td className=" h-16 flex items-center flex-1">₹ 240 /-</td>
                    <td className=" h-16 flex items-center flex-1">₹ 240 /-</td>
                    <td className=" h-16 flex items-center flex-1">
                      {d.quantity}
                    </td>
                    <td className=" h-16 flex items-center flex-1">{d.sale}</td>
                    <td className=" h-16 flex items-center flex-1">
                      {d.startdate}
                    </td>
                    <td className=" h-16 flex items-center flex-1 justify-center">
                      <AiOutlineEdit size={24} />
                    </td>
                  </tr>
                ))}
              </tbody>
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
      </div>
    </div>
  );
}
