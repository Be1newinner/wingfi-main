"use client";

import { Theme_colors_class } from "@/infrastructure/theme";
import QuantityChangeSelect from "@/app/cart/QuantityChangeSelect";
import { useDispatch, useSelector } from "react-redux";
import { addInCart } from "@/redux/reducers/cart";
import { useEffect, useState } from "react";
import { selectCartItems } from "@/redux/selectors/cart"; // Adjust path as needed
import { CartItem, CartItemsState } from "@/redux/constants/cart";

interface CartButtonProps {
  text: string;
  item: CartItem;
  size:
    | "btn-sm"
    | "btn-xs"
    | "btn-md"
    | "btn-lg"
    | "btn-xl"
    | "btn-2xl"
    | "btn-3xl"
    | "btn-4xl";
  flex: string;
  color: string;
}

export function CartButton({
  text = "Add",
  item,
  size = "btn-sm",
  flex = "flex-0",
  color = "",
}: CartButtonProps) {
  const dispatch = useDispatch();
  const selectCartItemsData: CartItemsState = useSelector(selectCartItems);
  const [quantity, setQuantity] = useState<number>(0);

  useEffect(() => {
    const sku = item?.sku || "";
    if (sku) {
      const quant = selectCartItemsData[sku]?.qty || 0;
      setQuantity(quant);
    }
  }, [selectCartItemsData, item?.sku]);

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
        const newItem = {
          ...item,
          price: item.price,
          qty: 1,
          img: "",
        };
        console.log("newItem => ", newItem);
        dispatch(addInCart(newItem));
      }}
    >
      {text}
    </button>
  );
}
