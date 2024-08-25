"use client";

import { ChangeEvent, Dispatch } from "react";
import { ModifiedInput, ModifiedSelect } from "./index";
import { BasicAddressFields } from "@/redux/constants/address";

interface PropTypes {
  addressSelected: number | null;
  setAddressSelected: Dispatch<number>;
  addNewAddressController: () => void;
  setFormValues: Dispatch<any>;
  formValues: BasicAddressFields;
}

export const AddAddressItem = ({
  addressSelected,
  setAddressSelected,
  addNewAddressController,
  setFormValues,
  formValues,
}: PropTypes) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormValues((prev: BasicAddressFields) => ({
      ...prev,
      [name]: name.includes("phoneNumber") ? Number(value) : value,
    }));
  };

  const handleSelectChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setFormValues((prev: BasicAddressFields) => ({
      ...prev,
      type: value,
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
              name="name"
              value={formValues.name}
              onChange={handleChange}
            />
            <ModifiedInput
              title="10-digit Mobile Number"
              className="basis-1/2 pr-4"
              name="phoneNumber"
              value={formValues.phoneNumber.toString()}
              onChange={(e) => handleChange(e)}
              type="tel"
            />
            <ModifiedInput
              title="Pincode"
              className="basis-1/2 pr-4"
              name="pinCode"
              value={formValues.pinCode.toString()}
              onChange={handleChange}
              type="number"
            />
            <ModifiedInput
              title="House Number (Home, Area and Street)"
              className="basis-1/2 pr-4"
              name="houseNumber"
              value={formValues.houseNumber}
              onChange={handleChange}
            />
            <ModifiedInput
              title="Landmark"
              className="basis-full"
              name="landmark"
              value={formValues.landmark}
              onChange={handleChange}
            />
            <ModifiedInput
              title="City"
              className="basis-1/2 pr-4"
              name="city"
              value={formValues.city}
              onChange={handleChange}
            />
            <ModifiedSelect
              value={formValues.state}
              onChange={handleSelectChange}
            />
            <span className="basis-full text-gray-500">Address Type</span>
            <div className="flex gap-1 basis-full">
              <label
                className="cursor-pointer flex gap-2"
                htmlFor="address_type_home"
              >
                <input
                  type="radio"
                  name="address_type"
                  id="address_type_home"
                  checked={formValues.type === "home"}
                  value="home"
                  onChange={handleSelectChange}
                />
                Home <p className="text-xs">(All day delivery)</p>
              </label>
              <label
                className="cursor-pointer flex gap-1"
                htmlFor="address_type_work"
              >
                <input
                  type="radio"
                  name="address_type"
                  id="address_type_work"
                  checked={formValues.type === "work"}
                  value="work"
                  onChange={handleSelectChange}
                />
                Work <p className="text-xs">(Delivery between 10 AM to 5 PM)</p>
              </label>
              <label
                className="cursor-pointer flex gap-1"
                htmlFor="address_type_other"
              >
                <input
                  type="radio"
                  name="address_type"
                  id="address_type_other"
                  checked={formValues.type === "other"}
                  value="other"
                  onChange={handleSelectChange}
                />
                Other <p className="text-xs">(All Day Delivery)</p>
              </label>
            </div>
            <div className="flex gap-1">
              <button
                onClick={addNewAddressController}
                className="btn btn-error text-white text-xs font-bold px-12 py-4 rounded-none"
              >
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
