"use client";

import { useEffect, useState } from "react";
import LeftSidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "@/redux/selectors/users";
import { loadAllUsersRequest } from "@/redux/reducers/users";
// import Link from "next/link";

export default function OrderTracking() {
  const [show, setShow] = useState(false);
  const handle = () => {
    setShow(true);
  };
  const handleClose = () => {
    if (show) {
      setShow(false);
    }
  };

  const userdata = useSelector(selectUsers);
  // console.log("user data is => ", userdata);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllUsersRequest());
  }, [dispatch]);

  return (
    <div className="flex flex-row bg-[#f2f7fb] h-screen overflow-hidden ">
      <div
        className={
          show
            ? "w-[280px] duration-500 max-sm:absolute  "
            : "w-20 duration-500"
        }
      >
        <LeftSidebar handleClose={handleClose} show={show} handle={handle} />
      </div>

      <div className={show ? "w-[60%] flex-1 " : "w-full"}>
        <header className="flex items-center  justify-between">
          <Header />
        </header>

        <main className="bg-gray-100 h-screen overflow-scroll no-scrollbar pb-40">
          <div className="flex flex-wrap gap-2 justify-between items-center p-4 ">
            <h1 className="font-bold text-2xl ">Users </h1>
            <div className="flex gap-4 items-center ">
              <h1>Dashboard </h1>
              <IoIosArrowForward />
              <h1>User</h1>
              <IoIosArrowForward />
              <h1> All User </h1>
            </div>
          </div>

          <div className="border-2 rounded-xl  shadow-xl bg-white w-[94%] max-sm:mx-auto mx-10 p-4 ">
            <div className="flex flex-wrap gap-2 max-sm:w-full justify-between ">
              <div className="flex flex-wrap max-sm:w-full gap-4 items-center">
                <input
                  className="w-[400px]  border-2 rounded-xl p-2 h-10 "
                  type="search"
                  placeholder="Search Here"
                />
              </div>
              {/* <Link href="/user/add-new-user">
              <button className="w-[200px] max-sm:w-full font-bold text-blue-500 border-2 border-blue-500 rounded-xl px-4 py-2 hover:text-white hover:bg-blue-500">
                + Add New
              </button>
              </Link> */}
            </div>
              <table className="w-full">
                <tr>
                  <th className="text-left py-4">SrNo</th>
                  <th className="text-left py-4">Name</th>
                  <th className="text-left">User</th>
                  {/* <th className="text-left">Phone</th> */}
                  <th className="text-left">Email</th>
                  {/* <th className="text-left">Email Verified</th> */}
                </tr>
                {userdata?.map((d, i) => (
                  <tr key={i} className="hover:bg-gray-200 duration-300">
                    <td className="py-4 text-center">{d.index}</td>
                    <td className="py-4 text-left">{d.name}</td>
                    <td className="">{d.UID}</td> 
                    {/* <td>{d.phoneNumber}</td> */}
                    <td>{d.email}</td>
                    {/* <td>{d.emailVerified}</td> */}
                  </tr>
                ))}
              </table>
              {/* <div className="font-bold flex justify-between bg-gray-50 h-10 rounded-xl items-center p-4 px-20 w-[120%]  ">
                <h1 className="w-[8%]">User</h1>
                <h1>Phone</h1>
                <h1>Email</h1>
                <h1>Action</h1>
              </div> */}
              {/* {data.map((d) => ( */}
              {/* <div className="flex items-center justify-between w-[120%] pr-16 hover:bg-gray-300 duration-300 my-4 rounded-xl">
                  <div className="flex items-center gap-2 font-bold">
                    <img
                      width={50}
                      height={50}
                      className="rounded-xl"
                      src={d.image}
                      alt=""
                    />
                    <div>
                      <h1>Kristin Watson</h1>
                      <p className="text-gray-400 text-xs">Product Name </p>
                    </div>
                  </div>
                  <p>$1,434.500</p>
                  <p>1650</p>
                  <div className="flex gap-4">
                    <GrView color="blue" />
                    <AiOutlineEdit color="green" />
                    <MdDelete color="red" />
                  </div>
                </div> */}
              {/* ))} */}
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
