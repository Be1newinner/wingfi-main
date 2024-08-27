import React, { useState } from "react";
import LeftSidebar from "../../components/Sidebar";
import { VscThreeBars } from "react-icons/vsc";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ReportAnalysisCart from "../../components/ReportAnalysisCart";
import { GrView } from "react-icons/gr";
import { AiOutlineEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

export default function Report() {
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
      transferId: 11081197,
      name: "Kathryn Murphy",
    },
    {
      transferId: 11081198,
      name: "Floyd Milees",
    },
    {
      transferId: 11081197,
      name: "Brooklyn Simmons",
    },
    {
      transferId: 11081198,
      name: "Wade Waren",
    },
    {
      transferId: 11081197,
      name: "Devon Lane",
    },
    {
      transferId: 11081198,
      name: "Jane Coper",
    },
    {
      transferId: 11081197,
      name: "Jane Wilson",
    },
    {
      transferId: 11081198,
      name: "albert flores",
    },
    {
      transferId: 11081197,
      name: "Robert Fox",
    },
    {
      transferId: 11081198,
      name: "Theresa",
    },
  ];

  return (
    <div className="flex flex-row bg-[#f2f7fb] ">
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

        <main>
          <div className="flex flex-wrap gap-2 justify-between items-center p-4 ">
            <h1 className="font-bold text-2xl ">Add Attribute </h1>
            <div className="flex gap-4 items-center ">
              <h1>Dashboard </h1>
              <IoIosArrowForward />
              <h1>Report</h1>
              <IoIosArrowForward />
              <h1> Report </h1>
            </div>
          </div>

          <div>
            <ReportAnalysisCart />
          </div>

          <div className="border-2 rounded-xl  shadow-xl bg-white w-[95%] max-sm:mx-auto m-5 p-4 ">
            <h1 className="font-bold text-2xl">Transfer History</h1>
            <div className="overflow-x-scroll no-scrollbar py-4">
              <div className="font-bold flex justify-between bg-gray-50 h-14 rounded-xl items-center p-2 pr-10 w-full  ">
                <h1>Transfer Id</h1>
                <h1>Name</h1>
                <h1>Date</h1>
                <h1>Total</h1>
                <h1>Action</h1>
              </div>
              {data.map((d) => (
                <div
                  style={{
                    backgroundColor: d.transferId === 11081198 ? "#f5f5f5" : "",
                  }}
                  className="flex items-center justify-between w-full h-14 px-2  hover:bg-gray-200 my-2 rounded-xl"
                >
                  <h1>{d.transferId}</h1>
                  <p>{d.name}</p>
                  <p>Mar 20, 2023</p>
                  <p>$2,700</p>
                  <div className="flex gap-3">
                    <GrView color="blue" />
                    <AiOutlineEdit color="green" />
                    <MdDelete color="red" />
                  </div>
                </div>
              ))}
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
