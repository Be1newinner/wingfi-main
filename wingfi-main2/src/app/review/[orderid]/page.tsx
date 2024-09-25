"use client";

import { NavBar, Footer, Newsletter } from "@/components";
import Link from "next/link";
import ReviewContainer from "./ReviewContainer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadSingleOrderRequest } from "@/redux/reducers/order";
import { useSelector } from "react-redux";
import { selectOrderById } from "@/redux/selectors/order";
import { selectUserUID } from "@/redux/selectors/auth";
import Image from "next/image";

export default function Checkout({ params }: { params: { orderid: string } }) {
  const dispatch = useDispatch();
  const orderData = useSelector(selectOrderById(params.orderid)) || null;
  const UserID = useSelector(selectUserUID);

  useEffect(() => {
    if (UserID) {
      dispatch(
        loadSingleOrderRequest({ orderid: params.orderid, uid: UserID })
      );
    } else {
      console.log("user not logged in!");
    }
  }, [params.orderid, UserID]);

  return (
    <div className="bg-gray-100">
      <NavBar />

      <main
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h2 className="text-2xl font-semibold ml-4 sm:ml-0 mt-8">
          Order Details
        </h2>
        <div className="text-sm breadcrumbs pb-0 ml-4 sm:ml-0">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>Review</li>
          </ul>
        </div>
        <div className="divider" />

        <div className="flex flex-wrap">
          {orderData?.id ? (
            <ReviewContainer orderData={orderData} />
          ) : (
            <div className="mx-auto my-20">
              <Link href={"/"}>
                <Image
                  src={"/images/order_not_found.webp"}
                  alt="Order Not Found"
                  width={900}
                  height={900}
                  className="w-full h-full max-w-md mx-auto"
                />
              </Link>
            </div>
          )}
        </div>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
