"use client";
// // import { VscThreeBars } from "react-icons/vsc";
// import { useState } from "react";
// import LeftSidebar from "@/components/Sidebar";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { FaCheckCircle } from "react-icons/fa";
// import { IoIosArrowForward } from "react-icons/io";
// import { useDispatch } from "react-redux";
// import { addNewUserRequest } from "@/redux/reducers/users";

// export default function AddNewUser() {
//   const [addBtn, setAddBtn] = useState("allow");
//   const [updateBtn, setUpdateBtn] = useState("allow");
//   const [deleteBtn, setDeleteBtn] = useState("allow");
//   const [applydisBtn, setApplyDisBtn] = useState("allow");
//   const [createCouponBtn, setCreateCouponBtn] = useState("allow");

//   const handleAddBtn = (btnID) => {
//     setAddBtn(btnID);
//   };

//   const handleUpdateBtn = (btnID) => {
//     setUpdateBtn(btnID);
//   };

//   const handleDeleteBtn = (btnID) => {
//     setDeleteBtn(btnID);
//   };

//   const handleApplyDisBtn = (btnID) => {
//     setApplyDisBtn(btnID);
//   };

//   const handleCreateCouponBtn = (btnID) => {
//     setCreateCouponBtn(btnID);
//   };

//   const [show, setShow] = useState(false);
//   const handle = () => {
//     setShow(true);
//   };

//   const handleClose = () => {
//     if (show) {
//       setShow(false);
//     }
//   };

//   const dispatch = useDispatch();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = () => {
//     dispatch(addNewUserRequest(formData));
//   };

//   return (
//     <div className="flex flex-row bg-[#f2f7fb] h-screen overflow-hidden ">
//       <div
//         className={
//           show
//             ? "w-[280px] duration-500 max-sm:absolute  "
//             : "w-20 duration-500"
//         }
//       >
//         <LeftSidebar handleClose={handleClose} show={show} handle={handle} />
//       </div>

//       <div className={show ? "w-[60%] flex-1 " : "w-full"}>
//         <header className="flex items-center  justify-between">
//           <Header />
//         </header>

//         {/* <main className="bg-gray-100 h-screen overflow-scroll no-scrollbar pb-40">
//           <div className="flex flex-wrap justify-between items-center p-4 ">
//             <h1 className="font-bold text-2xl ">Add New User </h1>
//             <div className="flex gap-4 items-center ">
//               <h1>Dashboard </h1>
//               <IoIosArrowForward />
//               <h1>User</h1>
//               <IoIosArrowForward />
//               <h1> Add New User </h1>
//             </div>
//           </div>
//           <div className="flex justify-between mx-10 gap-4 w-[95%]">
//             <div className=" flex flex-wrap justify-between border-2 rounded-xl  shadow-xl bg-white w-[60%] max-sm:mx-auto p-4 mb-4 ">
//               <div className="w-full  max-sm:w-full">
//                 <h1 className="font-bold text-xl">Account</h1>
//                 <p className="text-gray-400">
//                   Fill in the information below to add a new account
//                 </p>
//               </div>
//               <div className="w-full">
//                 <div className="my-2 gap-2 mb-4">
//                   <h1 className="my-2 ">Name</h1>
//                   <input
//                     className="p-2 w-full h-12 border-2 border-gray-400 rounded-xl focus:outline-none focus:border-sky-600"
//                     type="text"
//                     placeholder="Username"
//                     name="name"
//                     id="name"
//                     onChange={handleChange}
//                     value={formData.name}
//                   />
//                 </div>
//                 <div className="my-2 gap-2 mb-4">
//                   <h1 className="my-2">Email</h1>
//                   <input
//                     className="p-2 w-full h-12 border-2 border-gray-400 rounded-xl focus:outline-none focus:border-sky-600"
//                     type="text"
//                     placeholder="Email"
//                     name="email"
//                     id="email"
//                     onChange={handleChange}
//                     value={formData.email}
//                   />
//                 </div>
//                 <div className="w-full mb-4 ">
//                   <h1 className="my-2">Password</h1>
//                   <input
//                     className="p-2 w-full h-12 border-2 border-gray-400 rounded-xl focus:outline-none focus:border-sky-600"
//                     type="text"
//                     placeholder="Create Password"
//                     name="password"
//                     id="password"
//                     onChange={handleChange}
//                     value={formData.password}
//                   />
//                 </div>
//                 <div className="w-full mb-4">
//                   <h1 className="my-2">Confirm password</h1>
//                   <input
//                     className="p-2 w-full h-12 border-2 border-gray-400 rounded-xl focus:outline-none focus:border-sky-600"
//                     type="text"
//                     placeholder="Confirm password"
//                     name="confirmPassword"
//                     id="confirmPassword"
//                     onChange={handleChange}
//                     value={formData.confirmPassword}
//                   />
//                 </div>
//               </div>
//             </div>

//             <div className=" flex flex-wrap justify-between border-2 rounded-xl  shadow-xl bg-white w-[35%] max-sm:mx-auto p-4 mb-4 ">
//               <div className="w-full max-sm:w-full">
//                 <h1 className="font-bold text-xl">Permission</h1>
//                 <p className="text-gray-500">
//                   Items that the account is allowed to edit
//                 </p>
//               </div>
//               <div className="font-bold w-full">
//                 <div className="my-2 gap-2 mb-4">
//                   <h1 className="my-2">Add product</h1>
//                   <div className="flex gap-4">
//                     <div
//                       onClick={() => handleAddBtn("allow")}
//                       className={`rounded-xl px-3 py-1 flex items-center gap-2 
//                     ${
//                       addBtn === "allow"
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-blue-500"
//                     } 
//                     w-24 cursor-pointer`}
//                     >
//                       <FaCheckCircle />
//                       <h1>Allow</h1>
//                     </div>
//                     <div
//                       onClick={() => handleAddBtn("deny")}
//                       className={`rounded-xl px-3 py-1 flex items-center gap-2 
//                     ${
//                       addBtn === "deny"
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-blue-500"
//                     } 
//                     w-24 cursor-pointer`}
//                     >
//                       <FaCheckCircle />
//                       <h1>Deny</h1>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="my-2 gap-2 mb-4">
//                   <h1 className="my-2">Update product</h1>
//                   <div className="flex gap-4">
//                     <div
//                       onClick={() => handleUpdateBtn("allow")}
//                       className={`rounded-xl px-3 py-1 flex items-center gap-2 
//                     ${
//                       updateBtn === "allow"
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-blue-500"
//                     } 
//                     w-24 cursor-pointer`}
//                     >
//                       <FaCheckCircle />
//                       <h1>Allow</h1>
//                     </div>
//                     <div
//                       onClick={() => handleUpdateBtn("deny")}
//                       className={`rounded-xl px-3 py-1 flex items-center gap-2 
//                     ${
//                       updateBtn === "deny"
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-blue-500"
//                     } 
//                     w-24 cursor-pointer`}
//                     >
//                       <FaCheckCircle />
//                       <h1>Deny</h1>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="font-bold w-full mb-4  ">
//                   <h1 className="my-2">Delete product</h1>
//                   <div className="flex gap-4">
//                     <div
//                       onClick={() => handleDeleteBtn("allow")}
//                       className={`rounded-xl px-3 py-1 flex items-center gap-2 
//                     ${
//                       deleteBtn === "allow"
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-blue-500"
//                     } 
//                     w-24 cursor-pointer`}
//                     >
//                       <FaCheckCircle />
//                       <h1>Allow</h1>
//                     </div>
//                     <div
//                       onClick={() => handleDeleteBtn("deny")}
//                       className={`rounded-xl px-3 py-1 flex items-center gap-2 
//                     ${
//                       deleteBtn === "deny"
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-blue-500"
//                     } 
//                     w-24 cursor-pointer`}
//                     >
//                       <FaCheckCircle />
//                       <h1>Deny</h1>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="font-bold w-full mb-4">
//                   <h1 className="my-2">Apply discount</h1>
//                   <div className="flex gap-4">
//                     <div
//                       onClick={() => handleApplyDisBtn("allow")}
//                       className={`rounded-xl px-3 py-1 flex items-center gap-2 
//                     ${
//                       applydisBtn === "allow"
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-blue-500"
//                     } 
//                     w-24 cursor-pointer`}
//                     >
//                       <FaCheckCircle />
//                       <h1>Allow</h1>
//                     </div>
//                     <div
//                       onClick={() => handleApplyDisBtn("deny")}
//                       className={`rounded-xl px-3 py-1 flex items-center gap-2 
//                     ${
//                       applydisBtn === "deny"
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-blue-500"
//                     } 
//                     w-24 cursor-pointer`}
//                     >
//                       <FaCheckCircle />
//                       <h1>Deny</h1>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="font-bold w-full mb-4">
//                   <h1 className="my-2">Create coupon</h1>
//                   <div className="flex gap-4">
//                     <div
//                       onClick={() => handleCreateCouponBtn("allow")}
//                       className={`rounded-xl px-3 py-1 flex items-center gap-2 
//                     ${
//                       createCouponBtn === "allow"
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-blue-500"
//                     } 
//                     w-24 cursor-pointer`}
//                     >
//                       <FaCheckCircle />
//                       <h1>Allow</h1>
//                     </div>
//                     <div
//                       onClick={() => handleCreateCouponBtn("deny")}
//                       className={`rounded-xl px-3 py-1 flex items-center gap-2 
//                     ${
//                       createCouponBtn === "deny"
//                         ? "bg-blue-500 text-white"
//                         : "bg-gray-200 text-blue-500"
//                     } 
//                     w-24 cursor-pointer`}
//                     >
//                       <FaCheckCircle />
//                       <h1>Deny</h1>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <button
//             onClick={handleSubmit}
//             className="w-[200px] bg-blue-500 font-bold text-white border-2 border-blue-500 rounded-xl px-4 py-2 ml-10 hover:text-blue-500 hover:bg-white"
//           >
//             Save
//           </button>
//         </main> */}


//         <footer>
//           <Footer />
//         </footer>
//       </div>
//     </div>
//   );
// }


// In your AdminLogin component
import { adminUserRequest } from '@/redux/reducers/users';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const AdminLogin = () => {
    const dispatch = useDispatch();
    const [credentials, setCredentials] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(adminUserRequest(credentials));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" onChange={handleChange} required />
            <input type="password" name="password" onChange={handleChange} required />
            <button type="submit">Login</button>
        </form>
    );
};

export default AdminLogin;

