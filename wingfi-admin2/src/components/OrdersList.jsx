"use client";

import Image from "next/image";
import { selectOrder } from "@/redux/selectors/order2";
import React from "react";
import { useSelector } from "react-redux";

export default function OrdersList() {
  const order = useSelector(selectOrder);
  return (
    <div>
      {order.map((d, index) => (
        <div
          key={index}
          className="my-4 flex w-[600px] hover:bg-gray-200 hover:rounded-lg hover:text-sky-400 duration-300 mx-5  items-center"
        >
          <div className="flex gap-2 items-center w-[300px]">
            <div className="">
              {d.image && (
                <Image src={d.image} alt="img" width={1080} height={1080} />
              )}
            </div>
            <div>
              <h3>{d.name}</h3>
            </div>
          </div>
          <div className="w-[150px] mr-14">
            <p>20 Nov 2024</p>
          </div>
          <div>
            <p>20 Nov 2024</p>
          </div>
        </div>
      ))}
    </div>
  );
}
