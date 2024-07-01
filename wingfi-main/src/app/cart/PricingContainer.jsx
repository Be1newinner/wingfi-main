"use client";

import { PriceContainer } from "@/registry/components";
import ApplyVoucher from "./ApplyVoucher";
import { useSelector } from "react-redux";
import CartContainer from "./CartContainer";

export default function PricingContainer() {
  const CartSelector = useSelector((selector) => selector.Cart);
  const CartLength = CartSelector.qty || 0;

  return (
    <div className="flex flex-wrap">
      <CartContainer />
      {CartLength > 0 ? (
        <div className="basis-1/4 flex flex-col gap-4 pt-16">
          <PriceContainer />
          <ApplyVoucher />
        </div>
      ) : null}
    </div>
  );
}
