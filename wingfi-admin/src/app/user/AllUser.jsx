// import React, { useState } from "react";
// import Header from "../../components/Header";
// import Footer from "../../components/Footer";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { GrView } from "react-icons/gr";
// import { AiOutlineEdit } from "react-icons/ai";
// import { MdDelete } from "react-icons/md";
// import LeftSidebar from "../../components/Sidebar";
// import { VscThreeBars } from "react-icons/vsc";

// export default function OrderList() {
//   const [show, setShow] = useState(false);
//   const handle = () => {
//     setShow(true);
//   };

//   const handleClose = () => {
//     if (show) {
//       setShow(false);
//     }
//   };

//   return (
//     <div className="flex flex-row bg-[#f2f7fb]">
//       <div
//         className={
//           show ? "w-[280px] duration-500 max-sm:absolute" : "w-0 duration-500"
//         }
//       >
//         <LeftSidebar  handleClose={handleClose}/>
//       </div>

//       <div className={show ? " w-[60%]  flex-1" : "w-full"}>
//         <header className="flex items-center  justify-between">
//           <div className={show ? "hidden" : "text-3xl pl-2 bg-white py-[26px]"}>
//             <VscThreeBars onClick={handle} />
//           </div>
//           <Header />
//         </header>

//         <main className="bg-gray-100">
//           <div className="flex flex-wrap gap-2 justify-between items-center p-4 ">
//             <h1 className="font-bold text-2xl ">Add Attribute </h1>
//             <div className="flex gap-4 items-center ">
//               <h1>Dashboard </h1>
//               <IoIosArrowForward />
//               <h1>User</h1>
//               <IoIosArrowForward />
//               <h1> All User </h1>
//             </div>
//           </div>

//           <div className="border-2 rounded-xl  shadow-xl bg-white w-[95%] max-sm:mx-auto mx-10 p-4 ">
//             <div className="flex flex-wrap gap-2 max-sm:w-full justify-between ">
//               <div className="flex flex-wrap max-sm:w-full gap-4 items-center">
//                 <input
//                   className="w-[400px]  border-2 rounded-xl p-2 h-10 "
//                   type="search"
//                   placeholder="Search Here"
//                 />
//               </div>
//               <button className="w-[200px] max-sm:w-full font-bold text-blue-500 border-2 border-blue-500 rounded-xl px-4 py-2 hover:text-white hover:bg-blue-500">
//                 + Add New
//               </button>
//             </div>
//             <div className="overflow-x-scroll no-scrollbar py-5">
//               <div className="font-bold flex justify-between bg-gray-50 h-10 rounded-xl items-center p-4 px-20 w-[120%]  ">
//                 <h1 className="w-[8%]">User</h1>
//                 <h1>Phone</h1>
//                 <h1>Email</h1>
//                 <h1>Action</h1>
//               </div>
//               {/* {data.map((d) => ( */}
//                 <div className="flex items-center justify-between w-[120%] pr-16 hover:bg-gray-300 duration-300 my-4 rounded-xl">
//                   <div className="flex items-center gap-2 font-bold">
//                     <img
//                       width={50}
//                       height={50}
//                       className="rounded-xl"
//                       src={d.image}
//                       alt=""
//                     />
//                     <div>
//                       <h1>Kristin Watson</h1>
//                       <p className="text-gray-400 text-xs">Product Name </p>
//                     </div>
//                   </div>
//                   <p>$1,434.500</p>
//                   <p>1650</p>
//                   <div className="flex gap-4">
//                     <GrView color="blue" />
//                     <AiOutlineEdit color="green" />
//                     <MdDelete color="red" />
//                   </div>
//                 </div>
//               {/* ))} */}
//             </div>
//             <hr />
//             <div className="flex justify-between items-center py-4">
//               <h1 className="font-semibold text-gra-400">Showing 10 entries</h1>
//               <div className="flex gap-2">
//                 <div className="border-2 rounded-full text-2xl p-[10px] w-13 h-12 hover:bg-blue-500 hover:text-white  ">
//                   <IoIosArrowBack />
//                 </div>
//                 <div className=" rounded-full text-2xl  pl-[17px] pt-[7px] w-12  h-12 hover:bg-blue-500 hover:text-white  ">
//                   1
//                 </div>
//                 <div className=" rounded-full text-2xl bg-blue-500 pl-[17px] pt-[7px] w-12  h-12 text-white  ">
//                   2
//                 </div>
//                 <div className=" rounded-full text-2xl  pl-[17px] pt-[7px] w-12  h-12 hover:bg-blue-500 hover:text-white  ">
//                   3
//                 </div>
//                 <div className="border-2 rounded-full hover:bg-blue-500 hover:text-white text-2xl  p-[10px] w-12  h-12  ">
//                   <IoIosArrowForward />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </main>

//         <footer>
//           <Footer />
//         </footer>
//       </div>
//     </div>
//   );
// }
