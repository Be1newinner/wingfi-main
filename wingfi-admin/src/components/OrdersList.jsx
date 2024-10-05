"use client";

import Image from "next/image";
import { selectAllOrders, selectOrderState } from "@/redux/selectors/order";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadAllOrdersRequest,
  ordersLoadRequest,
} from "@/redux/reducers/order";

export default function OrdersList() {
  const order = useSelector(selectOrderState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllOrdersRequest());
  }, [dispatch]);

  return (
    <div>
      <table className="w-full">
        <tr>
          <th className="text-left py-4">SrNo</th>
          <th className="text-left">Order ID</th>
          <th className="text-left">Price</th>
          <th className="text-left">Status</th>
        </tr>
        {order.map((d, i) => (
          <tr
            key={i}
            onClick={() => router.push("/order/order-details")}
            className="hover:bg-gray-200 duration-300"
          >
            <td className="py-4 text-center">{d.index}</td>
            <td>{d.UID}</td>
            <td>{d.total}</td>
            <td>{d.status}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
