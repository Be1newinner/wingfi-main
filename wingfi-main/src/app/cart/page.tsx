"use client";

import CartComponent from "./CartComponent";

export default function Cart() {
  return (
    <div className="bg-gray-100">
      <main
        style={{
          maxWidth: 1200,
        }}
        className="sm:py-8 mx-auto"
      >
        <CartComponent />
      </main>
    </div>
  );
}
