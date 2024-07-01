"use client";

import { ProductCartContext } from "@/registry/context";
import Image from "next/image";
import { useContext } from "react";
import { MdClear } from "react-icons/md";
import { Theme_text_colors_class } from "@/infrastructure/theme";
import { MdOutlineMergeType } from "react-icons/md";
import Link from "next/link";
import QuantityChangeSelect from "./QuantityChangeSelect";
import { CheckoutSteps } from "@/registry/components";
import { Variants } from "@/service/Offline/Variants";
import { useSelector } from "react-redux";
import { productImageURL } from "@/service/Offline/ImagesURL";

export default function CartContainer() {
  const CartSelector = useSelector((selector) => selector.Cart);
  const CartLength = CartSelector.qty || 0;
  const ProductCart = CartSelector.items || {};

  return CartLength > 0 ? (
    <div className="px-4 pb-8 flex flex-col gap-2 flex-1 basis-1/2">
      <CheckoutSteps />

      <div classNmae="flex flex-col gap-4">
        {Object.values(ProductCart)
          ?.filter((e) => e.qty > 0)
          ?.map((item) => {
            return (
              <div
                key={item?.sku}
                className="border shadow p-4 rounded-sm bg-white relative"
              >
                <div className="flex gap-2">
                  <Link href={"/shop/" + item?.sku} className="hidden sm:flex">
                    <div
                      className="bg-gray-100 rounded-sm flex items-center justify-center border"
                      style={{
                        width: 120,
                        height: 120,
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={productImageURL({ Sku: item?.sku, ImageName: 1 })}
                        width={200}
                        height={200}
                        alt={item?.title || "Wingfi Product"}
                      />
                    </div>
                  </Link>
                  <div className="ml-2 flex flex-col justify-between pb-1 flex-1">
                    <div className="flex flex-col gap-2">
                      <p className="font-semibold hover:link">
                        <Link href={"/shop/" + item?.sku}>{item.title}</Link>
                      </p>
                      <p className="text-sm flex gap-1 items-center">
                        <MdOutlineMergeType
                          className={[Theme_text_colors_class.primary].join(
                            " "
                          )}
                        />
                        {Variants[item.color]?.name}
                      </p>
                    </div>

                    <div className="flex gap-2 items-center flex-1 justify-between">
                      <p className="text-sm flex gap-2">
                        <span
                          className={[Theme_text_colors_class.primary].join(
                            " "
                          )}
                          style={{
                            fontWeight: 700,
                          }}
                        >
                          ₹ {item.price}/-
                        </span>
                        <span
                          style={{
                            color: "gray",
                            textDecorationLine: "line-through",
                            textDecorationColor: "gray",
                          }}
                        >
                          ₹ {item.mrp}/-
                        </span>
                      </p>
                      <QuantityChangeSelect item={item} quantity={item?.qty} />
                    </div>
                  </div>
                </div>

                <button
                  className="btn btn-icon btn-sm absolute top-2 right-2 btn-ghost p-0"
                  style={{
                    width: 30,
                    height: 30,
                  }}
                >
                  <MdClear />
                </button>
              </div>
            );
          })}
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center mx-auto my-8">
      <Image src={"/images/empty.png"} width={400} height={400} alt="" />
      <span className="mt-4 text-xl">Cart is empty</span>
    </div>
  );
}
