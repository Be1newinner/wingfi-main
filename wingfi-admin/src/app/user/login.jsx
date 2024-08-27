import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import LeftSidebar from "../../components/Sidebar";
import { VscThreeBars } from "react-icons/vsc";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === "admin" && password === "password") {
      alert("Login successful!");
    } else {
      alert("Invalid username or password");
    }
  };

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
          <div className={show ? "hidden" : "text-3xl pl-2 bg-white py-[26px]"}>
            <VscThreeBars onClick={handle} />
          </div>
          <Header />
        </header>{" "}
        <br />
        <div className=" mt-[100px] ml-[40%] max-sm:ml-14 rounded-xl bg-transparent border-2 w-[300px] h-[325px]">
          <h1 className="text-3xl font-bold text-center py-2">Login</h1>
          <form onSubmit={handleSubmit}>
            <label className="text-xl font-bold mx-2 py-2">Username:</label>
            <input
              className="border-2 w-[98%] ml-1 my-2 rounded-lg px-2 "
              placeholder="username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <label className="text-xl font-bold mx-2 py-2">Password:</label>
            <input
              className="border-2 w-[98%] ml-1 my-2 rounded-lg px-2 "
              placeholder="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <h1 className="text-sky-500 text-center mb-2">Forgot Password ?</h1>
            <button
              className="text-xl rounded-lg text-white bg-sky-500 w-[98%] ml-1 font-bold py-2"
              type="submit"
            >
              Login
            </button>
            <h1 className="text-center my-2">
              Don't have an account?
              <Link to="/sign_up" className="text-sky-500">
                Sign Up
              </Link>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}
