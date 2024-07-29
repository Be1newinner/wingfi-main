"use client";

import { changeDefaultAddress } from "@/store/Slice/AddressSlice";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";

interface propType {
  id: number;
  addressSelected: number;
  setCheckoutSteps: Dispatch<SetStateAction<number>>;
  setAddressSelected: Dispatch<SetStateAction<number>>;
}

export const AddressItem = ({
  id,
  setCheckoutSteps,
  setAddressSelected,
  addressSelected,
}: propType) => {
  const dispatch = useDispatch();

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
            onClick={() => {
              dispatch(changeDefaultAddress(id));
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
