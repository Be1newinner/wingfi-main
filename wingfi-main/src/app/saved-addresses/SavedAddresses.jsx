"use client";

import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/registry/context";
import { useEffect } from "react";
import { deleteAddresses, getAddresses } from "./SavedAddressController";
import AddNewAddressDialog from "./AddNewAddressDialog";

export default function SavedAddresses() {
  const User = useContext(AuthContext)?.state?.user || {};
  const [SavedAddress, setSavedAddress] = useState(null);
  const [defaultAddress, setDefaultAddress] = useState(null);

  useEffect(() => {
    (async function () {
      const data = await getAddresses(User);
      setSavedAddress(data);
    })();
  }, [User]);

  useEffect(() => {
    const def = localStorage.getItem("defaultAddress");

    if (def) {
      setDefaultAddress(def);
    }
  }, []);

  function changeDefaultAddres(key) {
    setDefaultAddress(key);
    localStorage.setItem("defaultAddress", key);
  }

  async function deleteDefaultAddres(key) {
    const res = await deleteAddresses(User, key);
    if (res.status == 200) {
      const data = [...SavedAddress.filter((e) => e.k != key)];
      setSavedAddress(data);
      localStorage.setItem("savedAddresses", JSON.stringify(data));
    } else {
      console.error("Error in deleting address => ", res.error);
    }
  }

  return (
    <>
      <p className="text-md font-semibold pb-0 sm:pb-4">
        Select from Saved Addresses
      </p>
      {SavedAddress?.map((item, index) => (
        <div
          key={item.k || index}
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
                <td className="pr-6">Address Type: </td>
                <td>
                  {item?.t === 0 ? "Home" : item?.t === 1 ? "Office" : "Other"}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex gap-2">
            <button
              className="btn btn-error text-white btn-sm rounded-sm"
              onClick={() => changeDefaultAddres(item.k)}
              disabled={defaultAddress == item.k ? true : false}
            >
              Mark default
            </button>
            <button
              className="btn btn-neutral btn-sm rounded-sm"
              onClick={() => deleteDefaultAddres(item.k)}
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
