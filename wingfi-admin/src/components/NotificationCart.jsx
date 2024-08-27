import React from "react";
import { BiSolidOffer } from "react-icons/bi";
import { MdVerified } from "react-icons/md";
import { FaShippingFast } from "react-icons/fa";
import { LuPackage } from "react-icons/lu";

export default function NotificationCart() {
  return (
    <div>
      {dataNotificationCart.map((d) => (
        <div className="flex gap-3 my-2">
          <div className="bg-gray-100 text-3xl h-[37px] w-[37px] my-3 rounded-full p-1">
            <span className="">{d.icons}</span>
          </div>
          <div className="py-1 w-[300px] ">
            <h1 className="font-bold text-md">{d.title}</h1>
            <p className="text-sm">{d.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const dataNotificationCart = [
  {
    id: 1,
    icons: <BiSolidOffer className="text-sky-500" />,
    title: "Discount available",
    desc: "Morbi sapien massa, ultricies at rhoncus at, ullamcorper nec diam",
  },
  {
    id: 2,
    icons: <MdVerified className="text-purple-500" />,
    title: "Account has been verified",
    desc: "Mauris libero ex, iaculis vitae rhoncus et"

  },
  {
    id: 3,
    icons: <LuPackage className="text-green-500"/>,
    title: "Order shipped successfully",
    desc: "Integer aliquam eros nec sollicitudin sollicitudin",
  },
  {
    id: 4,
    icons: <FaShippingFast className="text-orange-500" />,
    title: "Order pending: ID 305830",
    desc: "Ultricies at rhoncus at ullamcorper",
  },
];
