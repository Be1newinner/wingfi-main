"use client";

import { useEffect, useState } from "react";
import FormField from "./FormField";
// import OTPInput from "./OTPInput";
import useRegister from "../hooks/useRegister";
import VerifyNumberButton from "../../../components/VerifyNumberButton";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [orderID, setOrderID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [
    otpDigits,
    // setOtpDigits
  ] = useState(Array(4).fill("1"));
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState(""); // Feedback message state

  const {
    fullNameError,
    orderIDError,
    phoneNumberError,
    // otpError,
    validateInputs,
    addOrderID,
    registerUser,
  } = useRegister();

  useEffect(() => {
    if (
      typeof document.getElementById(`otp-input-0`) != "undefined" &&
      document.getElementById(`otp-input-0`) != null
    ) {
      document.getElementById(`otp-input-0`).focus();
    }
  }, []);

  // const handleOtpChange = (index, value) => {
  //   if (/^\d?$/.test(value)) {
  //     const newOtpDigits = [...otpDigits];
  //     newOtpDigits[index] = value;
  //     setOtpDigits(newOtpDigits);

  //     if (value && index < 3) {
  //       document.getElementById(`otp-input-${index + 1}`).focus();
  //     }
  //   }
  // };

  // const handleKeyDown = (index, event) => {
  //   if (event.key === "Backspace" && !otpDigits[index] && index > 0) {
  //     document.getElementById(`otp-input-${index - 1}`).focus();
  //   }
  // };

  const submit = async () => {
    const hasError = validateInputs(fullName, orderID, phoneNumber, otpDigits);
    if (hasError) return;

    setIsSubmitting(true); // Start loading
    setFeedbackMessage(""); // Reset feedback message

    const orderExists = await addOrderID(orderID);
    // console.log("Previous Orderd Data => ", orderExists);
    if (orderExists.status) {
      console.log("Previous Orderd Data => ", orderExists);
      if (orderExists.p) {
        setFeedbackMessage("Order already registered!"); // Already message
        setIsSubmitting(false); // End loading
        return null;
      }

      try {
        await registerUser(orderID, fullName, phoneNumber, orderExists);

        setFeedbackMessage("Registration successful!"); // Success message
      } catch (error) {
        console.error(error);
        setFeedbackMessage("Failed to register. Please try again."); // Failure message
      }
    } else {
      setFeedbackMessage("Order ID does not exist!."); // Order ID not found
    }

    setIsSubmitting(false); // End loading
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 md:gap-4">
      <h2 className="font-bold text-center text-xl">Register Your Product</h2>
      <FormField
        label="Full Name"
        type="text"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        error={fullNameError}
      />
      <FormField
        label="Order ID (e.g., OD123456789012345678)"
        type="text"
        value={orderID}
        onChange={(e) => setOrderID(e.target.value)}
        error={orderIDError}
      />
      <FormField
        label="Phone Number"
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        error={phoneNumberError}
      />
      {/* <OTPInput
        otpDigits={otpDigits}
        handleOtpChange={handleOtpChange}
        handleKeyDown={handleKeyDown}
        error={otpError}
      /> */}
      <button
        style={{ maxWidth: 320 }}
        className="btn btn-neutral w-full"
        onClick={submit}
        disabled={isSubmitting} // Disable button when submitting
      >
        {isSubmitting ? "Registering..." : "Register"}
      </button>
      <VerifyNumberButton />
      {feedbackMessage && (
        <div className="mt-4 text-center text-lg">
          <span
            className={
              feedbackMessage.includes("successful")
                ? "text-green-500"
                : "text-red-500"
            }
          >
            {feedbackMessage}
          </span>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
