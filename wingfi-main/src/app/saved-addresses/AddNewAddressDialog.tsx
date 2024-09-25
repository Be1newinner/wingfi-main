"use client";

import { useRef, useState } from "react";
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

  const modalRef = useRef<HTMLDialogElement | null>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.close();
    }
  };

  return (
    <>
      <div className="flex gap-4 items-center py-4" onClick={openModal}>
        <input
          type="button"
          name="address-radio"
          className="btn btn-error text-white rounded-sm"
          value={"Add a New Address"}
        />
      </div>

      <dialog ref={modalRef} id="add_address_modal" className="modal">
        <div className="modal-box rounded-sm max-w-2xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>

            <p className="my-4">Add new Address</p>

            <AddAddressItem
              formValues={formValues}
              setFormValues={setFormValues}
              addNewAddressController={addNewAddressController}
              closeModal={() => closeModal()}
            />
          </form>
        </div>
      </dialog>
    </>
  );
}
