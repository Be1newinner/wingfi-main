"use client";

import { useSelector } from "react-redux";

export default function OrderDetails() {
  const CartSelector = useSelector((selector) => selector.Cart);
  const ProductCart = CartSelector.items || {};

  return (
    <div className="ml-4 mr-4 sm:mr-0 mt-0 sm:mt-16 p-4 pb-8 bg-white rounded-sm shadow border h-min">
      <p className="text-md font-bold pb-2">Items Summary</p>

      <div className="flex flex-col gap-1">
        {Object.keys(ProductCart)?.map((item, index) => {
          return (
            <div key={item}>
              <p className="flex justify-between gap-4">
                <span
                  className="text-gray-500 text-sm"
                  style={{
                    maxWidth: 200,
                  }}
                >
                  {ProductCart[item]?.title}{" "}
                  <span className="font-bold">x {ProductCart[item]?.qty}</span>
                </span>
                <span className="font-medium">
                  ₹{ProductCart[item]?.qty * ProductCart[item]?.price}/-
                </span>
              </p>

              {index + 1 !== Object.keys(ProductCart)?.length && (
                <div className="divider p-0 m-0 h-2" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
