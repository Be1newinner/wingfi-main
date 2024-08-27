"use client";

import { ChangeEvent, Dispatch, useState } from "react";
import { ModifiedInput, ModifiedSelect } from "./index";
import { BasicAddressFields } from "@/redux/constants/address";

interface PropTypes {
  addNewAddressController: () => void;
  setFormValues: Dispatch<any>;
  formValues: BasicAddressFields;
}

export const AddAddressItem = ({
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

  const [Errors, setErrors] = useState({
    houseNumber: "dasda",
    name: "dsada",
    phoneNumber: "dasdasd",
    pinCode: "dasdasdasd",
    landmark: "dasdasdas",
    city: "dasdasd",
    state: "dasdsad",
    type: "dasdasd",
  });

  const onSubmit = async (e: any) => {
    e.preventDefault();

    const newErrors = {
      houseNumber: "",
      name: "",
      phoneNumber: "",
      pinCode: "",
      landmark: "",
      city: "",
      state: "",
      type: "",
    };

    const emptyErorrs = { ...newErrors };

    if (!formValues.name) {
      newErrors.name = "please provide a name!";
    }

    if (formValues.phoneNumber) {
      if (formValues.phoneNumber.toString().length != 10) {
        newErrors.phoneNumber =
          "please provide a valid 10 Digit Contact Number!";
      }
    } else {
      newErrors.phoneNumber = "please provide a Contact Number!";
    }

    if (!formValues.houseNumber) {
      newErrors.houseNumber = "please provide a Home/Flat/Office number!";
    }
    if (!formValues.landmark) {
      newErrors.landmark = "please provide a Landmark or Area!";
    }
    if (!formValues.city) {
      newErrors.city = "please provide a City Name!";
    }
    if (!formValues.state) {
      newErrors.state = "please provide a State Name!";
    }
    if (!formValues.pinCode) {
      if (formValues.pinCode.toString().length != 6) {
        newErrors.pinCode = "please provide a Valid Pin Code!";
      } else {
        newErrors.pinCode = "please provide a Pin Code!";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors(emptyErorrs);
      addNewAddressController();
    }
  };

  return (
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
      <ModifiedSelect value={formValues.state} onChange={handleSelectChange} />
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
          onClick={onSubmit}
          className="btn btn-error text-white text-xs font-bold px-12 py-4 rounded-none"
        >
          SAVE AND DELIVER HERE
        </button>
        <button className="btn btn-outline btn-error rounded-none px-12 py-4">
          CANCEL
        </button>
      </div>
    </div>
  );
};
