import Image from "next/image";
import { SelectBestSeller } from "../redux/selectors/bestSeller";
import React from "react";
import { useSelector } from "react-redux";

export default function BestShopSellerList() {
  const bestSeller = useSelector(SelectBestSeller);
  return (
    <div>
      {bestSeller.map((data, index) => (
        <div
          key={index}
          className="flex justify-between my-2 w-[600px] items-center  "
        >
          <div className="flex gap-1 w-[190px]">
            <div className="w-[50px] rounded-full overflow-hidden">
              {data.image && (
                <Image src={data.image} alt="" height={1080} width={1080} />
              )}
            </div>
            <div className="font-semibold">
              <h1 className="text-xl">{data.name}</h1>
              <p>{data.purchase} Purchases</p>
            </div>
          </div>
          <div className=" text-lg w-[150px]">
            <h1>{data.categories}</h1>
          </div>
          <div className="w-[100px]">
            <p>$ {data.total}</p>
          </div>
          <div className="w-[100px] bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-500 h-2.5 rounded-full w-[70%] "></div>
          </div>
          <div className="font-bold text-gray-400">100%</div>
        </div>
      ))}
    </div>
  );
}
