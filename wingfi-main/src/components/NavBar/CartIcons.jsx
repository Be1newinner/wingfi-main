"use client";

import { selectCartQuantity } from "@/redux/selectors/cart";
import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

export default function CartIcons() {
  const CartLength = useSelector(selectCartQuantity);

  return (
    <Link className="btn btn-ghost btn-sm sm:btn-md btn-circle" href={"/cart"}>
      <div className="indicator">
        <IoCartOutline size={22} />
        {CartLength > 0 && (
          <span
            className="badge badge-xs badge-error indicator-item text-white font-bold"
            style={{
              fontSize: 10,
              padding: 5,
            }}
          >
            {CartLength}
          </span>
        )}
      </div>
    </Link>
  );
}
