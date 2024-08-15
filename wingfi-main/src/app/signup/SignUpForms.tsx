"use client";

import { AuthContext } from "@/registry/context";
import { useState, useEffect, useContext } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";

export function SignUpForms() {
  const authContextData = useContext(AuthContext);

  const signUpWithEmail = authContextData?.signUpWithEmail || function () {};
  const User = authContextData?.state.user || {};
  const AuthErrors = authContextData?.state.authErrors || "";

  const [emailIDInput, setEmailIDInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");
  const [ConfirmPasswordInput, setConfirmPasswordInput] = useState("");
  const [FullNameInput, setFullNameInput] = useState("");
  const [PhoneInput, setPhoneInput] = useState("");
  const [ErrorInputs, setErrorInputs] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phone: "",
  });

  const validations = (
    email: string,
    password: string,
    confirmPassword: string,
    fullName: string,
    phone: string
  ): boolean => {
    const tempErrors = {
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      phone: "",
    };

    // Email validation
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) tempErrors.email = "Please input email ID!";
    else if (!emailRegEx.test(email))
      tempErrors.email = "Please input a valid email ID!";

    // Password validation
    if (!password) tempErrors.password = "Please input password!";
    else if (password.length < 6)
      tempErrors.password = "Password must be at least 6 characters long!";

    // Confirm Password validation
    if (!confirmPassword)
      tempErrors.confirmPassword = "Please confirm your password!";
    else if (confirmPassword !== password)
      tempErrors.confirmPassword = "Passwords do not match!";

    // Full Name validation
    if (!fullName) tempErrors.fullName = "Please input full name!";
    else if (fullName.trim().length < 2)
      tempErrors.fullName = "Please input valid name!";

    // Phone validation
    const phoneRegEx = /^[0-9]{10}$/;
    if (!phone) tempErrors.phone = "Please input phone number!";
    else if (!phoneRegEx.test(phone))
      tempErrors.phone = "Phone number must be exactly 10 digits!";

    // Set errors if any
    const hasErrors = Object.values(tempErrors).some((error) => error !== "");
    if (hasErrors) {
      setErrorInputs(tempErrors);
      return false;
    } else {
      setErrorInputs({
        email: "",
        password: "",
        confirmPassword: "",
        fullName: "",
        phone: "",
      });
      return true;
    }
  };

  const SignUpUser = async (event: any) => {
    event.preventDefault();

    if (
      validations(
        emailIDInput,
        PasswordInput,
        ConfirmPasswordInput,
        FullNameInput,
        PhoneInput
      )
    ) {
      await signUpWithEmail({
        email: emailIDInput,
        password: PasswordInput,
      });
      setErrorInputs({
        email: "",
        password: "",
        confirmPassword: "",
        fullName: "",
        phone: "",
      });
    }
  };

  useEffect(() => {
    // console.log("User => ", User.uid);
    if (User?.uid) redirect("/");
  }, [User]);

  return (
    <>
      <span className="text-xl font-medium">Sign Up to Wingfi India</span>
      {AuthErrors ? (
        <span className="font-medium text-error">{AuthErrors}</span>
      ) : null}
      <label className="form-control w-96  mt-2">
        <input
          type="text"
          placeholder="full name"
          className="input input-bordered text-xs rounded-sm"
          name="fullname"
          autoComplete="fullname"
          id="fullname"
          maxLength={20}
          value={FullNameInput}
          onChange={(e) => setFullNameInput(e.target.value)}
        />
        {ErrorInputs.fullName && (
          <div className="label">
            <span className="label-text-alt text-error">
              {ErrorInputs.fullName}
            </span>
          </div>
        )}
      </label>
      <label className="form-control w-96">
        <input
          type="text"
          placeholder="phone number"
          className="input input-bordered text-xs rounded-sm"
          name="phone"
          autoComplete="phone"
          id="phone"
          maxLength={10}
          value={PhoneInput}
          onChange={(e) => setPhoneInput(e.target.value)}
        />
        {ErrorInputs.phone && (
          <div className="label">
            <span className="label-text-alt text-error">
              {ErrorInputs.phone}
            </span>
          </div>
        )}
      </label>
      <label className="form-control w-96">
        <input
          type="text"
          placeholder="email ID"
          className="input input-bordered text-xs rounded-sm"
          name="email"
          autoComplete="email"
          id="email"
          maxLength={25}
          value={emailIDInput}
          onChange={(e) => setEmailIDInput(e.target.value)}
        />
        {ErrorInputs.email && (
          <div className="label">
            <span className="label-text-alt text-error">
              {ErrorInputs.email}
            </span>
          </div>
        )}
      </label>
      <label className="form-control max-w-96">
        <input
          type="password"
          placeholder="password"
          className="input input-bordered text-xs rounded-sm"
          name="password"
          autoComplete="password"
          id="password"
          value={PasswordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
        />
        {ErrorInputs.password && (
          <div className="label">
            <span className="label-text-alt text-error">
              {ErrorInputs.password}
            </span>
          </div>
        )}
      </label>
      <label className="form-control max-w-96">
        <input
          type="password"
          placeholder="confirm password"
          className="input input-bordered text-xs rounded-sm"
          name="confirm-password"
          autoComplete="confirm-password"
          id="confirm-password"
          value={ConfirmPasswordInput}
          onChange={(e) => setConfirmPasswordInput(e.target.value)}
        />
        {ErrorInputs.confirmPassword && (
          <div className="label">
            <span className="label-text-alt text-error">
              {ErrorInputs.confirmPassword}
            </span>
          </div>
        )}
      </label>
      <button
        className="btn btn-primary rounded max-w-96 rounded-sm"
        onClick={(event) => SignUpUser(event)}
      >
        Sign Up
      </button>
      <div className="text-xs mt-2">
        Already have an Account?{" "}
        <Link href={"/signin"} className="text-blue-500 hover:text-blue-900">
          Sign In
        </Link>
      </div>
      <div className="divider">or continue with</div>
      <div className="flex gap-4 max-w-96">
        <button className="btn flex flex-row flex-1 rounded-sm">
          <svg
            style={{
              width: 20,
            }}
            viewBox="0 0 24 24"
          >
            <path
              d="M12.0003 4.75C13.7703 4.75 15.3553 5.36002 16.6053 6.54998L20.0303 3.125C17.9502 1.19 15.2353 0 12.0003 0C7.31028 0 3.25527 2.69 1.28027 6.60998L5.27028 9.70498C6.21525 6.86002 8.87028 4.75 12.0003 4.75Z"
              fill="#EA4335"
            ></path>
            <path
              d="M23.49 12.275C23.49 11.49 23.415 10.73 23.3 10H12V14.51H18.47C18.18 15.99 17.34 17.25 16.08 18.1L19.945 21.1C22.2 19.01 23.49 15.92 23.49 12.275Z"
              fill="#4285F4"
            ></path>
            <path
              d="M5.26498 14.2949C5.02498 13.5699 4.88501 12.7999 4.88501 11.9999C4.88501 11.1999 5.01998 10.4299 5.26498 9.7049L1.275 6.60986C0.46 8.22986 0 10.0599 0 11.9999C0 13.9399 0.46 15.7699 1.28 17.3899L5.26498 14.2949Z"
              fill="#FBBC05"
            ></path>
            <path
              d="M12.0004 24.0001C15.2404 24.0001 17.9654 22.935 19.9454 21.095L16.0804 18.095C15.0054 18.82 13.6204 19.245 12.0004 19.245C8.8704 19.245 6.21537 17.135 5.2654 14.29L1.27539 17.385C3.25539 21.31 7.3104 24.0001 12.0004 24.0001Z"
              fill="#34A853"
            ></path>
          </svg>
          Google
        </button>
        <button className="btn flex flex-row flex-1 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            width="24px"
            height="24px"
            fill="#1577f2"
          >
            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z" />
          </svg>
          facebook
        </button>
      </div>
    </>
  );
}
