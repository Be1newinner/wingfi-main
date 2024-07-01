import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface props {
  title: string;
  price: number;
  mrp: number;
  slug: string;
  key: string;
  image: string;
  rating: number;
  sku: number;
}

export default function ProductViewList({
  title,
  price,
  mrp,
  slug,
  rating,
  sku,
}: props) {
  return (
    <Link
      href={"/shop/" + slug}
      className="py-2 sm:p-2 w-full basis-full sm:basis-1/3"
    >
      <div className="flex-col items-center bg-white p-2 sm:p-4 w-full gap-1 sm:gap-4 rounded border shadow">
        <Image
          src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${sku}%2F1.webp?alt=media`}
          width={400}
          height={400}
          alt=""
          className="hover:scale-105 mb-2"
        />
        <div className="flex flex-col gap-3 justify-between">
          <p
            style={{
              lineHeight: 1.1,
            }}
          >
            {title}
          </p>
          <div className="flex gap-1 text-error">
            {Array?.from({ length: Math.floor(rating) })?.map((item, index) => (
              <FaStar key={index} />
            ))}
          </div>
          <div>
            <span
              className="text-error"
              style={{
                fontWeight: 700,
              }}
            >
              ₹ {price}/-
            </span>
            <span
              style={{
                color: "gray",
                textDecorationLine: "line-through",
                textDecorationColor: "gray",
              }}
            >
              ₹ {mrp}/-
            </span>
          </div>

          <button className="btn btn-error btn-sm text-white font-medium rounded-sm px-4">
            View Product
          </button>
        </div>
      </div>
    </Link>
  );
}
