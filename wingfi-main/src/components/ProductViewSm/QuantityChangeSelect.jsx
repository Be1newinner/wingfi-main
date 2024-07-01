"use client";

import { ProductCartContext } from "@/registry/context";
import { useContext } from "react";

export default function QuantityChangeSelect({ item, quantity = 1 }) {
  const { setProductsCartQuantity } = useContext(ProductCartContext);
  return (
    <select
      className="select select-bordered select-xs"
      style={{
        width: 50,
      }}
      onChange={(e) =>
        setProductsCartQuantity({
          item,
          quanity: Number(e.target.value),
        })
      }
    >
      <option selected={quantity === 1 ? true : false}>1</option>
      <option selected={quantity === 2 ? true : false}>2</option>
      <option selected={quantity === 3 ? true : false}>3</option>
      <option selected={quantity === 4 ? true : false}>4</option>
      <option selected={quantity === 5 ? true : false}>5</option>
      <option selected={quantity === 6 ? true : false}>6</option>
      <option selected={quantity === 7 ? true : false}>7</option>
    </select>
  );
}
