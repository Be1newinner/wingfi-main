"use client";

import {
  selectCartDelivery,
  selectCartDiscount,
  selectCartSubtotal,
  selectCartTotal,
} from "@/redux/selectors/cart";
import React from "react";
import { useSelector } from "react-redux";
import PricingCart from "./PricingCart";

export default function PricingCartContainer() {
  const CartTotal = useSelector(selectCartTotal);
  const CartSubtotal = useSelector(selectCartSubtotal);
  const CartDiscount = useSelector(selectCartDelivery);
  const CartDelivery = useSelector(selectCartDiscount);

  return (
    <PricingCart
      price={CartSubtotal}
      discount={CartDiscount}
      delivery={CartDelivery}
      total={CartTotal}
    />
  );
}
