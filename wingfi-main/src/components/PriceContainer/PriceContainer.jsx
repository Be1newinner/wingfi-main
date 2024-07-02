"use client";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function PriceContainer({
  text = "Checkout",
  link = "/checkout",
}) {
  const CartSelector = useSelector((selector) => selector.Cart);
  const discount = CartSelector.discount || 0;

  return CartSelector.subtotal != 0 ? (
    <div className="mx-4 sm:mr-0 p-4 pb-8 bg-white rounded-sm shadow border basis-1/4 h-min min-w-[290px]">
      <p className="text-md font-bold pb-4">Order Summary</p>
      <p className="flex justify-between">
        <span className="text-gray-500 text-sm">Subtotal</span>
        <span className="font-medium">₹{CartSelector.subtotal || 0}/-</span>
      </p>
      <div className="divider my-2" />
      <p className="flex justify-between">
        <span className="text-gray-500 text-sm">(+) Shipping</span>
        <span className="font-medium">
          {CartSelector.delivery == 0
            ? "Free"
            : `+ ₹${CartSelector.delivery || 0}/-`}
        </span>
      </p>
      <div className="divider my-2" />

      {CartSelector.tax != 0 ? (
        <>
          <p className="flex justify-between">
            <span className="text-gray-500 text-sm">(+) Charges</span>
            <span className="font-medium">
              + ₹{CartSelector.tax || 0}
              /-
            </span>
          </p>
          <div className="divider my-2" />
        </>
      ) : null}

      {discount > 0 && (
        <>
          <p className="flex justify-between">
            <span className="text-gray-500 text-sm">(-) Discount</span>
            <span className="font-medium">
              - ₹{discount}
              /-
            </span>
          </p>
          <div className="divider my-2" />
        </>
      )}

      <p className="flex justify-between">
        <span className="font-medium text-sm">Order Total</span>
        <span className="font-medium">
          ₹{CartSelector.total || 0}
          /-
        </span>
      </p>

      <Link href={link}>
        <button className="btn btn-error w-full mt-4 text-white font-medium rounded-sm text-shadow text-sm">
          {text}
        </button>
      </Link>
    </div>
  ) : null;
}
