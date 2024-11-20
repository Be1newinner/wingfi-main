"use client"

import Lottie from "lottie-react";
import * as animationData from "@/../public/animation/empty_cart.json";
import Link from "next/link";

export function EmptyCart() {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-4">
      <Lottie
        animationData={animationData}
        className="flex justify-center items-center"
        loop={true}
        style={{
          maxWidth: 400,
        }}
      />
      <p className="text-2xl">
        Your cart is <span className="text-error font-semibold">Empty!</span>
      </p>
      <p>Please go to shop page and add some items in cart!</p>
      <Link href="/shop" className="btn btn-error px-12">
        RETURN TO SHOP
      </Link>
    </div>
  );
}
