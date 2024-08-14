"use client";

import { Theme_colors_class } from "@/infrastructure/theme";
import QuantityChangeSelect from "@/app/cart/QuantityChangeSelect";
import { useDispatch, useSelector } from "react-redux";
import { addInCart } from "@/redux/Slice/CartSlice";
import { useEffect, useState } from "react";

export default function CartButton({
  text = "Add",
  item = {},
  size = "btn-sm",
  flex = "flex-0",
  color = "",
}) {
  const dispatch = useDispatch();
  const CartSelector = useSelector((selector) => selector.Cart);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const quant = CartSelector?.items[item?.sku]?.qty || 0;
    console.log("CartSelector => ", CartSelector);
    setQuantity(quant);
  }, [CartSelector]);

  return quantity > 0 ? (
    <QuantityChangeSelect item={item} quantity={quantity} size={size} />
  ) : (
    <button
      className={[
        "btn border border-none shadow text-white rounded-sm",
        Theme_colors_class.primary,
        size,
        flex,
        color,
      ].join(" ")}
      onClick={(e) => {
        e.preventDefault();
        const newItem = item;
        newItem.qty = 1;
        dispatch(addInCart(JSON.stringify(newItem)));
      }}
    >
      {text}
    </button>
  );
}
