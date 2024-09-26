"use client";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  NavBar,
  Footer,
  Newsletter,
  CartProductArray,
  PricingCart,
  EmptyCart,
} from "@/components";
import { AddAddressItem, AddressItem, PaymentOptions } from "./components";
import {
  selectAddresses,
  selectDefaultAddress,
  selectDefaultAddressObject,
} from "@/redux/selectors/address";
import {
  addNewAddressRequest,
  changeDefaultAddress,
  fetchAddressesRequest,
} from "@/redux/reducers/address";
import { AddressType, BasicAddressFields } from "@/redux/constants/address";
import { selectUserUID } from "@/redux/selectors/auth";
import { selectCartQuantity } from "@/redux/selectors/cart";
import ProtectedRoute from "@/service/Authentication/ProtectedRoutes";
import {
  selectGenerateOrderStatusState,
  selectNewOrderIDState,
} from "@/redux/selectors/order";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const [checkoutSteps, setCheckoutSteps] = useState<number>(1);
  const SavedAddressSelector = useSelector(selectAddresses);
  const DefaultAddress = useSelector(selectDefaultAddress);
  const dispatch = useDispatch();
  const UserUID = useSelector(selectUserUID);
  const quantity = useSelector(selectCartQuantity);
  const defaultAddressData = useSelector(selectDefaultAddressObject);
  const GenerateOrderStatus = useSelector(selectGenerateOrderStatusState);
  const newGeneratedOrderID = useSelector(selectNewOrderIDState);
  const navigate = useRouter();

  const [formValues, setFormValues] = useState<BasicAddressFields>({
    houseNumber: "",
    name: "",
    phoneNumber: 0,
    pinCode: 0,
    landmark: "",
    city: "",
    state: "",
    type: "other",
  });

  useEffect(() => {
    (async function () {
      if (UserUID) {
        dispatch(fetchAddressesRequest(UserUID));
      } else {
        console.error("Error: E1156");
      }
    })();
  }, [UserUID, dispatch]);

  async function addNewAddressController() {
    if (UserUID) {
      const keySelected = Date.now();
      await dispatch(
        addNewAddressRequest({ ...formValues, key: keySelected, uid: UserUID })
      );
    }
  }

  useEffect(() => {
    if (GenerateOrderStatus) {
      if (newGeneratedOrderID) {
        navigate.replace(`/review/${newGeneratedOrderID}`);
      }
    }
  }, [GenerateOrderStatus, navigate, newGeneratedOrderID]);

  return (
    <ProtectedRoute>
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
            {quantity ? (
              <>
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
                          data={e}
                          addressSelected={DefaultAddress}
                          setCheckoutSteps={setCheckoutSteps}
                          setAddressSelected={(item) =>
                            dispatch(changeDefaultAddress(item))
                          }
                        />
                      ))}
                      <div
                        className={`flex p-6 gap-4 items-start cursor-pointer border-t-2 ${
                          DefaultAddress === 999 ? "bg-blue-50" : ""
                        }`}
                        onClick={() => dispatch(changeDefaultAddress(999))}
                      >
                        <input
                          type="radio"
                          name="select_address"
                          className="mt-1"
                          checked={DefaultAddress === 999}
                          onChange={() => dispatch(changeDefaultAddress(999))}
                        />
                        <div className="flex flex-col flex-1 text-sm gap-2">
                          <span className="text-sm font-medium text-blue-600 cursor-pointer mb-2">
                            Add a new address
                          </span>
                          {DefaultAddress === 999 && (
                            <AddAddressItem
                              formValues={formValues}
                              setFormValues={setFormValues}
                              addNewAddressController={addNewAddressController}
                            />
                          )}
                        </div>
                      </div>
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
                          <p className="font-bold text-md text-black">
                            {defaultAddressData?.name}{" "}
                            {defaultAddressData?.phoneNumber}
                          </p>
                          <span>
                            {defaultAddressData?.houseNumber},
                            {defaultAddressData?.landmark}
                            {defaultAddressData?.city}
                            {defaultAddressData?.state},
                          </span>
                          <span className="font-bold text-black">
                            {defaultAddressData?.pinCode}
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
              </>
            ) : (
              <EmptyCart />
            )}
          </div>

          <Newsletter />
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
