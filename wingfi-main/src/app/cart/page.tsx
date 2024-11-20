"use client"

import CartComponent from "./CartComponent";

export default function Cart() {
  return (
    <div className="bg-gray-100">
      <main
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="sm:my-8"
      >
        <CartComponent />
      </main>
    </div>
  );
}
