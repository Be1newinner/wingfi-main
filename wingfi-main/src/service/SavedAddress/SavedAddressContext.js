"use client";

import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { firebaseRealtime } from "../../infrastructure/firebase.config";

export const SavedAddressContext = createContext();

export const SavedAddressProvider = ({ children }) => {
  const [SavedAddress, setSavedAddress] = useState([]);

  useEffect(() => {
    const response = getAllAddresses({ uid: "rWT0jLggQ1NTUD1X1OCjdEl0YWa2" });
    console.log("saved address response 2 => ", response);
  }, []);

  async function getAllAddresses({ uid }) {
    let response = { error: null, data: [], status: 404 };

    if (!uid) {
      response.error = "No UID Passed!";
      response.status = 401;
      return response;
    }

    response.data = onValue(
      ref(firebaseRealtime, "/users/" + uid + "/sa"),
      (snapshot) => {
        return snapshot.val();
      },
      {
        onlyOnce: true,
      }
    );

    console.log("saved response", response);

    return response;
  }

  return (
    <SavedAddressContext.Provider
      value={{
        SavedAddress,
      }}
    >
      {children}
    </SavedAddressContext.Provider>
  );
};

export function SavedAddressContextProvider({ children }) {
  return <SavedAddressProvider>{children}</SavedAddressProvider>;
}
