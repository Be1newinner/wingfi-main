import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { GrView } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import LeftSidebar from "../../components/Sidebar";
import { VscThreeBars } from "react-icons/vsc";

export default function Attribute() {
  const [show, setShow] = useState(false);
  const handle = () => {
    setShow(true);
  };

  const handleClose = () => {
    if (show) {
      setShow(false);
    }
  };

  const data = [
    {
      id: 1,
      name: "Color",
      value: "green, blue, white",
    },
    {
      id: 2,
      name: "Size",
      value: "s, m, l, xl",
    },
    {
      id: 3,
      name: "Material",
      value: "Cotton Polyster",
    },
    {
      id: 4,
      name: "Style",
      value: "Classic, modern, ethric, western ",
    },
    {
      id: 5,
      name: "Meat Type",
      value: "fresh, frozen, marinated",
    },
    {
      id: 6,
      name: "Weight",
      value: "1kg, 2kg, 3kg, over 5kg",
    },
    {
      id: 7,
      name: "Packaging",
      value: "plastic Box, paper, nylon, tin cans",
    },
    {
      id: 8,
      name: "Kind of food",
      value: "dried food, wet food, supplementary food ",
    },
    {
      id: 9,
      name: "Milk",
      value: "fomula milk, fresh milk",
    },
    {
      id: 10,
      name: "Combo",
      value: "cat food, dog food",
    },
  ];
  return (
    <div className="flex flex-row  bg-[#f2f7fb]">
      <div
        className={
          show ? "w-[280px] duration-500 max-sm:absolute" : "w-0 duration-500"
        }
      >
        <LeftSidebar handleClose={handleClose} />
      </div>

      <div className={show ? " w-[60%]  flex-1" : "w-full"}>
        <header className="flex items-center  justify-between">
          <div className={show ? "hidden" : "text-3xl pl-2 bg-white py-[26px]"}>
            <VscThreeBars onClick={handle} />
          </div>
          <Header />
        </header>

        <main className="bg-gray-100">
          <div className="flex flex-wrap gap-2 justify-between items-center p-4 ">
            <h1 className="font-bold text-2xl ">Add Attribute </h1>
            <div className="flex gap-4 items-center ">
              <h1>Dashboard </h1>
              <IoIosArrowForward />
              <h1>Attribute</h1>
              <IoIosArrowForward />
              <h1>All Attribute </h1>
            </div>
          </div>

          <div className="border-2 rounded-xl shadow-xl bg-white w-[95%] max-sm:w-full max-sm:mx-auto  mx-10 p-4 ">
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
            <div className="overflow-x-scroll no-scrollbar py-4">
              <div className="font-bold flex justify-between bg-gray-50 h-14 rounded-xl items-center p-2 w-full  ">
                <h1>Category</h1>
                <h1>Value</h1>
                <h1>Action</h1>
              </div>

              {/* {data.map((d) => ( */}
                <div
                  style={{
                    backgroundColor:
                      d.id === 1 ||
                      d.id === 3 ||
                      d.id === 5 ||
                      d.id === 7 ||
                      d.id === 9
                        ? "#f5f5f5"
                        : "",
                  }}
                  className="flex items-center justify-between w-full h-14 px-2  hover:bg-gray-200 my-2 rounded-xl"
                >
                  <h1 className="font-bold">{d.name}</h1>
                  <p>{d.value}</p>
                  <div className="flex gap-3">
                    <GrView color="blue" />
                    <AiOutlineEdit color="green" />
                    <MdDelete color="red" />
                  </div>
                </div>
              {/* ))} */}
            </div>
            <hr />
            <div className="flex justify-between items-center py-4">
              <h1 className="font-semibold text-gra-400">Showing 10 entries</h1>
              <div className="flex gap-2">
                <div className="border-2 rounded-full text-2xl p-[10px] w-13 h-12 hover:bg-blue-500 hover:text-white  ">
                  <IoIosArrowBack />
                </div>
                <div className=" rounded-full text-2xl  pl-[17px] pt-[7px] w-12  h-12 hover:bg-blue-500 hover:text-white  ">
                  1
                </div>
                <div className=" rounded-full text-2xl bg-blue-500 pl-[17px] pt-[7px] w-12  h-12 text-white  ">
                  2
                </div>
                <div className=" rounded-full text-2xl  pl-[17px] pt-[7px] w-12  h-12 hover:bg-blue-500 hover:text-white  ">
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
