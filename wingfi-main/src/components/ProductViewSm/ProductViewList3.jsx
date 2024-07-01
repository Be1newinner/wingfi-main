import Image from "next/image";
import Link from "next/link";
import { Theme_text_colors_class } from "@/infrastructure/theme";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function ProductViewList2({ item }) {
  return (
    <Link
      className="flex flex-col items-center bg-white border shadow p-2 pt-4 sm:p-8 sm:py-4 sm:gap-8 rounded-sm"
      style={{
        flex: "1 0 24%",
        height: "min-content",
        marginBottom: 100,
        position: "relative",
      }}
      href={"/shop/" + item?.slug}
    >
      <div className="flex flex-col gap-2">
        <p
          style={{
            lineHeight: 1.3,
          }}
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
        <div className="flex flex-col-reverse">
          <span
            className="text-error"
            style={{
              fontWeight: 700,
            }}
          >
            ₹{item?.price}/-
          </span>
          <span
            style={{
              color: "gray",
              textDecorationLine: "line-through",
              textDecorationColor: "gray",
            }}
          >
            ₹{item?.mrp}/-
          </span>
        </div>
      </div>
      <Image
        src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${item.sku}%2F0.webp?alt=media`}
        width={759}
        height={1500}
        alt=""
        style={{
          position: "absolute",
          transform: "scale(1.2)",
          maxHeight: 200,
          maxWidth: 130,
          objectFit: "contain",
          bottom: -130,
          right: 30,
        }}
      />
    </Link>
  );
}
