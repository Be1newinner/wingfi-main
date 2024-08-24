"use client";

import Link from "next/link";
import styles from "./Tab_OrdersInfo.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { collection, query, getDocs, limit, where } from "firebase/firestore";
import { firestore } from "@/infrastructure/firebase.config";
import { TimeStampToDate } from "@/registry/functions";
// import { AuthContext } from "@/registry/context";
// import { waitForDebugger } from "inspector";

export function Tab_OrdersInfo() {
  const [OrdersData, setOrdersData] = useState(null);
  // const User = useContext(AuthContext)?.state?.user;
  const User = {};
  async function getOrdersData({ lim }) {
    if (User) {
      const AllPromise = await new Promise(async (resolve, reject) => {
        try {
          const AllOrders = [];

          const OrdersQuery = query(
            collection(firestore, "or73r"),
            where("u", "==", User?.uid),
            limit(lim)
          );

          const Ordersnapshot = await getDocs(OrdersQuery);

          Ordersnapshot.forEach((doc) => {
            const data = doc.data();
            const orderID = doc.id;

            const modifiedData = {
              total: data.t,
              status: data.s,
              date: data.d,
              orderID,
            };

            AllOrders.push(modifiedData);
          });

          resolve(AllOrders);
        } catch (error) {
          reject(error);
        }
      });
      return AllPromise;
    } else {
      process.env.NEXT_PUBLIC_ENVIRONMENT === "development" &&
        console.log("USER NOT LOGIN!");
    }
  }

  useEffect(() => {
    (async function () {
      const resp = await getOrdersData({ lim: 5 });
      setOrdersData(resp);
    })();
  }, []);

  useEffect(() => {
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development" &&
      console.log("OrdersData => ", OrdersData);
  }, [OrdersData]);

  // waitForDebugger

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
            let status = null;

            if (item.status == 0) status = "Accepted";
            if (item.status == 1) status = "Shipped";
            if (item.status == 2) status = "Completed";

            return (
              <tr
                key={item.orderID}
                className="bg-white mb-2 border shadow rounded-sm"
              >
                <td className="p-3">
                  <span className="text-md font-medium">{item.orderID}</span>
                </td>
                <td>
                  <span>{TimeStampToDate(item.date)}</span>
                </td>
                <td>
                  <span>{status}</span>
                </td>
                <td>
                  <span>₹ {item.total} /-</span>
                </td>
                <td className="flex justify-end items-center">
                  <Link
                    className="btn btn-sm btn-circle btn-ghost m-3"
                    href={"/orders-info/" + item.orderID}
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
