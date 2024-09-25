"use client";

import { AddressType } from "@/redux/constants/address";
import { Dispatch, SetStateAction } from "react";

interface propType {
  id: number;
  addressSelected: number | null;
  setCheckoutSteps: Dispatch<SetStateAction<number>>;
  setAddressSelected: (arg0: number) => void;
  data: AddressType;
}

export const AddressItem = ({
  id,
  setCheckoutSteps,
  setAddressSelected,
  addressSelected,
  data,
}: propType) => {
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
          <span className="text-xs bg-gray-200 text-gray-600 font-semibold px-2 py-1 uppercase">
            {data.type}
          </span>
          <span className="font-medium">{data.phoneNumber}</span>
        </p>
        <p className="uppercase">
          {data.houseNumber} , {data.landmark} , {data.city}
        </p>
        <p className="uppercase">
          {data.state}, <span className="font-medium">{data.pinCode}</span>
        </p>
        {addressSelected === id && (
          <button
            onClick={() => {
              setAddressSelected(id);
              setCheckoutSteps(2);
            }}
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
