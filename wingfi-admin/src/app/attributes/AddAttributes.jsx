import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IoIosArrowForward } from "react-icons/io";
import LeftSidebar from "../../components/Sidebar";
import { VscThreeBars } from "react-icons/vsc";

export default function AddAttributes() {
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
          show ? "w-[280px] duration-500 max-sm:absolute" : "w-0 duration-500"
        }
      >
        <LeftSidebar handleClose={handleClose} />
      </div>

      <div className={show ? " w-[60%]  flex-1" : "w-full"}>
        <header className="flex items-center  justify-between">
          <div className="text-3xl pl-2 bg-white py-[26px]">
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
              <h1>Attributes</h1>
              <IoIosArrowForward />
              <h1>Add Attributes </h1>
            </div>
          </div>

          <div className="border-2 rounded-xl font-bold   shadow-xl bg-white w-[95%] max-sm:mx-auto mx-10 p-4 ">
            <div className="flex flex-wrap gap-2 justify-between my-2 items-center">
              <h1>Attribute name </h1>
              <input
                className="w-[70%] max-sm:w-full h-[50px] rounded-xl px-2 border-2"
                type="text"
                placeholder="Attribute name"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-between my-2 items-center">
              <h1>Attribute value </h1>
              <input
                className="w-[70%] max-sm:w-full h-[50px] rounded-xl px-2 border-2"
                type="text"
                placeholder="Attirbute value"
              />
            </div>
            <button className="w-[200px] ml-[50%] max-sm:ml-0 max-sm:w-full my-2 font-bold text-white bg-blue-500 border-2 rounded-xl px-4 py-2 hover:text-blue-500 hover:bg-white hover:border-blue-500">
              Save
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
