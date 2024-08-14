"use client";

import Image from "next/image";
import Link from "next/link";
import { Theme_text_colors_class } from "@/infrastructure/theme";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addInWishlist } from "@/redux/Slice/WishlistSlice.js";

export default function ProductViewList2({ item, key }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center bg-white border shadow p-2 sm:p-3 gap-1 sm:gap-4 overflow-hidden rounded-sm flex-col sm:flex-row basis-1/2">
      <Image
        src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${item.sku}%2F1.webp?alt=media`}
        width={180}
        height={180}
        style={{
          objectFit: "cover",
        }}
        alt=""
      />
      <div className="flex flex-col gap-4 justify-between h-full w-full">
        <p
          style={{
            lineHeight: 1.3,
          }}
          className="text-md"
        >
          {item?.title}
        </p>
        <div
          className={["flex gap-1", Theme_text_colors_class.primary].join(" ")}
        >
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <div>
          <span
            style={{
              textDecorationLine: "line-through",
              textDecorationColor: "gray",
              color: "gray",
            }}
          >
            ₹{item?.mrp}/-
          </span>
          <span className="text-error font-semibold">₹{item?.price}/-</span>
        </div>
        <div className="flex gap-2 ">
          <Link
            href={"/shop/" + item?.slug}
            className="btn btn-sm btn-error sm:flex-1 border border-gray-300 shadow rounded-sm text-white font-medium min-w-16"
          >
            View
          </Link>
          <button
            className="btn btn-sm btn-outline btn-error sm:flex-1 border shadow rounded-sm "
            onClick={() => {
              dispatch(
                addInWishlist(JSON.stringify({ ...item, sku: item.sku }))
              );
            }}
          >
            <div className="flex gap-1 items-center">
              <FaRegHeart /> wishlist
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
