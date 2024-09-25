import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { VscThreeBars } from "react-icons/vsc";
import { ListView } from "../../components";
import LeftSidebar from "../../components/Sidebar";
import { Product } from "@/constants/types";

export default function ProductList() {
  const [show, setShow] = useState(false);
  const [ProductData, setProductData] = useState<Product[]>([
    {
      image:
        "https://cdn-icons-png.freepik.com/512/679/679821.png?fd=1&filename=box_679821.png",
      title: "ABC2",
      price: 500,
      mrp: 750,
      sku: "AB7043",
      rating: 4.5,
      id: "1",
      slug: "ABC",
      special: 0,
    },
    {
      image:
        "https://cdn-icons-png.freepik.com/512/679/679821.png?fd=1&filename=box_679821.png",
      title: "ABC2",
      price: 500,
      mrp: 750,
      sku: "AB7043",
      rating: 4.5,
      id: "2",
      slug: "ABC",
      special: 0,
    },
    {
      image:
        "https://cdn-icons-png.freepik.com/512/679/679821.png?fd=1&filename=box_679821.png",
      title: "ABC2",
      price: 500,
      mrp: 750,
      sku: "AB7043",
      rating: 4.5,
      id: "3",
      slug: "ABC",
      special: 0,
    },
    {
      image:
        "https://cdn-icons-png.freepik.com/512/679/679821.png?fd=1&filename=box_679821.png",
      title: "ABC2",
      price: 500,
      mrp: 750,
      sku: "AB7043",
      rating: 4.5,
      id: "4",
      slug: "ABC",
      special: 0,
    },
    {
      image:
        "https://cdn-icons-png.freepik.com/512/679/679821.png?fd=1&filename=box_679821.png",
      title: "ABC2",
      price: 500,
      mrp: 750,
      sku: "AB7043",
      rating: 4.5,
      id: "5",
      slug: "ABC",
      special: 0,
    },
  ]);
  const handle = () => {
    setShow(true);
  };

  const handleClose = () => {
    if (show) {
      setShow(false);
    }
  };

  useEffect(() => {
    async function getProducts() {
      
    }
    getProducts();
  }, []);

  const HeaderData: { id: number; title: string }[] = [
    {
      title: "Image",
      id: 0,
    },
    {
      title: "Title",
      id: 1,
    },
    {
      title: "Price",
      id: 2,
    },
    {
      title: "MRP",
      id: 3,
    },
    {
      title: "SKU",
      id: 4,
    },
    {
      title: "Rating",
      id: 5,
    },
    {
      title: "Action",
      id: 6,
    },
  ];

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
            <ListView Header={HeaderData} Data={ProductData} />
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
