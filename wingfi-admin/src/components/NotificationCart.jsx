import React from "react";

export default function NotificationCart() {
  return (
    <div>
      {/* {dataNotificationCart.map((d) => ( */}
        <div className="flex gap-3 my-2">
          <div className="bg-gray-100 text-3xl h-[37px] w-[37px] my-3 rounded-full p-1">
            <span className="">{d.icons}</span>
          </div>
          <div className="py-1 w-[300px] ">
            <h1 className="font-bold text-md">{d.title}</h1>
            <p className="text-sm">{d.desc}</p>
          </div>
        </div>
      {/* ))} */}
    </div>
  );
}


