"use client";

import { CheckoutSteps } from "@/components";
import { CiGift } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  loadSingleOrderRequest,
  resetGenerateOrderState,
} from "@/redux/reducers/order";
import { resetCart } from "@/redux/reducers/cart";
import { useSelector } from "react-redux";
import { selectOrderById } from "@/redux/selectors/order";
import { OrderStatus } from "@/redux/constants/order";
import { selectUserUID } from "@/redux/selectors/auth";

export default function ReviewContainer({
  status = true,
  orderid,
}: {
  status?: boolean;
  orderid: string;
}) {
  const dispatch = useDispatch();
  const orderData = useSelector(selectOrderById(orderid));
  const UserID = useSelector(selectUserUID);

  const OrderDate = orderData?.statuses?.find(
    (e) => e.status === OrderStatus.Pending
  )?.date;

  const confirmBox = [
    {
      key: 0,
      title: "Order Date",
      value: OrderDate ? new Date(OrderDate).toLocaleString() : OrderDate,
    },
    {
      key: 1,
      title: "Expected Delivery",
      value: "not known",
    },
    {
      key: 2,
      title: "Order ID",
      value: orderData?.id,
    },
    {
      key: 3,
      title: "Payment Method",
      value: orderData?.paymentMethod === 0 ? "ONLINE" : "COD",
    },
  ];

  useEffect(() => {
    dispatch(resetCart());
    dispatch(resetGenerateOrderState());
  }, [dispatch]);

  useEffect(() => {
    console.log(orderData);
    if (UserID) {
      dispatch(loadSingleOrderRequest({ orderid, uid: UserID }));
    }
  }, [orderid, UserID]);

  const OtherDetailsService = {
    t: 18, // Tax Fees
    s: 50, // Shipping Fees
  };
  return (
    <div className="px-4 pb-0 sm:pb-8 flex flex-col gap-2 basis-1/2 flex-1">
      <CheckoutSteps step={4} />
      <div className="bg-white border shadow rounded-sm flex flex-col sm:flex-row">
        <div
          style={{
            maxWidth: 500,
          }}
          className="flex-1 bg-error p-4 sm:p-16 text-white flex flex-col items-center justify-center gap-4"
        >
          <div
            className="border"
            style={{
              borderRadius: 100,
              width: 100,
              height: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            <CiGift size={50} />
          </div>
          <div>
            <p className="text-center">
              Your Order is {status ? "Confirmed!" : "Failed!"}
            </p>
            <p className="text-center"> Thank you, for shopping with us.</p>
          </div>
          <div className="flex flex-wrap gap-y-4 mt-8">
            {confirmBox?.map((item) => (
              <div key={item.key} className="basis-1/2">
                <p
                  className={
                    item.key % 2 === 1 ? "text-right text-sm" : "text-sm"
                  }
                >
                  {item.title}:
                </p>
                <p className={item.key % 2 === 1 ? "text-right" : ""}>
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 p-8">
          <span className="text-xl font-semibold">Order Details</span>
          <table className="w-full mt-4">
            <thead>
              <tr>
                <th className="font-medium text-left py-4">Product</th>
                <th className="font-medium text-right">Total</th>
              </tr>
            </thead>
            <tbody>
              {orderData?.items?.map((item, index) => {
                return (
                  <tr
                    key={item.sku}
                    style={{
                      borderTop: "1px solid rgba(0,0,0,0.15)",
                    }}
                  >
                    <td className="text-gray-500 py-4 text-sm">
                      {index + 1 + ". " + item.sku + " x " + item.qty}
                    </td>
                    <td className="text-right text-black text-medium">
                      ₹{item.price * item.qty}/-
                    </td>
                  </tr>
                );
              })}

              <tr
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.15)",
                }}
              >
                <td className="text-gray-500 py-4 text-sm">Subtotal</td>
                <td className="font-medium text-right">
                  ₹{orderData?.subtotal}/-
                </td>
              </tr>
              <tr
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.15)",
                }}
              >
                <td className="text-gray-500 py-4 text-sm">Shipping</td>
                <td className="font-medium text-right">
                  ₹{orderData?.delivery}/-
                </td>
              </tr>

              <tr
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.15)",
                }}
              >
                <td className="text-gray-500 py-4 text-sm">
                  Tax ({OtherDetailsService.t}%)
                </td>
                <td className="font-medium text-right">
                  ₹{orderData?.tax}
                  /-
                </td>
              </tr>

              {Number(orderData?.discount) > 0 && (
                <tr
                  style={{
                    borderTop: "1px solid rgba(0,0,0,0.15)",
                  }}
                >
                  <td className="text-gray-500 py-4 text-sm">Discount</td>
                  <td className="font-medium text-right">
                    ₹{orderData?.discount}
                    /-
                  </td>
                </tr>
              )}

              <tr
                style={{
                  borderTop: "1px solid rgba(0,0,0,0.15)",
                }}
              >
                <td className="font-semibold py-4">Order Total</td>
                <td className="font-semibold text-right">
                  ₹{orderData?.total}
                  /-
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
