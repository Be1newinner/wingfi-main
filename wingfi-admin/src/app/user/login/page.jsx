"use client"
import Image from "next/image";
import { useState } from "react";
import MySvgIcon from "@/components/googleIcon";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { adminUserRequest } from "@/redux/reducers/users";

export default function Login() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adminUserRequest(credentials));
  };
  return (
    <div className="flex flex-row bg-[#f2f7fb] h-screen overflow-hidden items-center ">
      <section className=" flex w-[60%] mx-auto h-[80%] bg-white rounded-xl">
        <div className="w-[45%] -[95%] flex items-center bg-inherit rounded-xl bg-[#f2f7fb] m-4 ">
          <Image
            src="/images/adminpanel.jpg"
            alt="login"
            width={500}
            height={500}
            className="w-full object-fill"
          />
        </div>
        <div className="w-[55%] h-[95%] rounded-xl bg-white m-4">
          <div className="flex gap-2 justify-end  ">
            <p className="text-gray-400">Don't have an account?</p>
            <span>Sign up</span>
          </div>
          <div className="flex justify-center items-center h-full">
            <div>
              <h1 className="font-bold text-4xl pb-4">Sign In</h1>
              <p className="font-sans font-medium text-sm pb-3">
                Sign in with open account
              </p>
              <div>
                <div className="flex gap-2 items-center justify-center p-2 mb-5 border-2 rounded-xl">
                  <MySvgIcon />
                  <span>Google</span>
                </div>
              </div>
              <hr />
              <p className="py-4">Or Continue with Email Address</p>
              <div className="flex gap-2 items-center justify-center p-2 w-full h-12 border-2 border-gray-400 rounded-xl  focus:border-sky-600">
                <MdOutlineMail size={20} />
                <input
                  className="focus:outline-none"
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleChange}
                />
              </div>
              <div className="flex gap-2 items-center justify-center p-2 mt-2 w-full h-12 border-2 border-gray-400 rounded-xl  focus:border-sky-600">
                <RiLockPasswordLine size={20} />
                <input
                  className="focus:outline-none"
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full p-2 mt-4 bg-sky-500 text-white hover:text-white duration-300 hover:bg-sky-400 rounded-xl"
                type="submit"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
