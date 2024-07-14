import Link from "next/link";
import React from "react";

export default function CheckoutSteps({ step = 1 }) {
  const data = [
    { title: "Cart", key: 0, link: "/cart" },
    { title: "Checkout", key: 1, link: "/checkout" },
    // { title: "Payment", key: 2, link: "/payment" },
    { title: "Review", key: 2, link: "/review" },
  ];

  return (
    <div className="w-full hidden sm:flex justify-center h-12 mb-2">
      <ul className="flex h-min items-center">
        {data.map((item, index) => (
          <React.Fragment key={item.key}>
            <li
              className={`px-8 rounded-3xl text-sm p-2 text-center font-medium ${
                step > item.key ? "bg-error text-white" : "bg-gray-300"
              }`}
            >
              {item.key < step ? (
                <Link href={item.link}>
                  {item.key + 1}. {item.title}
                </Link>
              ) : (
                <span>
                  {item.key + 1}. {item.title}
                </span>
              )}
            </li>
            {index < data.length - 1 && (
              <div
                className={`w-8 h-2 ${
                  step > item.key + 1 ? "bg-error" : "bg-gray-300"
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
