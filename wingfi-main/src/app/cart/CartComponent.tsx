"use client";

import { CartProductArray, EmptyCart, PricingCart } from "@/components";
import { selectUserUID } from "@/redux/selectors/auth";
import { selectCartQuantity } from "@/redux/selectors/cart";
import Link from "next/link";
import { MdSecurity } from "react-icons/md";
import { useSelector } from "react-redux";

export default function CartComponent() {
  const quantity = useSelector(selectCartQuantity);
  const UserUID = useSelector(selectUserUID);

  return (
    <div className="flex flex-col sm:flex-row w-full gap-4">
      {quantity ? (
        <>
          <div className="bg-whquantityite basis-2/3 shadow">
            <p className="text-white font-semibold text-sm p-4 px-4 sm:px-8 shadow-md bg-red-500">
              CART ITEMS
            </p>
            <CartProductArray />
            <div
              className="shadow-md flex justify-end items-center pr-2 py-4"
              style={{
                boxShadow: "0px -2px 5px rgba(0,0,0,0.2)",
              }}
            >
              <Link href={!UserUID ? "/signin?next=checkout" : "/checkout"}>
                <button className="btn bg-red-500 hover:bg-red-600 rounded-none text-white px-16 shadow">
                  PLACE ORDER
                </button>
              </Link>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex flex-col bg-white shadow items-between">
              <PricingCart />
            </div>
            <p className="flex gap-2 text-xs p-2 text-gray-500 font-medium mt-2">
              <MdSecurity size={24} />
              Safe and Secure Payments.Easy returns.100% Authentic products.
            </p>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
}
