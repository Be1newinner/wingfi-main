import React, { useState } from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { FiLayers, FiPieChart } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseSharp, IoCubeOutline, IoGridOutline } from "react-icons/io5";
import {
  LuCopyPlus,
  LuHelpCircle,
  LuSettings,
  LuShoppingCart,
} from "react-icons/lu";
import { MdHeadsetMic } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function LeftSidebar({ handleClose }) {
  const [showDashboard, setShowDashboard] = useState(false);
  const [showEcommerce, setShowEcommerce] = useState(false);
  const [showCategory, setShowCategory] = useState(false);
  const [showAttribute, setShowAttribute] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showCustomer, setShowCustomer] = useState(false);
  const [showProductlist, setShowProductlist] = useState(false);

  const handleShowProductlist = () => {
    setShowProductlist(!showProductlist);
  };

  const handleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  const handleEcommerce = () => {
    setShowEcommerce(!showEcommerce);
  };

  const handleShowCategory = () => {
    setShowCategory(!showCategory);
  };

  const handleShowOrder = () => {
    setShowOrder(!showOrder);
  };

  const handleShowCustomer = () => {
    setShowCustomer(!showCustomer);
  };

  const handleShowAttribute = () => {
    setShowAttribute(!showAttribute);
  };

  return (
    <div>
      <aside className="relative overflow-y-scroll h-[700px] no-scrollbar bg-white shadow-md z-50 ">
        <div className="flex items-center justify-between py-[15px] px-5  ">
          <img src={logo} alt="Logo" className="" />
          <div onClick={handleClose}>
            <IoCloseSharp className="text-2xl " />
          </div>
        </div>
        <hr />
        <div className="p-4">
          <h1 className="font-bold text-xs text-gray-400 pl-3 mb-[10px]">
            MAIN HOME
          </h1>
          <div
            onClick={handleDashboard}
            className={
              showDashboard
                ? "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer bg-[#E9F1FF] text-[#3984FC] rounded-xl duration-300"
                : "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer"
            }
          >
            <div className="flex gap-2 items-center font-semibold">
              <IoGridOutline />

              <h1>Dashboard</h1>
            </div>

            <IoIosArrowDown />
          </div>
          {showDashboard && (
            <Link to="/">
              <div>
                <div className="flex items-center gap-2 px-6 text-base font-semibold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>Home 01</h1>
                </div>
              </div>
            </Link>
          )}
        </div>
        {/* =============== all page ================== */}
        <div className="p-4">
          <h1 className="font-bold text-xs text-gray-400 pl-3 mb-[10px]">
            ALL PAGE
          </h1>
          <div
            onClick={handleEcommerce}
            className={
              showEcommerce
                ? "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer bg-[#E9F1FF] text-[#3984FC] rounded-xl duration-300"
                : "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer"
            }
          >
            <div className="flex gap-2 items-center font-semibold">
              <LuShoppingCart />

              <h1>Ecommerce</h1>
            </div>

            <IoIosArrowDown />
          </div>
          {showEcommerce && (
            <Link to="/ecommerce">
              <div>
                <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>Add Product</h1>
                </div>
              </div>
            </Link>
          )}
           <div
            onClick={handleShowProductlist}
            className={
              showProductlist
                ? "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer bg-[#E9F1FF] text-[#3984FC] rounded-xl duration-300"
                : "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer"
            }
          >
            <div className="flex gap-2 items-center font-semibold">
              <LuShoppingCart />

              <h1>Product List</h1>
            </div>

            <IoIosArrowDown />
          </div>
          {showProductlist && (
            <Link to="/productlist">
              <div>
                <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>Product List</h1>
                </div>
              </div>
            </Link>
          )}

          <div
            onClick={handleShowCategory}
            className={
              showCategory
                ? "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer bg-[#E9F1FF] text-[#3984FC] rounded-xl duration-300"
                : "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer"
            }
          >
            <div className="flex gap-2 items-center font-semibold">
              <FiLayers />

              <h1>Category</h1>
            </div>

            <IoIosArrowDown />
          </div>
          {showCategory && (
            <div>
              <Link to="/category-list">
                <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>Category List</h1>
                </div>
              </Link>
              <Link to="/new-category">
                <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>New Category</h1>
                </div>
              </Link>
            </div>
          )}
          <div
            onClick={handleShowAttribute}
            className={
              showAttribute
                ? "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer bg-[#E9F1FF] text-[#3984FC] rounded-xl duration-300"
                : "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer"
            }
          >
            <div className="flex gap-2 items-center font-semibold">
              <IoCubeOutline />

              <h1>Attributes</h1>
            </div>

            <IoIosArrowDown />
          </div>
          {showAttribute && (
            <div>
              <Link to="/attributes">
                <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>Attributes</h1>
                </div>
              </Link>
              <Link to="/add-attributes">
                <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>Add Attributes</h1>
                </div>
              </Link>
            </div>
          )}
          <div
            onClick={handleShowOrder}
            className={
              showOrder
                ? "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer bg-[#E9F1FF] text-[#3984FC] rounded-xl duration-300"
                : "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer"
            }
          >
            <div className="flex gap-2 items-center font-semibold">
              <LuCopyPlus />

              <h1>Order</h1>
            </div>

            <IoIosArrowDown />
          </div>
          {showOrder && (
            <div>
              <Link to="/order-list">
                <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>Order List</h1>
                </div>
              </Link>
              <Link to="/order-details">
                <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>Order Detail</h1>
                </div>
              </Link>
              <Link to="/order-tracking">
                <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>Order Tracking</h1>
                </div>
              </Link>
            </div>
          )}
          <div
            onClick={handleShowCustomer}
            className={
              showCustomer
                ? "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer bg-gray-200 rounded-xl duration-300"
                : "flex items-center justify-between p-3 hover:text-[#3984FC] cursor-pointer"
            }
          >
            <div className="flex gap-2 items-center font-semibold">
              <RiUserLine />

              <h1>User</h1>
            </div>

            <IoIosArrowDown />
          </div>
          {showCustomer && (
            <div>
              <Link to="/all-user">
                <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>All User</h1>
                </div>
              </Link>
              <Link to="/add-new-user">
                <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>Add New User</h1>
                </div>
              </Link>
              <Link to="/login">
                <div className="flex items-center gap-2 px-6 py-2 text-base font-bold text-gray-500 cursor-pointer">
                  <div className="w-2 h-2 bg-gray-300 rotate-45">
                    <div className="w-1 h-1 rounded-full bg-white m-[1px]"></div>
                  </div>
                  <h1>Login</h1>
                </div>
              </Link>
            </div>
          )}

          <Link to="/report">
            <div className="flex items-center justify-between p-2 hover:text-[#3984FC]  cursor-pointer">
              <div className="flex gap-2 items-center font-semibold">
                <FiPieChart />
                <h1>Report</h1>
              </div>
            </div>
          </Link>
        </div>
        {/* =============== all page ================== */}
        {/* =============== settings ================== */}
        <div className="p-4">
          <h1 className="font-bold text-xs text-gray-400 pl-3 mb-[10px]">
            SETTING
          </h1>
          <div className="flex items-center justify-between p-2 hover:text-[#3984FC] cursor-pointer">
            <div className="flex gap-2 items-center font-semibold">
              <LuSettings />
              <h1>Setting</h1>
            </div>
          </div>
        </div>
        {/* =============== setting ================== */}
        {/* =============== support ================== */}
        <div className="p-4">
          <h1 className="font-bold text-xs text-gray-400 pl-3 mb-[10px]">
            SUPPORT
          </h1>
          <Link to="help-center">
            <div className="flex items-center justify-between p-2 hover:text-[#3984FC] cursor-pointer">
              <div className="flex gap-2 items-center font-semibold">
                <LuHelpCircle />
                <h1>Help Center</h1>
              </div>
            </div>
          </Link>
          <Link to="/faqs">
            <div className="flex items-center justify-between p-2 hover:text-[#3984FC] cursor-pointer">
              <div className="flex gap-2 items-center font-semibold">
                <MdHeadsetMic />
                <h1>FAQs</h1>
              </div>
            </div>
          </Link>
          <Link to="/privacy-policy">
            <div className="flex items-center justify-between p-2 hover:text-[#3984FC] cursor-pointer">
              <div className="flex gap-2 items-center font-semibold">
                <BsClipboardCheck />
                <h1>Privacy Policy</h1>
              </div>
            </div>
          </Link>
        </div>
        {/* =============== support ================== */}
        {/* =============== connect us ================== */}
        <Link to="/connect-us">
          <div className="p-4">
            <h1 className="font-bold text-xs text-gray-400 pl-3 mb-[10px]">
              CONNECT US
            </h1>
            <div className="flex items-center justify-between p-2 hover:text-[#3984FC] cursor-pointer"></div>
          </div>
        </Link>
        {/* =============== connect us ================== */}
      </aside>
    </div>
  );
}
