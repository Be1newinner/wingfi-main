// import Image from "next/image";
import { selectProduct } from "../redux/selectors/product";
import React from "react";
import { useSelector } from "react-redux";

export default function TopProductsList() {
  const product = useSelector(selectProduct);
  return (
    <div className="overflow-x-scroll h-[500px] no-scrollbar">
      <table className="w-[150%] ">
        <tr>
          <th className="text-left py-4">SrNo</th>
          <th className="text-left">Name</th>
          <th className="text-left">MRP</th>
          <th className="text-left">Price</th>
          <th className="text-left">Rating</th>
          <th className="text-left">SKU</th>
          <th className="text-left">Status</th>
        </tr>
        {product.map((d, i) => (
          <tr key={i} className="hover:bg-gray-200 duration-300">
            <td className="py-4 text-center">{d.index}</td>
            <td className="">{d.label}</td>
            <td>{d.mrp}</td>
            <td>{d.price}</td>
            <td>{d.rating}</td>
            <td>{d.sku}</td>
            <td>{d.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
