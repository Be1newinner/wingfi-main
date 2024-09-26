"use client";

import { useDispatch } from "react-redux";
import { addInCart } from "@/redux/reducers/cart";
import { CartItem } from "@/redux/constants/cart";

export default function QuantityChangeSelect({
  item,
  quantity = 1,
  size,
}: {
  item: CartItem;
  quantity: number;
  size:
    | "btn-sm"
    | "btn-xs"
    | "btn-md"
    | "btn-lg"
    | "btn-xl"
    | "btn-2xl"
    | "btn-3xl"
    | "btn-4xl";
}) {
  let selectSize = "select-sm";
  const selectWidth = 100;
  const dispatch = useDispatch();

  switch (size) {
    case "btn-xs":
      selectSize = "select-xs";
      break;
    case "btn-md":
      selectSize = "select-md";
      break;
    case "btn-lg":
      selectSize = "select-lg";
      break;
    case "btn-xl":
      selectSize = "select-xl";
      break;
    case "btn-2xl":
      selectSize = "select-2xl";
      break;
    case "btn-3xl":
      selectSize = "select-3xl";
      break;
    case "btn-4xl":
      selectSize = "select-4xl";
      break;
    default:
      selectSize = "select-sm";
  }

  return (
    <select
      className={["select select-bordered rounded-sm", selectSize].join(" ")}
      style={{
        width: selectWidth,
      }}
      onChange={(e) => {
        const newItem = {
          price: item.price,
          qty: Number(e.target.value),
          sku: item.sku,
          img: item.img,
          category: item.category,
          title: item.title,
          mrp: item.mrp,
        };

        dispatch(addInCart(newItem));
      }}
      onClick={(e) => e.preventDefault()}
      defaultValue={quantity}
    >
      <option value={0}>0</option>
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
    </select>
  );
}
