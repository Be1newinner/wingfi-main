"use client";

import Image from "next/image";
import { useEffect } from "react";
import { firestore } from "@/infrastructure/firebase.config";
import { collection, doc, getDoc } from "firebase/firestore";
import { Variants } from "../../../service/Offline/Variants";
import { useState } from "react";
import { TimeStampToDate } from "@/utils";
import { AccountStructure } from "@/components";

export default function OrdersInfo({ params }) {
  const [OrderData, setOrderData] = useState({});

  async function getOrderFromURL({ slug }) {
    if (!slug) return { error: "Invalid slug!", errorCode: 401, slug };

    const Product = {};

    const docRef = doc(collection(firestore, "or73r"), slug);
    const docRef1 = doc(collection(firest1ore, "or84r"), slug);

    const promises = [getDoc(docRef), getDoc(docRef1)];

    try {
      const [docSnap, docSnap1] = await Promise.all(promises);

      if (docSnap.exists()) {
        const data = docSnap.data();
        Product.date = TimeStampToDate(data.d);
        Product.status = data.s;
        Product.total = data.t;
      } else {
        return { error: "Document not Found!", errorCode: 404 };
      }

      if (docSnap1.exists()) {
        const data = docSnap1.data();
        Product.items = data.it;
        Product.discount = data.d;
        Product.fees = data.f;
        Product.subtotal = data.s;
        Product.address = data.ad;
        Product.name = data.n;
        Product.phone = data.p;
      } else {
        console.log("response => ", response);
        return { error: "Document not Found!", errorCode: 404 };
      }

      const response = {
        status: 200,
        data: Product,
      };

      return response;
    } catch (error) {
      console.error("Error fetching order data:", error);
      return { error: "Internal Server Error", errorCode: 500 };
    }
  }

  useEffect(() => {
    (async function () {
      const response = await getOrderFromURL({ slug: params.slug });

      if (response.status == 200) {
        setOrderData(response.data);
        console.log("response => ", response.data);
      } else {
        console.log("Product Not Found!", response);
      }
    })();
  }, []);

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
              {["Accepted", "Shipped", "Delivered"].map((item, index) => (
                <li
                  className={[
                    "step",
                    OrderData.status == index
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
            <span className="text-right text-[13px]">{OrderData?.date}</span>
          </p>
        </div>
      </div>

      <div className="bg-white shadow rounded p-3 sm:px-6 mt-4">
        <h5 className="mb-2 text-sm font-semibold">Order Items</h5>

        {OrderData?.items?.map((item) => (
          <div
            key={item.i + "" + item.n + "" + item.c}
            className={"flex gap-3 items-center"}
          >
            <Image
              src={"/products/b1.png"}
              width={320}
              height={640}
              alt=""
              style={{
                width: 30,
                height: 60,
              }}
            />
            <div>
              <p
                className="text-sm"
                style={{
                  fontSize: 13,
                }}
              >
                {item.n} ({Variants[item.c]?.name})
              </p>
              <p
                className="text-sm"
                style={{
                  fontSize: 13,
                }}
              >
                ₹{item.p}/- x {item.q}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 bg-white shadow rounded p-3 sm:px-6 mt-4">
        <h5 className="mb-1 text-sm font-semibold">Shipping Details</h5>
        <p className="text-sm">
          <span className="text-slate-500">Name : </span>
          <span className="">{OrderData?.name}</span>
        </p>
        <p className="text-sm">
          <span className="text-slate-500">Contact : </span>
          <span className="">{OrderData?.phone}</span>
        </p>
        <p className="text-sm">
          <span className="text-slate-500">Shipping Address : </span>
          <span className="">
            {OrderData?.address?.f} {OrderData?.address?.p}
          </span>
        </p>
      </div>

      <div className="bg-white shadow rounded p-3 sm:px-6 mt-4">
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
        <div className="flex justify-between">
          <span
            style={{
              fontSize: 13,
            }}
            className="text-gray-500"
          >
            Fees:
          </span>
          <span
            style={{
              fontSize: 13,
              fontWeight: 500,
            }}
          >
            + ₹{OrderData?.fees}/-
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
