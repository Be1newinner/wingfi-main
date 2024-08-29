"use client";

import Image from "next/image";
import { useEffect } from "react";
import { Variants } from "../../../service/Offline/Variants";
import { AccountStructure } from "@/components";
import { useDispatch } from "react-redux";
import { loadSingleOrderRequest } from "@/redux/reducers/order";
import { selectUserUID } from "@/redux/selectors/auth";
import { useSelector } from "react-redux";
import { OrderStatus } from "@/redux/constants/order";
import { selectOrderById } from "@/redux/selectors/order";
import { dateMsToDateString } from "@/utils";

export default function OrdersInfo({ params }: { params: { slug: string } }) {
  const dispatch = useDispatch();

  const UserUID = useSelector(selectUserUID);
  const OrderData = useSelector(selectOrderById(params.slug)) || null;

  useEffect(() => {
    if (UserUID)
      dispatch(loadSingleOrderRequest({ uid: UserUID, orderid: params.slug }));
  }, []);

  useEffect(() => {
    process.env.NEXT_PUBLIC_ENVIRONMENT === "development" &&
      console.log("OrderData => ", OrderData);
  }, [OrderData]);

  return (
    <AccountStructure
      pageName="Order Detail"
      state={0}
      topButtonName="All Orders"
      topButtonLink="/orders-info"
    >
      <div className="flex gap-1 sm:gap-4 flex-col-reverse sm:flex-row">
        <div className="bg-white shadow rounded p-3 sm:px-6 mt-4 flex-1">
          <h5 className="mb-2 text-sm font-semibold">Order Status</h5>

          <div className="flex justify-center flex-1">
            <ul className="steps  flex-1">
              {[
                OrderStatus.Processing,
                OrderStatus.Pending,
                OrderStatus.Shipped,
                OrderStatus.Delivered,
              ].map((item, index) => (
                <li
                  key={item + "" + index}
                  className={[
                    "step",
                    OrderData?.currentStatus === item
                      ? "step-error text-error font-semibold"
                      : "step-neautral",
                  ].join(" ")}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-white shadow rounded p-3 sm:px-6 mt-4 flex flex-col justify-center">
          <p className="text-sm flex justify-between gap-4 sm:gap-8">
            <span className="text-gray-500 font-medium">Order ID: </span>
            <span className="text-right text-[13px]">{params.slug}</span>
          </p>
          <p className="text-sm flex justify-between gap-4 sm:gap-8">
            <span className="text-gray-500 font-medium">Placed On: </span>
            <span className="text-right text-[13px]">
              {dateMsToDateString(
                OrderData?.statuses?.find(
                  (e) => e.status === OrderStatus.Pending
                )?.date
              )}
            </span>
          </p>
        </div>
      </div>

      <div className="bg-white shadow rounded p-3 sm:px-6 mt-4">
        <h5 className="mb-2 text-sm font-semibold">Order Items</h5>

        {OrderData?.items?.map((item) => (
          <div key={item.sku} className={"flex gap-3 items-center"}>
            {item.img && (
              <Image
                src={item.img}
                width={320}
                height={640}
                alt=""
                style={{
                  width: 30,
                  height: 60,
                }}
              />
            )}
            <div className="flex items-center justify-between flex-1">
              <span
                className="text-sm"
                style={{
                  fontSize: 13,
                }}
              >
                {item.title}
                {/* ({Variants[item.c]?.name}) */}
              </span>
              <span
                className="text-sm"
                style={{
                  fontSize: 13,
                }}
              >
                ₹{item.price}/- x {item.qty}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 bg-white shadow rounded p-3 sm:px-6 mt-4">
        <h5 className="mb-1 text-sm font-semibold">Shipping Details</h5>
        <p className="text-sm">
          <span className="text-slate-500">Name : </span>
          <span className="">{OrderData?.customerName}</span>
        </p>
        <p className="text-sm">
          <span className="text-slate-500">Contact : </span>
          <span className="">{OrderData?.customerPhone}</span>
        </p>
        <p className="text-sm">
          <span className="text-slate-500">Shipping Address : </span>
          <span className="">
            {OrderData?.customerAddress.fulladdress}{" "}
            {OrderData?.customerAddress.pincode}
          </span>
        </p>
      </div>

      <div className="flex flex-col bg-white shadow rounded p-3 sm:px-6 mt-4 gap-2">
        <h5 className="mb-1 text-sm font-semibold">Total Summary</h5>
        <div className="flex justify-between">
          <span
            style={{
              fontSize: 13,
            }}
            className="text-gray-500"
          >
            Subtotal:
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            ₹{OrderData?.subtotal}/-
          </span>
        </div>
        <div className="flex justify-between gap-2">
          <span
            style={{
              fontSize: 13,
            }}
            className="text-gray-500"
          >
            Delivery :
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            {OrderData?.delivery === 0 ? "Free" : `+ ₹${OrderData?.delivery}/-`}
          </span>
        </div>
        <div className="flex justify-between">
          <span
            style={{
              fontSize: 13,
            }}
            className="text-gray-500"
          >
            Discount:
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            - ₹{OrderData?.discount}/-
          </span>
        </div>
        <div className="divider my-0" />
        <div className="flex justify-between">
          <span
            style={{
              fontWeight: 500,
            }}
          >
            Total:
          </span>
          <span
            style={{
              fontWeight: 500,
            }}
          >
            ₹{OrderData?.total}/-
          </span>
        </div>
      </div>
    </AccountStructure>
  );
}
