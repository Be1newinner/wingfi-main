import { selectProductOverview } from "../redux/selectors/productOverview";
import React from "react";
import { useSelector } from "react-redux";

export default function ProductOverivewList() {
  const productOverview = useSelector(selectProductOverview);
  return (
    <div>
      {productOverview.map((d) =>
        <div className="text-gray-400 flex items-center my-5 w-[800px]">
          <div className="flex items-center font-bold  gap-2 w-[350px] ">
            <div className="w-[50px] bg-gray-100  ">
              <img className="p-1" src={d.image} alt="" />
            </div>
            <div>
              <h1> {d.name} </h1>
            </div>
          </div>
          <div className="w-[100px]">
            <p> {d.productID} </p>
          </div>
          <div className="w-[100px]">
            <p> {d.price} </p>
          </div>
          <div className="w-[100px]">
            <p> 20 </p>
          </div>
          <div className="w-[100px]">
            <p> {d.sale} </p>
          </div>
          <div className="w-[100px]">
            <p> {d.revenue} </p>
          </div>
          <div className="w-[1]">
            <p> {d.status} </p>
          </div>
        </div>
      )}
    </div>
  );
}

