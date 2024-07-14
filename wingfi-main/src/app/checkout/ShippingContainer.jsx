"use client";

import { CheckoutSteps } from "@/registry/components";
import { useContext, useEffect, useState } from "react";
import getAllAddresses from "@/service/Address/getAllAddress";
import { AuthContext } from "@/registry/context";

export default function ShippingContainer() {
  const [isNewAddress, setIsNewAddress] = useState(false);
  const [SavedAddress, setSavedAddress] = useState([]);
  const User = useContext(AuthContext)?.state?.user || {};

  useEffect(() => {
    (async function () {
      if (User?.uid) {
        const { data, status } = await getAllAddresses({
          uid: User?.uid,
        });
        // console.log(User?.uid, "Address from internet ", data, status);
        if (status === 200) setSavedAddress(data || []);
      }
    })();
  }, [User]);

  return (
    <div className="px-4 pb-8 flex flex-col gap-2 basis-1/2 flex-1">
      <CheckoutSteps step={2} />

      {/* Saved Addreses */}
      <div className="bg-white border shadow rounded-sm p-4 flex flex-col divide-y">
        <p className="text-md font-semibold pb-4">
          Select from Saved Addresses
        </p>
        {SavedAddress?.slice(0, 4)?.map((item, index) => (
          <div key={item.k || index} className="flex gap-4 items-center py-4">
            <input
              type="radio"
              name="address-radio"
              className="radio radio-error mb-1 radio-sm"
              defaultChecked={index == 0 ? true : false}
              onChange={() => {
                setIsNewAddress(false);
                // console.log("RADIO => ", item.k);
              }}
            />
            <table
              className="text-sm"
              style={{
                borderSpacing: 10,
              }}
            >
              <tbody>
                <tr>
                  <td>Name:</td>
                  <td>
                    {item?.n} , {item?.p}
                  </td>
                </tr>
                <tr>
                  <td>Address:</td>
                  <td>
                    {item?.h} , {item?.l}, {item?.c}, {item?.s}, {item?.pi}
                  </td>
                </tr>
                <tr>
                  <td>Address Type: </td>
                  <td>
                    {item?.t === 0
                      ? "Home"
                      : item?.t === 1
                      ? "Office"
                      : "Other"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}

        <div className="flex gap-4 items-center py-4">
          <input
            type="radio"
            name="address-radio"
            className="radio radio-error mb-1 radio-sm"
            defaultChecked={SavedAddress?.length == 0 ? true : false}
            onChange={() => {
              setIsNewAddress(true);
              // console.log("RADIO => New ");
            }}
          />
          <p>Add a New Address</p>
        </div>
      </div>
      {isNewAddress ? (
        <div className="bg-white border shadow rounded-sm p-4">
          <p className="text-md font-semibold mx-2">Billing Details</p>
          <div className="flex flex-wrap mt-4">
            <label className="form-control w-full basis-1/2 px-1">
              <input
                type="text"
                placeholder="full name"
                className="input input-bordered rounded-sm focus:outline-none focus:border-success w-full text-sm"
                maxLength={20}
                required
              />
              <div className="label">
                <span className="label-text-alt text-error font-medium">
                  Bottom Left label
                </span>
              </div>
            </label>
            <label className="form-control w-full basis-1/2 px-1">
              <input
                type="text"
                placeholder="contact number"
                className="input input-bordered rounded-sm  focus:outline-none focus:border-success w-full text-sm"
                maxLength={20}
                required
              />
              <div className="label">
                <span className="label-text-alt text-error font-medium">
                  Bottom Left label
                </span>
              </div>
            </label>
            <label className="form-control w-full basis-1/2 px-1">
              <input
                type="text"
                placeholder="email ID"
                className="input input-bordered rounded-sm  focus:outline-none focus:border-success w-full text-sm"
                maxLength={20}
                required
              />
              <div className="label">
                <span className="label-text-alt text-error font-medium">
                  Bottom Left label
                </span>
              </div>
            </label>
            <label className="form-control w-full basis-1/2 px-1">
              <input
                type="text"
                placeholder="House/Flat/Office No."
                className="input input-bordered rounded-sm  focus:outline-none focus:border-success w-full text-sm"
                maxLength={20}
                required
              />
              <div className="label">
                <span className="label-text-alt text-error font-medium">
                  Bottom Left label
                </span>
              </div>
            </label>
            <label className="form-control w-full px-1">
              <input
                type="text"
                placeholder="Street Address, Landmark"
                className="input input-bordered rounded-sm  focus:outline-none focus:border-success w-full text-sm"
                inputMode="tel"
                required
              />
              <div className="label">
                <span className="label-text-alt text-error font-medium">
                  Bottom Left label
                </span>
              </div>
            </label>

            <label className="form-control w-full basis-1/3 px-1">
              <input
                type="text"
                placeholder="city"
                className="input input-bordered rounded-sm  focus:outline-none focus:border-success w-full text-sm"
                inputMode="tel"
                required
              />
              <div className="label">
                <span className="label-text-alt text-error font-medium">
                  Bottom Left label
                </span>
              </div>
            </label>
            <label className="form-control w-full basis-1/3 px-1">
              <input
                type="text"
                placeholder="State"
                className="input input-bordered rounded-sm  focus:outline-none focus:border-success w-full text-sm"
                inputMode="tel"
                required
              />
              <div className="label">
                <span className="label-text-alt text-error font-medium">
                  Bottom Left label
                </span>
              </div>
            </label>
            <label className="form-control w-full basis-1/3 px-1">
              <input
                type="text"
                placeholder="Pin Code"
                className="input input-bordered rounded-sm focus:outline-none focus:border-success w-full text-sm"
                inputMode="numeric"
                minLength={6}
                maxLength={6}
                required
              />
              <div className="label">
                <span className="label-text-alt text-error font-medium">
                  Bottom Left label
                </span>
              </div>
            </label>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Address Type</span>
              </div>
              <div className="flex gap-4">
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="type-radio"
                    className="radio radio-error mb-1 radio-sm"
                  />
                  <span
                    style={{
                      fontSize: 14,
                      marginBottom: 4,
                    }}
                  >
                    Home ( All Day Delivery )
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <input
                    type="radio"
                    name="type-radio"
                    className="radio radio-error mb-1 radio-sm"
                    defaultChecked
                  />
                  <span
                    style={{
                      fontSize: 14,
                      marginBottom: 4,
                    }}
                  >
                    Office ( Delivery 9 Am to 5 PM )
                  </span>
                </div>
              </div>
              <div className="label">
                <span className="label-text-alt text-error font-medium">
                  Bottom Left label
                </span>
              </div>
            </label>

            <label className="form-control w-full mt-2">
              <textarea
                className="textarea textarea-bordered rounded-sm focus:outline-none focus:border-success h-28 text-sm"
                placeholder="Additional Information"
              />
              <div className="label">
                <span className="label-text-alt text-error font-medium">
                  Your bio
                </span>
              </div>
            </label>
          </div>
        </div>
      ) : null}
    </div>
  );
}
