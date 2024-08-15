"use client";

import CartProduct from "@/components/CartProduct";
import { decreaseQty, increaseQty } from "@/redux/actions/cart";
import { selectCartItems } from "@/redux/selectors/cart";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export function CartProductArray() {
  const CartSelector = useSelector(selectCartItems);
  const dispatch = useDispatch();

  return Object.values(CartSelector)?.map((item: any) => {
    return (
      <CartProduct
        key={item.sku}
        sku={item.sku}
        qty={item.qty}
        title={item.title}
        mrp={item.mrp}
        price={item.price}
        decreaseFunction={() => dispatch(decreaseQty(item.sku))}
        inreaseFunction={() => dispatch(increaseQty(item.sku))}
      />
    );
  });
}
