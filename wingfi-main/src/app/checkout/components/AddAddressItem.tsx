"use client";

import { ChangeEvent, Dispatch, useState } from "react";
import { ModifiedInput, ModifiedSelect } from "./index";

interface FormValues {
  fullName: string;
  mobileNumber: string;
  pincode: string;
  locality: string;
  address: string;
  cityStateTown: string;
  landmark?: string;
  addressType: string;
}

interface PropTypes {
  addressSelected: number | null;
  setAddressSelected: Dispatch<number>;
}

export const AddAddressItem = ({
  addressSelected,
  setAddressSelected,
}: PropTypes) => {
  const [formValues, setFormValues] = useState<FormValues>({
    fullName: "",
    mobileNumber: "",
    pincode: "",
    locality: "",
    address: "",
    cityStateTown: "",
    landmark: "",
    addressType: "home",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      addressType: value,
    }));
  };

  return (
    <div
      className={`flex p-6 gap-4 items-start cursor-pointer border-t-2 ${
        addressSelected === 999 ? "bg-blue-50" : ""
      }`}
      onClick={() => setAddressSelected(999)}
    >
      <input
        type="radio"
        name="select_address"
        className="mt-1"
        checked={addressSelected === 999}
        onChange={() => setAddressSelected(999)}
      />
      <div className="flex flex-col flex-1 text-sm gap-2">
        <span className="text-sm font-medium text-blue-600 cursor-pointer mb-2">
          Add a new address
        </span>
        {addressSelected === 999 && (
          <div className="flex flex-wrap gap-y-4">
            <ModifiedInput
              title="Full Name"
              className="basis-1/2 pr-4"
              name="fullName"
              value={formValues.fullName}
              onChange={handleChange}
            />
            <ModifiedInput
              title="10-digit Mobile Number"
              className="basis-1/2 pr-4"
              name="mobileNumber"
              value={formValues.mobileNumber}
              onChange={handleChange}
              type="tel"
            />
            <ModifiedInput
              title="Pincode"
              className="basis-1/2 pr-4"
              name="pincode"
              value={formValues.pincode}
              onChange={handleChange}
              type="number"
            />
            <ModifiedInput
              title="Locality"
              className="basis-1/2 pr-4"
              name="locality"
              value={formValues.locality}
              onChange={handleChange}
            />
            <ModifiedInput
              title="Address (Area and Street)"
              className="basis-full"
              name="address"
              value={formValues.address}
              onChange={handleChange}
            />
            <ModifiedInput
              title="City/State/Town"
              className="basis-1/2 pr-4"
              name="cityStateTown"
              value={formValues.cityStateTown}
              onChange={handleChange}
            />
            <ModifiedSelect
              value={formValues.addressType}
              onChange={handleSelectChange}
            />
            <ModifiedInput
              title="Landmark (Optional)"
              className="basis-1/2 pr-4"
              name="landmark"
              value={formValues.landmark || ""}
              onChange={handleChange}
            />
            <span className="basis-full text-gray-500">Address Type</span>
            <div className="flex gap-6 basis-full">
              <div className="flex gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="address_type"
                  id="address_type_home"
                  checked={formValues.addressType === "home"}
                  value="home"
                  onChange={handleSelectChange}
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
                  checked={formValues.addressType === "work"}
                  value="work"
                  onChange={handleSelectChange}
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
