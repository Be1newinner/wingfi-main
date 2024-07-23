"use client";

import { NavBar, Footer, Newsletter } from "@/registry/components";
// import Link from "next/link";
import { AuthProvider } from "@/registry/context";
import PricingCart from "@/components/PricingCart";
import { useState } from "react";
import { cartProductsData } from "@/service/Offline/CartProducts";
import CartProduct from "@/components/CartProduct";

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
                          {" "}
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
                      />
                      <label
                        htmlFor="online_payment"
                        className="text-sm cursor-pointer py-4"
                      >
                        Online Payment
                      </label>
                    </div>
                    <div className="cursor-pointer flex gap-2 items-center border-b-2 px-8">
                      <input type="radio" name="payment_radio" id="cod" />
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

export function ModifiedInput({
  className = "",
  value = "",
  setValue = () => null,
  title = "",
}) {
  return (
    <div className={className + " rounded-none"}>
      <label
        htmlFor={title}
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 basis-1/2 rounded-none"
      >
        <input
          type="text"
          id={title}
          className="peer border-none placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 px-2 py-3 w-full rounded-none"
          placeholder={title}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs rounded-md px-2">
          {title}
        </span>
      </label>
    </div>
  );
}

export const AddAddressItem = ({ addressSelected, setAddressSelected }) => {
  return (
    <div
      className={[
        "flex p-6 gap-4 items-start cursor-pointer border-t-2",
        999 === addressSelected ? "bg-blue-50" : "",
      ].join(" ")}
      onClick={() => setAddressSelected(999)}
    >
      <input
        type="radio"
        name="select_address"
        className="mt-1"
        checked={999 === addressSelected}
        onChange={() => setAddressSelected(999)}
      />
      <div className="flex flex-col flex-1 text-sm gap-2">
        <span className="text-sm font-medium text-blue-600 cursor-pointer mb-2">
          Add a new address
        </span>
        {999 === addressSelected && (
          <div className="flex flex-wrap gap-y-4">
            <ModifiedInput title="Full Name" className="basis-1/2 odd:pr-4" />
            <ModifiedInput
              title="10-digit Mobile Number"
              className="basis-1/2 odd:pr-4"
            />
            <ModifiedInput title="Pincode" className="basis-1/2 odd:pr-4" />
            <ModifiedInput title="Locality" className="basis-1/2 odd:pr-4" />
            <ModifiedInput
              title="Address (Area and Street)"
              className="basis-full"
            />
            <ModifiedInput title="City/State/Town" className="basis-1/2 pr-4" />
            <ModifiedSelect />
            <ModifiedInput
              title="Landmark (Optional)"
              className="basis-1/2 pr-4"
            />
            <span className="basis-full text-gray-500">Address Type</span>
            <div className="flex gap-6 basis-full">
              <div className="flex gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="address_type"
                  id="address_type_home"
                />
                <label htmlFor="address_type_home">
                  Home (All day delivery)
                </label>
              </div>
              <div className="flex gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="address_type"
                  id="address_type_work"
                />
                <label htmlFor="address_type_work">
                  Work (Delivery between 10 AM to 5 PM)
                </label>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="btn btn-error text-white text-xs font-bold px-12 py-4 rounded-none">
                SAVE AND DELIVER HERE
              </button>
              <button className="btn btn-outline btn-error rounded-none px-12 py-4">
                CANCEL
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const AddressItem = ({
  id,
  addressSelected,
  setAddressSelected,
  setCheckoutSteps,
}) => {
  return (
    <div
      className={[
        "flex p-6 gap-4 items-start cursor-pointer border-t-2",
        id === addressSelected ? "bg-blue-50" : "",
      ].join(" ")}
      onClick={() => setAddressSelected(id)}
    >
      <input
        type="radio"
        name="select_address"
        className="mt-2"
        checked={id === addressSelected}
        onChange={() => setAddressSelected(id)}
      />
      <div className="flex flex-col flex-1 text-sm gap-2">
        <p className="flex gap-2 items-center">
          <span className="font-medium">Vijay</span>
          <span className="text-xs bg-gray-200 text-gray-600 font-semibold px-2 py-1">
            HOME
          </span>
          <span className="font-medium">8130506284</span>
        </p>
        <p>
          h550, G9, M1, Near Noorani Masjid Asthal Mandir, South Sainik Farm,
          Area, South Delhi
        </p>
        <p>
          Delhi, <span className="font-medium">110080</span>
        </p>
        {addressSelected === id && (
          <button
            onClick={() => setCheckoutSteps(2)}
            className="btn btn-error mt-2 text-white text-xs font-medium px-12 py-4 rounded-none max-w-52"
          >
            DELIVER HERE
          </button>
        )}
      </div>
      <span className="text-blue-500 font-bold text-xs">EDIT</span>
    </div>
  );
};

export function ModifiedSelect() {
  return (
    <div className="basis-1/2">
      <label
        htmlFor="HeadlineAct"
        className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
      >
        <select
          name="HeadlineAct"
          id="HeadlineAct"
          className="peer border-none bg-white placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 px-2 py-3 w-full rounded-xs"
        >
          <option value="" className="text-gray-400">
            Please select
          </option>
          <option value="AP">Andhra Pradesh</option>
          <option value="AR">Arunachal Pradesh</option>
          <option value="AS">Assam</option>
          <option value="BR">Bihar</option>
          <option value="CT">Chhattisgarh</option>
          <option value="GA">Goa</option>
          <option value="GJ">Gujarat</option>
          <option value="HR">Haryana</option>
          <option value="HP">Himachal Pradesh</option>
          <option value="JK">Jammu and Kashmir</option>
          <option value="JH">Jharkhand</option>
          <option value="KA">Karnataka</option>
          <option value="KL">Kerala</option>
          <option value="MP">Madhya Pradesh</option>
          <option value="MH">Maharashtra</option>
          <option value="MN">Manipur</option>
          <option value="ML">Meghalaya</option>
          <option value="MZ">Mizoram</option>
          <option value="NL">Nagaland</option>
          <option value="OR">Odisha</option>
          <option value="PB">Punjab</option>
          <option value="RJ">Rajasthan</option>
          <option value="SK">Sikkim</option>
          <option value="TN">Tamil Nadu</option>
          <option value="TG">Telangana</option>
          <option value="TR">Tripura</option>
          <option value="UP">Uttar Pradesh</option>
          <option value="UT">Uttarakhand</option>
          <option value="WB">West Bengal</option>
        </select>

        <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
          Headliner
        </span>
      </label>
    </div>
  );
}
