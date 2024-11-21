"use client";

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectAuthErrors, selectUser } from "@/redux/selectors/auth";
import { loginRequestByGoogle, signupRequest } from "@/redux/reducers/auth";
import ContinueWithGoogleButton from "@/components/Buttons/GoogleButton";

export function SignUpForms() {
  const dispatch = useDispatch();
  const User = useSelector(selectUser);
  const AuthErrors = useSelector(selectAuthErrors);

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

  const SignUpUser = async () => {
    if (
      validations(
        emailIDInput,
        PasswordInput,
        ConfirmPasswordInput,
        FullNameInput,
        PhoneInput
      )
    ) {
      dispatch(
        signupRequest({
          email: emailIDInput,
          password: PasswordInput,
        })
      );
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
      <label className="form-control w-96 mt-2">
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
        className="btn btn-primary  max-w-96 rounded-sm"
        onClick={SignUpUser}
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
      <ContinueWithGoogleButton
        onClick={() => dispatch(loginRequestByGoogle())}
        text="Continue with Google"
      />
    </>
  );
}
