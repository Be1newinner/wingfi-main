"use client";

import { useEffect, useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Theme_colors } from "@/infrastructure/theme";

export default function AddRemoveWishListIcon({ item, text, size = "btn-sm" }) {
  const [Selected, IsSelected] = useState(false);

  const ProductWishList = {};
  const ToggleProductInWishList = () => null;

  useEffect(() => {
    if (Object.keys(ProductWishList).includes(item?.slug)) IsSelected(true);
    else IsSelected(false);
  }, [ProductWishList, item]);

  return (
    <button
      className={["btn border shadow btn-ghost rounded-sm", size].join(" ")}
      onClick={(e) => {
        ToggleProductInWishList({ item });
        IsSelected(!Selected);
      }}
    >
      {Selected ? (
        <FaHeart size={20} color={Theme_colors.primary} />
      ) : (
        <FaRegHeart size={20} />
      )}
      <span>{text}</span>
    </button>
  );
}
