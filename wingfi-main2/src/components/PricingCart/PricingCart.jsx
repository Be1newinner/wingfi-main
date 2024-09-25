import React from "react";
import { formatToIndianCurrency } from "../../utils/formatToIndianCurrency";

export default function PricingCartData({ price, discount, delivery, total }) {
  return (
    <React.Fragment>
      <p className="text-gray-500 font-semibold m-4 text-sm">PRICE DETAILS</p>
      <div className="flex flex-col gap-4 border-y-2 p-4 text-gray-600">
        <p className="flex justify-between">
          <span>Price (4 items)</span>
          <span>₹{formatToIndianCurrency(price)}</span>
        </p>
        {discount > 0 && (
          <p className="flex justify-between">
            <span>Discount</span>
            <span className="text-green-500">
              {" "}
              - ₹{formatToIndianCurrency(discount)}
            </span>
          </p>
        )}
        <p className="flex justify-between">
          <span>Delivery Charges</span>
          <span className="flex gap-2">
            <span className="line-through">₹70</span>
            {delivery > 0 ? (
              <span className="text-green-500">
                ₹{formatToIndianCurrency(delivery)}
              </span>
            ) : (
              <span className="text-green-500">Free</span>
            )}
          </span>
        </p>
      </div>
      <p className="flex justify-between p-4 font-semibold">
        <span>Total Amount</span>
        <span>₹{formatToIndianCurrency(total)}</span>
      </p>
    </React.Fragment>
  );
}
