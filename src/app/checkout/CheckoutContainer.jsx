"use client";

import { PriceContainer } from "@/registry/components";
import { useSelector } from "react-redux";
// import CartContainer from "./CartContainer";
import ShippingContainer from "./ShippingContainer";
import OrderDetails from "./OrderDetails";
import Image from "next/image";

export default function CheckoutContainer() {
  const CartSelector = useSelector((selector) => selector.Cart);
  const CartLength = CartSelector.qty || 0;

  return (
    <div className="flex flex-wrap">
      {/* <CartContainer /> */}
      {CartLength > 0 ? (
        <div className="flex flex-wrap">
          <ShippingContainer />
          <div className="flex flex-col gap-4">
            <OrderDetails />
            <PriceContainer text="Continue to Payment" link="/review" />
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mx-auto my-8">
          <Image src={"/images/empty.png"} width={400} height={400} alt="" />
          <span className="mt-4 text-xl">Cart is empty</span>
        </div>
      )}
    </div>
  );
}
