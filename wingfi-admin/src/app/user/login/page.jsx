"use client";

import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "@/redux/reducers/auth";
import { selectUser } from "@/redux/selectors/auth";

export default function Login() {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const selector = useSelector(selectUser);

  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = credentials;
    dispatch(loginRequest({ email, password }));
  };

  useEffect(() => {
    if (selector) {
      // router.replace("/");
      console.log(selector)
    }
  }, [selector, router]);

  return (
    <div className="flex flex-row bg-[#f2f7fb] h-screen overflow-hidden items-center">
      <section className="flex w-[60%] mx-auto h-[80%] bg-white rounded-xl">
        <div className="w-[45%] flex items-center bg-inherit rounded-xl bg-[#f2f7fb] m-4">
          <Image
            src="/images/adminpanel.jpg"
            alt="login"
            width={500}
            height={500}
            className="w-full object-fill"
          />
        </div>
        <div className="w-[55%] h-[95%] rounded-xl bg-white m-4">
          <div className="flex flex-col justify-center items-center h-full">
            <div>
              <h1 className="font-bold text-4xl pb-4">Sign In</h1>

              {/* Email Input */}
              <div className="flex gap-2 items-center justify-center p-2 w-full h-12 border-2 border-gray-400 rounded-xl focus:border-sky-600">
                <MdOutlineMail size={20} />
                <input
                  className="focus:outline-none w-full"
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  value={credentials.email}
                  onChange={handleChange}
                />
              </div>

              {/* Password Input */}
              <div className="flex gap-2 items-center justify-center p-2 mt-2 w-full h-12 border-2 border-gray-400 rounded-xl focus:border-sky-600">
                <RiLockPasswordLine size={20} />
                <input
                  className="focus:outline-none w-full"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={credentials.password}
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
            {error && <p className="text-red-500 pt-4">{error}</p>}
          </div>
        </div>
      </section>
    </div>
  );
}
