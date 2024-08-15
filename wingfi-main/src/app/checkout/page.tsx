"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavBar, Footer, Newsletter } from "@/registry/components";
import { AuthProvider } from "@/registry/context";
import PricingCart from "@/components/PricingCart";
import { AddAddressItem, AddressItem, PaymentOptions } from "./components";
import CartProductArray from "@/components/CartProductArray";
import {
  selectAddresses,
  selectDefaultAddress,
} from "@/redux/selectors/address";
import { changeDefaultAddress } from "@/redux/actions/address";
import { AddressType } from "@/redux/constants/address";

export default function Checkout() {
  const [checkoutSteps, setCheckoutSteps] = useState<number>(1);
  const SavedAddressSelector = useSelector(selectAddresses);
  const DefaultAddress = useSelector(selectDefaultAddress);
  const dispatch = useDispatch();

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
          className="sm:my-8"
        >
          <div className="flex flex-col  w-full gap-4 sm:flex-row">
            <div className="basis-2/3 flex flex-col gap-4">
              {checkoutSteps === 1 ? (
                <div className="bg-white shadow">
                  <p className="flex gap-2 text-white font-semibold text-sm p-4 px-4 sm:px-8 shadow-md bg-blue-500">
                    <div className="flex w-5 h-5 bg-white rounded-sm items-center justify-center">
                      <span className="text-blue-600 text-xs font-medium">
                        1
                      </span>
                    </div>
                    DELIVERY ADDRESS
                  </p>
                  {SavedAddressSelector?.map((e: AddressType) => (
                    <AddressItem
                      id={e.key}
                      key={e.key}
                      addressSelected={DefaultAddress}
                      setCheckoutSteps={setCheckoutSteps}
                      setAddressSelected={(item) =>
                        dispatch(changeDefaultAddress({ key: item }))
                      }
                    />
                  ))}
                  <AddAddressItem
                    addressSelected={DefaultAddress}
                    setAddressSelected={() =>
                      dispatch(changeDefaultAddress({ key: 999 }))
                    }
                  />
                </div>
              ) : (
                <div className="bg-white shadow flex">
                  <div className="flex gap-2 text-gray-500 font-semibold py-6 text-sm px-4 sm:px-8 shadow-md bg-white flex-1">
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
                  <p className="flex gap-2 text-white font-semibold text-sm p-4 px-4 sm:px-8 shadow-md bg-blue-500">
                    <div className="flex w-5 h-5 bg-white rounded-sm items-center justify-center">
                      <span className="text-blue-600 text-xs font-medium">
                        2
                      </span>
                    </div>
                    ORDER SUMMARY
                  </p>
                  <CartProductArray />
                  <div className="px-4 sm:px-8 py-4 flex flex-col  items-center">
                    <span className="text-sm flex-1">
                      Order confirmation email will be sent to
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
                  <p className="flex gap-2 text-gray-500 font-semibold text-sm p-4 px-4 sm:px-8 shadow-md bg-white">
                    <div className="flex w-5 h-5 bg-gray-200 rounded-sm items-center justify-center">
                      <span className="text-blue-500 text-xs font-medium">
                        2
                      </span>
                    </div>
                    ORDER SUMMARY
                  </p>
                </div>
              )}

              <PaymentOptions
                checkoutSteps={checkoutSteps}
                setCheckoutSteps={setCheckoutSteps}
              />
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
