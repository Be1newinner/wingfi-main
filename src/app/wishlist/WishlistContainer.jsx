"use client";

// import { ProductCartContext } from "@/registry/context";
import Image from "next/image";
// import { useContext } from "react";
import { Theme_text_colors_class } from "@/infrastructure/theme";
import { MdOutlineMergeType } from "react-icons/md";
import Link from "next/link";
import CartButton from "@/components/ProductViewSm/CartButton";

export default function WishlistContainer() {
  // const { ProductWishList, ToggleProductInWishList } =
  //   useContext(ProductCartContext);
  const ProductWishList = {};
  const ToggleProductInWishList = () => null;

  return ProductWishList > 0 ? (
    <div className="pl-4 pb-8 flex flex-col gap-2">
      {Object.values(ProductWishList)?.map((item) => {
        return (
          <div
            key={item?.k}
            className="border shadow p-2 rounded-md bg-white mr-4"
          >
            <div className="flex">
              <Link href={"/shop/" + item?.k}>
                <div
                  className="bg-gray-100 rounded rounded-md flex items-center justify-center border"
                  style={{
                    width: 100,
                    height: 100,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={`/products/${item?.i}.png`}
                    width={40}
                    height={40}
                    alt={item?.t || "Wingfi Product"}
                  />
                </div>
              </Link>
              <div className="ml-2 flex flex-col justify-between pb-1-">
                <div className="flex flex-col">
                  <p className="font-semibold">
                    <Link href={"/shop/" + item?.k}>{item.t}</Link>
                  </p>
                  <p className="text-sm flex gap-1 items-center">
                    <MdOutlineMergeType
                      className={[Theme_text_colors_class.primary].join(" ")}
                    />
                    {item.c}
                  </p>
                </div>

                <div className="flex gap-2">
                  <CartButton item={item} text="Add to Cart" />
                  <button
                    className="btn btn-sm"
                    onClick={(e) => {
                      e.preventDefault();
                      ToggleProductInWishList({ item });
                    }}
                  >
                    Remove from Wishlist
                  </button>
                </div>

                <p className="text-sm flex gap-2">
                  <span
                    className={[Theme_text_colors_class.primary].join(" ")}
                    style={{
                      fontWeight: 700,
                    }}
                  >
                    ₹ {item.p}/-
                  </span>
                  <span
                    style={{
                      color: "gray",
                      textDecorationLine: "line-through",
                      textDecorationColor: "gray",
                    }}
                  >
                    ₹ {item.m}/-
                  </span>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center">
      <Image src={"/images/empty.png"} width={200} height={200} alt="" />
      <span className="mt-4 text-xl">Wishlist is empty</span>
    </div>
  );
}
