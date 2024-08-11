"use client";

import CartProduct from "@/components/CartProduct";
import { useSelector } from "react-redux";

export default function CartProductArray() {
  const CartSelector =
    useSelector((selector: any) => selector.Cart)?.items || {};

  let CartArray: any = [];

  try {
    CartArray = Object.values(CartSelector);
  } catch (e) {
    CartArray = [];
  }

  return CartArray?.map((item: any) => (
    <CartProduct
      key={item.sku}
      sku={item.sku}
      qty={item.qty}
      title={item.title}
      mrp={item.mrp}
      price={item.price}
    />
  ));
}
