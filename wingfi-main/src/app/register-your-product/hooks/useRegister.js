// hooks/useRegister.js
"use client";

import { useState } from "react";
import { firestore } from "@/infrastructure/firebase.config";
import { doc, getDoc, setDoc } from "firebase/firestore";

const useRegister = () => {
  const [fullNameError, setFullNameError] = useState("");
  const [orderIDError, setOrderIDError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [otpError, setOtpError] = useState("");
  const [existingPhone, setExistingPhone] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const validateInputs = (fullName, orderID, phoneNumber, otpDigits) => {
    setFullNameError("");
    setOrderIDError("");
    setPhoneNumberError("");
    setOtpError("");

    let hasError = false;

    // Validate Full Name
    if (!fullName) {
      setFullNameError("Full name cannot be empty.");
      hasError = true;
    } else if (fullName.length < 3) {
      setFullNameError("At least 3 characters expected in full name.");
      hasError = true;
    } else if (fullName.length > 30) {
      setFullNameError("Maximum 30 characters expected in full name.");
      hasError = true;
    }

    // Validate Order ID
    if (!orderID) {
      setOrderIDError("Order ID cannot be empty.");
      hasError = true;
    } else if (!/^OD\d{18}$/.test(orderID)) {
      setOrderIDError("Invalid Order ID! Must start with 'OD' followed by 18 digits.");
      hasError = true;
    }

    // Validate Phone Number
    if (!phoneNumber) {
      setPhoneNumberError("Phone number cannot be empty.");
      hasError = true;
    } else if (!/^[6789]\d{9}$/.test(phoneNumber)) {
      setPhoneNumberError("Phone number must start with 6, 7, 8, or 9 and be 10 digits long.");
      hasError = true;
    } else if (existingPhone && existingPhone !== phoneNumber) {
      setPhoneNumberError(`Phone number already registered: ${existingPhone}. Cannot change.`);
      hasError = true;
    }

    // Validate OTP
    if (otpDigits.some((digit) => digit === "")) {
      setOtpError("OTP cannot be empty. Please fill all fields.");
      hasError = true;
    } else if (otpDigits.length !== 4) {
      setOtpError("OTP must be exactly 4 digits.");
      hasError = true;
    }

    return hasError;
  };

  const addOrderID = async (slug) => {
    setIsLoading(true);
    const docRef = doc(firestore, "reg", slug);
    const docSnap = await getDoc(docRef);
    setIsLoading(false);
    if (docSnap.exists()) {
      const data = docSnap.data();
      setExistingPhone(data.phoneNumber); // Assuming `phoneNumber` is a field in the document
      return { status: true, ...data };
    } else {
      return { status: false };
    }
  };// hooks/useRegister.js


  const registerUser = async (orderID, fullName, phoneNumber) => {
    const userRef = doc(firestore, "reg", orderID); // Assuming you want to update the same document
    await setDoc(userRef, {
      n: fullName,
      p: phoneNumber,
      c: new Date().toISOString(),
    }, { merge: true }); // Use merge to avoid overwriting existing data

  };

  return {
    fullNameError,
    orderIDError,
    phoneNumberError,
    otpError,
    existingPhone,
    isLoading,
    validateInputs,
    addOrderID,
    registerUser,
  };
};

export default useRegister;
