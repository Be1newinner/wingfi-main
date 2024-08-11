"use client";

import { Dispatch, SetStateAction, useState } from "react";
import { ModifiedInput, ModifiedSelect } from "./index";

interface propTypes {
  addressSelected: number;
  setAddressSelected: Dispatch<SetStateAction<number>>;
}

export const AddAddressItem = ({
  addressSelected,
  setAddressSelected,
}: propTypes) => {
  const [value, setValue] = useState("");

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
            <ModifiedInput
              title="Full Name"
              className="basis-1/2 odd:pr-4"
              setValue={setValue}
            />
            <ModifiedInput
              title="10-digit Mobile Number"
              className="basis-1/2 odd:pr-4"
              setValue={setValue}
            />
            <ModifiedInput
              title="Pincode"
              className="basis-1/2 odd:pr-4"
              setValue={setValue}
            />
            <ModifiedInput
              title="Locality"
              className="basis-1/2 odd:pr-4"
              setValue={setValue}
            />
            <ModifiedInput
              title="Address (Area and Street)"
              className="basis-full"
              setValue={setValue}
            />
            <ModifiedInput
              title="City/State/Town"
              className="basis-1/2 pr-4"
              setValue={setValue}
            />
            <ModifiedSelect />
            <ModifiedInput
              setValue={setValue}
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
