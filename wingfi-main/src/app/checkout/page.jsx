"use client";

import { NavBar, Footer, Newsletter } from "@/registry/components";
import { AuthProvider } from "@/registry/context";
import PricingCart from "@/components/PricingCart";
import { useState } from "react";
import { cartProductsData } from "@/service/Offline/CartProducts";
import CartProduct from "@/components/CartProduct";
import { AddAddressItem, AddressItem } from "./components";

export default function Checkout() {
  const [addressSelected, setAddressSelected] = useState(0);
  const [checkoutSteps, setCheckoutSteps] = useState(1);

  return (
    <AuthProvider>
      <div className="bg-gray-100">
        <NavBar />

        <main
          style={{
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="my-8"
        >
          <div className="flex w-full gap-4">
            <div className="basis-2/3 flex flex-col gap-4">
              {checkoutSteps === 1 ? (
                <div className="bg-white shadow">
                  <p className="flex gap-2 text-white font-semibold text-sm p-4 px-8 shadow-md bg-blue-500">
                    <div className="flex w-5 h-5 bg-white rounded-sm items-center justify-center">
                      <span className="text-blue-600 text-xs font-medium">
                        1
                      </span>
                    </div>
                    DELIVERY ADDRESS
                  </p>
                  {[{ id: 0 }, { id: 1 }].map((e) => (
                    <AddressItem
                      id={e.id}
                      addressSelected={addressSelected}
                      setAddressSelected={setAddressSelected}
                      setCheckoutSteps={setCheckoutSteps}
                    />
                  ))}
                  <AddAddressItem
                    addressSelected={addressSelected}
                    setAddressSelected={setAddressSelected}
                  />
                </div>
              ) : (
                <div className="bg-white shadow flex">
                  <div className="flex gap-2 text-gray-500 font-semibold py-6 text-sm px-8 shadow-md bg-white flex-1">
                    <div className="flex w-5 h-5 bg-gray-200 rounded-sm items-center justify-center">
                      <span className="text-blue-500 text-xs font-medium">
                        1
                      </span>
                    </div>
                    <div className="flex flex-col flex-1 gap-2">
                      <span>DELIVERY ADDRESS</span>
                      <span className="font-normal text-xs text-black">
                        <span className="font-medium text-sm">Vijay Kumar</span>
                        <span>
                          H550, Gali No 9, Gali No 9, Gali No 9, Gali No 9, Gali
                          No 9, M1 Block, Near Noorani Masjid, Sangam Vihar, New
                          Delhi,
                        </span>
                        <span className="font-semibold"> 110062</span>
                      </span>
                    </div>
                    <button onClick={() => setCheckoutSteps(1)}>
                      <span className="text-blue-500 border px-8 py-2">
                        CHANGE
                      </span>
                    </button>
                  </div>
                </div>
              )}

              {checkoutSteps === 2 ? (
                <div className="bg-white shadow">
                  <p className="flex gap-2 text-white font-semibold text-sm p-4 px-8 shadow-md bg-blue-500">
                    <div className="flex w-5 h-5 bg-white rounded-sm items-center justify-center">
                      <span className="text-blue-600 text-xs font-medium">
                        2
                      </span>
                    </div>
                    ORDER SUMMARY
                  </p>
                  <div>
                    {cartProductsData?.map((item) => {
                      return (
                        <CartProduct
                          key={item.sku}
                          sku={item.sku}
                          imgUrl={item.imgUrl}
                          title={item.title}
                          mrp={item.mrp}
                          price={item.price}
                        />
                      );
                    })}
                  </div>
                  <div className="px-8 py-4 flex items-center">
                    <span className="text-sm flex-1">
                      Order confirmation email will be sent to{" "}
                      <span className="font-semibold">
                        be1newinner@gmail.com
                      </span>
                    </span>
                    <button
                      onClick={() => setCheckoutSteps(3)}
                      className="btn btn-error mt-2 text-white text-xs font-medium px-12 py-4 rounded-none max-w-52"
                    >
                      CONTINUE
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white shadow cursor-pointer">
                  <p className="flex gap-2 text-gray-500 font-semibold text-sm p-4 px-8 shadow-md bg-white">
                    <div className="flex w-5 h-5 bg-gray-200 rounded-sm items-center justify-center">
                      <span className="text-blue-500 text-xs font-medium">
                        2
                      </span>
                    </div>
                    ORDER SUMMARY
                  </p>
                </div>
              )}

              {checkoutSteps === 3 ? (
                <div className="bg-white shadow">
                  <p className="flex gap-2 text-white font-semibold text-sm p-4 px-8 shadow-md bg-blue-500">
                    <div className="flex w-5 h-5 bg-white rounded-sm items-center justify-center">
                      <span className="text-blue-600 text-xs font-medium">
                        3
                      </span>
                    </div>
                    PAYMENT OPTIONS
                  </p>
                  <div>
                    <div className="cursor-pointer flex gap-2 items-center border-b-2 px-8">
                      <input
                        type="radio"
                        name="payment_radio"
                        id="online_payment"
                        className="cursor-pointer"
                        disabled
                      />
                      <label
                        htmlFor="online_payment"
                        className="text-sm cursor-pointer py-4"
                      >
                        Online Payment
                      </label>
                    </div>
                    <div className="cursor-pointer flex gap-2 items-center border-b-2 px-8">
                      <input
                        type="radio"
                        name="payment_radio"
                        id="cod"
                        checked
                      />
                      <label
                        htmlFor="cod"
                        className="text-sm cursor-pointer py-4"
                      >
                        Cash On Delivery
                      </label>
                    </div>
                  </div>
                  <div className="px-8 py-4 flex items-center">
                    <span className="text-sm flex-1">
                      Order confirmation email will be sent to{" "}
                      <span className="font-semibold">
                        be1newinner@gmail.com
                      </span>
                    </span>
                    <button
                      onClick={() => setCheckoutSteps(3)}
                      className="btn btn-error mt-2 text-white text-sm font-medium px-12 py-4 rounded-none max-w-60"
                    >
                      CONFIRM PAYMENT
                    </button>
                  </div>
                </div>
              ) : (
                <div className="bg-white shadow cursor-pointer">
                  <p className="flex gap-2 text-gray-500 font-semibold text-sm p-4 px-8 shadow-md bg-white">
                    <div className="flex w-5 h-5 bg-gray-200 rounded-sm items-center justify-center">
                      <span className="text-blue-500 text-xs font-medium">
                        3
                      </span>
                    </div>
                    PAYMENT OPTIONS
                  </p>
                </div>
              )}
            </div>
            <div className="basis-1/3">
              <div className="flex flex-col bg-white shadow items-between">
                <PricingCart />
              </div>
            </div>
          </div>

          <Newsletter />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
