import Image from "next/image";
import { selectProduct } from "../redux/selectors/product";
import React from "react";
import { useSelector } from "react-redux";

export default function TopProductsList() {
  const product = useSelector(selectProduct);
  return (
    <div>
      {product?.map((d, index) => (
        <div key={index} className="flex justify-between my-1">
          <div className="w-[50px] bg-gray-100 rounded-lg p-1 m-2">
            {d.image && (
              <Image src={d.image} alt="" height={1080} width={1080} />
            )}
          </div>
          <div className="w-[350px] font-bold">
            <h1>{d.name}</h1>
            <p className="text-gray-400">100 Items</p>
          </div>
          <div className="w-[200px] font-bold">
            <p className="text-gray-400">Coupon Code</p>
            <h1>Sflat</h1>
          </div>
          <div className="w-50px">{/* <span> {flag} </span> */}</div>
          <div className="font-bold">
            <h1>{d.percentage}</h1>
            <p className="text-gray-400">{d.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
