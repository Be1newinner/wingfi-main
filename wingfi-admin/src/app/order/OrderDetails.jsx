import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import image1 from "../../assets/images/1.png";
import { FaAngleDown } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import LeftSidebar from "../../components/Sidebar";
import { VscThreeBars } from "react-icons/vsc";

export default function OrderDetails() {
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
      <div className={show ? "w-[280px] duration-500 max-sm:absolute" : "w-0 duration-500"}>
        <LeftSidebar handleClose={handleClose} />
      </div>

      <div className={show ? "w-[60%]  flex-1" : "w-full"}>
        <header className="flex items-center  justify-between">
          <div className={show ? "hidden" : "text-3xl pl-2 bg-white py-[26px]" } >
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
              <h1>Order</h1>
              <IoIosArrowForward />
              <h1> Order Details </h1>
            </div>
          </div>

          <div className="flex flex-wrap justify-between w-full p-4">
            <div className=" mb-4 w-[58%] max-sm:w-full ">
              <div className="border-2 rounded-xl  shadow-xl bg-white w-full p-4 ">
                <div className="flex bg-gray-200 h-10 p-4 rounded-xl justify-between font-bold items-center">
                  <h1>All Item</h1>
                  <div>
                    <h1 className="flex items-center gap-2">
                      Sort <FaAngleDown />{" "}
                    </h1>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between font-bold items-center bg-gray-100 p-2 rounded-xl my-4 hover:bg-gray-400 duration-300">
                    <div className="flex items-center">
                      <img src={image1} alt="" />
                      <div>
                        <h1>Product name</h1>
                        <h1>Kristin Watson</h1>
                      </div>
                    </div>
                    <div>
                      <h1>Quantity</h1>
                      <p>1</p>
                    </div>
                    <div>
                      <h1>Price</h1>
                      <p>$ 50.47</p>
                    </div>
                  </div>
                  <div className="flex justify-between font-bold p-2 items-center  rounded-xl my-4 hover:bg-gray-400  duration-300">
                    <div className="flex items-center">
                      <img src={image1} alt="" />
                      <div>
                        <h1>Product name</h1>
                        <h1>Kristin Watson</h1>
                      </div>
                    </div>
                    <div>
                      <h1>Quantity</h1>
                      <p>1</p>
                    </div>
                    <div>
                      <h1>Price</h1>
                      <p>$ 50.47</p>
                    </div>
                  </div>
                  <div className="flex justify-between font-bold items-center bg-gray-100 rounded-xl my-4 p-2 hover:bg-gray-400 duration-300">
                    <div className="flex items-center">
                      <img src={image1} alt="" />
                      <div>
                        <h1>Product name</h1>
                        <h1>Kristin Watson</h1>
                      </div>
                    </div>
                    <div>
                      <h1>Quantity</h1>
                      <p>1</p>
                    </div>
                    <div>
                      <h1>Price</h1>
                      <p>$ 50.47</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-2 rounded-xl  shadow-xl bg-white w-full my-4 p-4 ">
                <div className="flex px-20 bg-gray-200 h-10 p-4 rounded-xl justify-between font-bold items-center">
                  <h1>Card Total</h1>
                  <h1>Price</h1>
                </div>
                <div className="font-bold flex justify-between px-20 my-2 ">
                  <h1 className="text-gray-400">Subtotal:</h1>
                  <p>$70.00</p>
                </div>
                <hr />
                <div className="font-bold flex justify-between px-20 my-2 ">
                  <h1 className="text-gray-400">Shipping:</h1>
                  <p>$10.00</p>
                </div>
                <hr />
                <div className="font-bold flex justify-between px-20 my-2 ">
                  <h1 className="text-gray-400">Tax (Gst):</h1>
                  <p>$5.00</p>
                </div>
                <hr />
                <div className="font-bold flex justify-between px-20 my-2 ">
                  <h1 className="text-gray-400">Total Price:</h1>
                  <p className="text-red-400">$85.00</p>
                </div>
              </div>
            </div>
            <div className="w-[40%] max-sm:w-full  mb-4">
              <div className="border-2 rounded-xl  shadow-xl bg-white w-full  p-4 mb-2 ">
                <div className="flex  p-4 rounded-xl justify-between font-bold items-center">
                  <div className="w-[50%]">
                    <h1 className="pb-2">Summary</h1>
                    <div className="flex justify-between">
                      <h1 className="text-gray-400 py-2">Order ID</h1>
                      <p>#192843</p>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="text-gray-400 py-2">Date</h1>
                      <p>20 Nov 2023</p>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="text-gray-400 py-2">Total</h1>
                      <p className="text-red-400">$ 948.5</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-2 rounded-xl  shadow-xl bg-white w-full  p-4 mb-2 ">
                <div className="flex  p-4 rounded-xl justify-between font-bold items-center">
                  <div className="w-full">
                    <h1 className="pb-2">Shipping Address</h1>
                    <p className="text-gray-400">
                      3517 W. Gray St. Utica, Pennsylvania 57867
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-2 rounded-xl  shadow-xl bg-white w-full  p-4 mb-2 ">
                <div className="flex  p-4 rounded-xl justify-between font-bold items-center">
                  <div className="w-full">
                    <h1 className="pb-2">Payment Method</h1>
                    <p className="text-gray-400">
                      Pay on Delivery (Cash/Card). Cash on delivery (COD)
                      available. Card/Net banking acceptance subject to device
                      availability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-2 rounded-xl  shadow-xl bg-white w-full  p-4 ">
                <div className="flex  p-4 rounded-xl justify-between font-bold items-center">
                  <div className="w-full">
                    <h1 className="pb-2">Expected Date Of Delivery</h1>
                    <p className="text-green-400">20 Nov 2023</p>
                    <button className="w-full font-bold text-blue-500 border-2 border-blue-500 rounded-xl px-4 py-2 hover:text-white hover:bg-blue-500">
                      Track Order
                    </button>
                  </div>
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
