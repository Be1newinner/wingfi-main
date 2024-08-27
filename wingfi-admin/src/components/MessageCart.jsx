import React from "react";

export default function MessageCart() {
  return (
    <div>
      {/* {dataMessageCart.map((d) => ( */}
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
      {/* ))} */}
    </div>
  );
}

