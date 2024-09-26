"use client";

import Link from "next/link";
import styles from "./Tab_OrdersInfo.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAllOrdersRequest } from "@/redux/reducers/order";
import { useSelector } from "react-redux";
import { selectUserUID } from "@/redux/selectors/auth";
import { selectAllOrders } from "@/redux/selectors/order";
import { OrderStatus } from "@/redux/constants/order";

export function Tab_OrdersInfo() {
  const dispatch = useDispatch();

  const UserUID = useSelector(selectUserUID);
  const OrdersData = useSelector(selectAllOrders);

  useEffect(() => {
    dispatch(loadAllOrdersRequest({ uid: UserUID }));
  }, [dispatch, UserUID]);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENVIRONMENT === "development")
      console.log("OrdersData => ", OrdersData);
  }, [OrdersData]);

  return (
    <div className="max-w-screen overflow-auto">
      <table className={[styles.ordersTable, "w-full"].join(" ")}>
        <thead>
          <tr>
            <th
              className="text-left"
              style={{
                fontSize: 13,
              }}
            >
              Order ID
            </th>
            <th
              className="text-left"
              style={{
                fontSize: 13,
              }}
            >
              Date
            </th>
            <th
              className="text-left"
              style={{
                fontSize: 13,
              }}
            >
              Status
            </th>
            <th
              className="text-left"
              style={{
                fontSize: 13,
              }}
            >
              Total
            </th>
            <th
              className="text-right"
              style={{
                fontSize: 13,
              }}
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {OrdersData?.map((item) => {
            let date = new Date();
            const rawDate = item.statuses.find(
              (e) => e.status === OrderStatus.Pending
            ).date;
            if (typeof rawDate === "number") {
              date = new Date(rawDate);
            }

            return (
              <tr
                key={item.id}
                className="bg-white mb-2 border shadow rounded-sm"
              >
                <td className="p-3">
                  <span className="text-md font-medium">{item.id}</span>
                </td>
                <td>
                  <span>{`${date.toDateString()} ${date.getHours()}:${date.getMinutes()}`}</span>
                </td>
                <td>
                  <span>{item.currentStatus}</span>
                </td>
                <td>
                  <span>₹ {item.total} /-</span>
                </td>
                <td className="flex justify-end items-center">
                  <Link
                    className="btn btn-sm btn-circle btn-ghost m-3"
                    href={"/orders-info/" + item.id}
                  >
                    <FaArrowRight />
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
