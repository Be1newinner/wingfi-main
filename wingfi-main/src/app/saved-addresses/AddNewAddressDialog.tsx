"use client";

import { useState } from "react";
import { AddAddressItem } from "../checkout/components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { BasicAddressFields } from "@/redux/constants/address";
import { addNewAddressRequest } from "@/redux/reducers/address";
import { selectUserUID } from "@/redux/selectors/auth";

export function AddNewAddressDialog() {
  const dispatch = useDispatch();
  const UserUID = useSelector(selectUserUID);

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

  function addNewAddressController() {
    if (UserUID) {
      const keySelected = Date.now();
      dispatch(
        addNewAddressRequest({ ...formValues, key: keySelected, uid: UserUID })
      );
    }
  }

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box rounded-sm max-w-2xl">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>

          <span>Add new Address</span>

          <AddAddressItem
            formValues={formValues}
            setFormValues={setFormValues}
            addNewAddressController={addNewAddressController}
          />
        </form>
      </div>
    </dialog>
  );
}
