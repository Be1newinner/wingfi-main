import React, { useState } from "react";
import { LuLogOut } from "react-icons/lu";
import { FiUser } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdForwardToInbox, MdOutlineHeadset } from "react-icons/md";
import { BiTask } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { logoutRequest } from "@/redux/reducers/auth";

export default function Header() {
  const [activeBtn, setActiveBtn] = useState(null);
  const dispatch = useDispatch();
  const { user, loading, error } = useSelector((state) => state.auth);

  const handleBtnClick = (btnId) => {
    if (activeBtn === null) {
      setActiveBtn(btnId);
    } else {
      setActiveBtn(null);
    }
  };

  const handleLogout = () => {
    dispatch(logoutRequest());
  }

  return (
    <div className="pl-7 pr-3 flex py-4 justify-between bg-white sticky flex-1 max-w-full  max-sm:hidden items-center">
      <span className="text-center w-full text-xl font-bold">
        Wingfi Admin Panel
      </span>
      <div className="flex items-center gap-2 z-20 ">
        <div
          onClick={() => handleBtnClick("user")}
          className=" flex cursor-pointer gap-4"
        >
          <div className=" cursor-pointer rounded-full bg-gray-300 w-[38px] h-[38px] gap-4">
            <Image src="/images/user-1.png" alt="" height={1080} width={1080} />
          </div>
          {user && user.uid ? (
          <div className="border-r-2 cursor-pointer w-[130px]">
            <h1 className="font-bold ">{user.displayName}</h1>
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
                  <Link href="/user/login">
                    <div onClick={handleLogout} className="flex items-center gap-2 pt-2 hover:text-[#3984FC]">
                      <LuLogOut color="grey" />
                      <h1>Log out</h1>
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
