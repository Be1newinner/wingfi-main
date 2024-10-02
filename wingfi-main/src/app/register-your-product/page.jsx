"use client";
import { Footer, NavBar } from "@/components";
import { firestore } from "@/infrastructure/firebase.config";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function RegisterYourProduct({ params }) {
  const [fullName, setFullName] = useState("");
  const [orderID, setOrderID] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [, setIsVerified] = useState(false);
  const [, setIsSubmitted] = useState(false);
  const [, setIsLoading] = useState(false);
  const [otpDigits, setOtpDigits] = useState(Array(4).fill(""));

  // Separate error states for each input field
  const [fullNameError, setFullNameError] = useState("");
  const [orderIDError, setOrderIDError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [otpError, setOtpError] = useState("");

  // Handle OTP digit changes
  const handleOtpChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const newOtpDigits = [...otpDigits];
      newOtpDigits[index] = value;
      setOtpDigits(newOtpDigits);

      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otpDigits[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const { slug } = params;

  const submit = async () => {
    // Reset all error messages
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
      setOrderIDError(
        "Invalid Order ID! Must start with 'OD' followed by 18 digits."
      );
      hasError = true;
    }

    // Validate Phone Number
    if (!phoneNumber) {
      setPhoneNumberError("Phone number cannot be empty.");
      hasError = true;
    } else if (!/^[6789]\d{9}$/.test(phoneNumber)) {
      setPhoneNumberError(
        "Phone number must start with 6, 7, 8, or 9 and be 10 digits long."
      );
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

    // If there are validation errors, exit the function
    if (hasError) return;

    const response = await getVerificationByID({ slug: orderID, setIsLoading });
    if (response?.status) setIsVerified(true);
    setIsSubmitted(true);
  };

  async function getVerificationByID({ slug, setIsLoading }) {
    setIsLoading(true);
    const docRef = doc(firestore, "ser58ls", slug);
    const docSnap = await getDoc(docRef);
    setIsLoading(false);
    if (docSnap.exists()) {
      return {
        status: true,
        data: docSnap.data(),
      };
    } else {
      return {
        status: false,
        data: null,
      };
    }
  }

  useEffect(() => {
    if (slug) setOrderID(slug[0]);
  }, [slug]);

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="container flex-1 flex flex-col md:flex-row justify-center items-center py-16 md:gap-8">
        <Image
          src={"/register-product.webp"}
          width={800}
          height={800}
          alt=""
          style={{
            maxWidth: 400,
            maxHeight: 400,
            width: "100%",
          }}
        />
        <div className="flex-1 md:flex-none flex flex-col justify-center items-center gap-2 md:gap-4">
          <h2 className="font-bold text-center text-xl">
            Register Your Product
          </h2>
          <label className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className={[
                "input input-bordered w-full max-w-xs",
                fullNameError ? "input-error" : "",
              ].join(" ")}
            />
            {fullNameError && (
              <div className="label">
                <span className="label-text-alt text-red-500">
                  {fullNameError}
                </span>
              </div>
            )}
          </label>

          <label className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Order ID (e.g., OD123456789012345678)"
              value={orderID}
              onChange={(e) => setOrderID(e.target.value)}
              className={[
                "input input-bordered w-full max-w-xs",
                orderIDError ? "input-error" : "",
              ].join(" ")}
            />
            {orderIDError && (
              <div className="label">
                <span className="label-text-alt text-red-500">
                  {orderIDError}
                </span>
              </div>
            )}
          </label>

          <label className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className={[
                "input input-bordered w-full max-w-xs",
                phoneNumberError ? "input-error" : "",
              ].join(" ")}
            />
            {phoneNumberError && (
              <div className="label">
                <span className="label-text-alt text-red-500">
                  {phoneNumberError}
                </span>
              </div>
            )}
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="flex justify-between">
              {otpDigits.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-input-${index}`}
                  type="text"
                  maxLength={1}
                  placeholder="0"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={[
                    "input input-bordered w-12 text-center",
                    otpError ? "input-error" : "",
                  ].join(" ")}
                />
              ))}
            </div>
            {otpError && (
              <div className="label">
                <span className="label-text-alt text-red-500">{otpError}</span>
              </div>
            )}
          </label>

          <button
            style={{
              maxWidth: 320,
            }}
            className="btn btn-neutral w-full"
            onClick={submit}
          >
            Register
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
