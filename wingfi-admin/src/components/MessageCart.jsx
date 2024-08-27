import React from "react";
import user11 from "../assets/images/user-11.png";
import user12 from "../assets/images/user-12.png";
import user13 from "../assets/images/user-13.png";
import user14 from "../assets/images/user-11 (1).png";

export default function MessageCart() {
  return (
    <div>
      {dataMessageCart.map((d) => (
        <div className="flex gap-3 my-4">
          <div className="">
            <img className=" rounded-full w-14" src={d.userimage} alt="" />
          </div>
          <div className="py-1 w-[180px]">
            <h1 className="font-bold text-md">{d.name}</h1>
            <p className="text-sm">{d.message}</p>
          </div>
          <div className="py-1" >
            {d.date}
          </div>
        </div>
      ))}
    </div>
  );
}

const dataMessageCart = [
  {
    id: 1,
    userimage: user11,
    name: "Cameron Williamson",
    message: "Hello, how are you?",
    date: "10:13 PM",
  },
  {
    id: 1,
    userimage: user12,
    name: "Ralph Edwards",
    message: "Are you there?",
    date: "10:13 PM",
  },
  {
    id: 1,
    userimage: user13,
    name: "Eleanor Pena",
    message: "Interested in this loads?",
    date: "10:13 PM",
  },
  {
    id: 1,
    userimage: user14,
    name: "Jane Cooper",
    message: "Okay...Do we have a deal?",
    date: "10:13 PM",
  },
];
