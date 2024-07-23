import React from "react";

export default function PricingCart() {
  return (
    <React.Fragment>
      <p className="text-gray-500 font-semibold m-4 text-sm">PRICE DETAILS</p>
      <div className="flex flex-col gap-4 border-y-2 p-4 text-gray-600">
        <p className="flex justify-between">
          <span>Price (4 items)</span>
          <span>₹8,064</span>
        </p>
        <p className="flex justify-between">
          <span>Discount</span>
          <span className="text-green-500"> - ₹2,064</span>
        </p>
        <p className="flex justify-between">
          <span>Delivery Charges</span>
          <span className="flex gap-2">
            <span className="line-through">₹70</span>
            <span className="text-green-500">Free</span>
          </span>
        </p>
      </div>
      <p className="flex justify-between p-4 font-semibold">
        <span>Total Amount</span>
        <span>₹2,689</span>
      </p>
    </React.Fragment>
  );
}
