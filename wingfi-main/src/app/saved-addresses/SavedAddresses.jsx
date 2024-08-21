"use client";

import { useEffect } from "react";
import { AddNewAddressDialog } from "./AddNewAddressDialog";
import { useSelector } from "react-redux";
import {
  selectAddresses,
  selectDefaultAddress,
} from "@/redux/selectors/address";
import { selectUserUID } from "@/redux/selectors/auth";
import { useDispatch } from "react-redux";
import {
  changeDefaultAddress,
  fetchAddressesRequest,
  removeAddressRequest,
} from "@/redux/reducers/address";

export function SavedAddresses() {
  const UserUID = useSelector(selectUserUID);

  const SavedAddress = useSelector(selectAddresses);
  const defaultAddress = useSelector(selectDefaultAddress);
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      dispatch(fetchAddressesRequest(UserUID));
    })();
  }, [UserUID]);

  function changeDefaultAddres(key) {
    dispatch(changeDefaultAddress(key));
  }

  async function deleteDefaultAddres(key) {
    dispatch(removeAddressRequest(key));
  }

  return (
    <>
      <p className="text-md font-semibold pb-0 sm:pb-4">
        Select from Saved Addresses
      </p>
      {SavedAddress?.map((item, index) => (
        <div
          key={item.key || index}
          className="flex flex-col gap-4 justify-center py-4"
        >
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
                  {item?.name} , {item?.phoneNumber}
                </td>
              </tr>

              <tr>
                <td>Address:</td>
                <td>
                  {item?.houseNumber} , {item?.landmark}, {item?.city},{" "}
                  {item?.state}, {item?.pinCode}
                </td>
              </tr>
              <tr>
                <td className="pr-6">Address Type: </td>
                <td>
                  {item?.type === 0
                    ? "Home"
                    : item?.type === 1
                    ? "Office"
                    : "Other"}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-2">
            <button
              className="btn btn-error text-white btn-sm rounded-sm"
              onClick={() => changeDefaultAddres(item.key)}
              disabled={defaultAddress == item.key ? true : false}
            >
              Mark default
            </button>
            <button
              className="btn btn-neutral btn-sm rounded-sm"
              onClick={() => deleteDefaultAddres(item.key)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div
        className="flex gap-4 items-center py-4"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        <input
          type="button"
          name="address-radio"
          className="btn btn-error text-white rounded-sm"
          value={"Add a New Address"}
        />
      </div>

      <AddNewAddressDialog />
    </>
  );
}
