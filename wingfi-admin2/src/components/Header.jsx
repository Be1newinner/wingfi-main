import React, { useState } from "react";
import { LuLogOut, LuSearch } from "react-icons/lu";
import { FiBell, FiUser } from "react-icons/fi";
import { LuMessageSquare } from "react-icons/lu";
import { FiMaximize } from "react-icons/fi";
import { IoGridOutline, IoSettingsOutline } from "react-icons/io5";
import {
  MdForwardToInbox,
  MdOutlineHeadset,
  MdOutlineSettings,
} from "react-icons/md";
import { IoMoonOutline } from "react-icons/io5";
import imageUser from "../assets/images/user-1.png";
// import MessageCart from "./MessageCart";
import NotificationCart from "./NotificationCart";
import RelatedApps from "./RelatedApps";
import { BiTask } from "react-icons/bi";

export default function Header() {
  const [activeBtn, setActiveBtn] = useState(null);

  const handleBtnClick = (btnId) => {
    if (activeBtn === null) {
      setActiveBtn(btnId);
    } else {
      setActiveBtn(null);
    }
  };

  return (
    <div className="pl-7 pr-3 flex py-4 justify-between bg-white sticky flex-1 max-w-full  max-sm:hidden ">
      <div id="SearchBar" className="flex w-[681px]">
        <input
          className=" border-2 w-full h-12 py-[14px] px-[22px] focus:outline-none rounded-xl "
          type="text"
          placeholder="Search Here..."
        />
        <LuSearch className=" items-center -translate-x-10 mt-4 text-lg" />
      </div>

      {/* ================ DAY AND NIGHT MODE================ */}

      <div className="flex items-center gap-2 z-20">
        <div
          onClick={() => handleBtnClick("dayNightMode")}
          className="rounded-full cursor-pointer bg-gray-100 m-[6px] w-[38px] h-[38px]"
        >
          <IoMoonOutline className="text-xl m-2" />
        </div>

        {/* ================ DAY AND NIGHT MODE================ */}
        {/* ================ MESSAGE ================ */}
        <div
          onClick={() => handleBtnClick("message")}
          className="rounded-full bg-gray-100 cursor-pointer m-[5px] w-[38px] h-[38px]"
        >
          <FiBell className="text-xl m-2" />
          <div>
            {activeBtn === "message" && (
              <div className=" -translate-x-[90%] bg-white shadow-lg w-[360px] h-[450px] mt-5 rounded-xl px-4">
                <h1 className="font-bold text-xl py-4 px-2 border-b-2">
                  Message
                </h1>
                {/* <MessageCart /> */}
                <button className="w-full bg-sky-500 py-4 text-white font-bold rounded-2xl hover:bg-white hover:text-sky-500 border-sky-500 border-2">
                  View All
                </button>
              </div>
            )}
          </div>
        </div>
        {/* ================ MESSAGE ================ */}
        {/* ================ NOTIFICATION ================ */}
        <div
          onClick={() => handleBtnClick("notification")}
          className="rounded-full bg-gray-100 cursor-pointer m-[6px] w-[38px] h-[38px]"
        >
          <LuMessageSquare className="text-xl m-2" />
          <div>
            {activeBtn === "notification" && (
              <div className=" -translate-x-[90%] bg-white shadow-lg w-[360px] h-[450px] mt-5 rounded-xl px-4">
                <h1 className="font-bold text-xl py-4 px-2 border-b-2">
                  Notification
                </h1>
                <NotificationCart />
                <button className="w-full bg-sky-500 py-4 text-white font-bold rounded-2xl hover:bg-white hover:text-sky-500 border-sky-500 border-2">
                  View All
                </button>
              </div>
            )}
          </div>
        </div>
        {/* ================ NOTIFICATION ================ */}
        {/* ================ SQUARE ================ */}
        <div className="rounded-full bg-gray-100 cursor-pointer m-[6px] w-[38px] h-[38px]">
          <FiMaximize className="text-xl m-2" />
        </div>
        {/* ================ SQUARE ================ */}
        {/* ================ RELATED APPS ================ */}
        <div
          onClick={() => handleBtnClick("relatedApps")}
          className="rounded-full cursor-pointer bg-gray-100 m-[6px] w-[38px] h-[38px]"
        >
          <IoGridOutline className="text-xl m-2" />
          <div>
            {activeBtn === "relatedApps" && (
              <div className=" -translate-x-[90%] bg-white shadow-lg w-[360px] h-[450px] mt-5 rounded-xl px-4">
                <h1 className="font-bold text-xl py-4 px-2 border-b-2">
                  Related Apps
                </h1>
                <RelatedApps />
                <button className="w-full bg-sky-500 py-3 my-1 text-white font-bold rounded-2xl hover:bg-white hover:text-sky-500 border-sky-500 border-2">
                  View All App
                </button>
              </div>
            )}
          </div>
        </div>
        {/* ================ RELATEDD APPS ================ */}
        {/* ================ PROFILE ================ */}
        <div
          onClick={() => handleBtnClick("user")}
          className=" flex cursor-pointer gap-4"
        >
          <div className=" cursor-pointer rounded-full bg-gray-300 w-[38px] h-[38px] gap-4">
            <img src={imageUser} alt="" />
          </div>
          <div className="border-r-2 cursor-pointer w-[130px]">
            <h1 className="font-bold ">kritsan Watson</h1>
            <p className="text-sm">Admin</p>
            <div className="absolute">
              {activeBtn === "user" && (
                <div className=" -translate-x-[50%] bg-white shadow-lg w-[200px] mt-5 p-5 text-md font-semibold rounded-xl ">
                  <div className="flex items-center gap-2 pb-2 hover:text-[#3984FC]">
                    <FiUser color="grey" />
                    <h1>Account</h1>
                  </div>
                  <div className="flex items-center gap-2 py-2 hover:text-[#3984FC]">
                    <MdForwardToInbox color="grey" />
                    <h1>Inbox</h1>
                  </div>
                  <div className="flex items-center gap-2 py-2 hover:text-[#3984FC]">
                    <BiTask color="grey" />
                    <h1>Taskboard</h1>
                  </div>
                  <div className="flex items-center gap-2 py-2 hover:text-[#3984FC]">
                    <IoSettingsOutline color="grey" />
                    <h1>Setting</h1>
                  </div>
                  <div className="flex items-center gap-2 py-2 hover:text-[#3984FC]">
                    <MdOutlineHeadset color="grey" />
                    <h1>Support</h1>
                  </div>
                  <div className="flex items-center gap-2 pt-2 hover:text-[#3984FC]">
                    <LuLogOut color="grey" />
                    <h1>Log out</h1>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* ================ PROFILE ================ */}
        {/* ================ SETTING ================ */}
        <div>
          <MdOutlineSettings className="text-3xl animate-spin duration-1000 m-2" />
        </div>
        {/* ================ SETTING ================ */}
      </div>
    </div>
  );
}
