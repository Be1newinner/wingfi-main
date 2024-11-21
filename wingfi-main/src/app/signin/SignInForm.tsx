"use client";

import {
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
  MouseEventHandler,
} from "react";
import { redirect, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { loginRequest, loginRequestByGoogle } from "@/redux/reducers/auth";
import { useSelector } from "react-redux";
import { selectAuthErrors, selectUser } from "@/redux/selectors/auth";
import ContinueWithGoogleButton from "@/components/Buttons/GoogleButton";

export default function SignInForm() {
  const [emailIDInput, setEmailIDInput] = useState("");
  const [PasswordInput, setPasswordInput] = useState("");
  const [ErrorInputs, setErrorInputs] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const User = useSelector(selectUser);
  const AuthErrors = useSelector(selectAuthErrors);

  const searchParams = useSearchParams();

  const validations = (email: string, password: string): boolean => {
    const tempErrors = { email: "", password: "" };

    // Validations
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) tempErrors.email = "Please Input email ID!";
    else if (!emailRegEx.test(email))
      tempErrors.email = "Please Input valid email ID!";

    if (!password) tempErrors.password = "Please Input password!";
    else if (password.length < 6)
      tempErrors.password = "Email or Password is invalid!";

    if (tempErrors.email || tempErrors.password) {
      setErrorInputs(tempErrors);
      return false;
    } else return true;
  };

  const emailSignIn = async () => {
    if (validations(emailIDInput, PasswordInput)) {
      dispatch(
        loginRequest({
          email: emailIDInput,
          password: PasswordInput,
        })
      );
      setErrorInputs({ email: "", password: "" });
    }
  };

  useEffect(() => {
    const search = searchParams.get("next");
    if (User?.uid) redirect(search ? "/" + search : "/");
  }, [User?.uid, searchParams]);

  return (
    <>
      <span className="text-xl font-medium">Sign In to Wingfi India</span>
      {AuthErrors ? (
        <span className="font-medium text-error">{AuthErrors}</span>
      ) : null}
      <div className="flex flex-col gap-1">
        <label className="form-control w-full sm:w-96 mt-2">
          <input
            type="text"
            placeholder="email ID"
            className="input input-bordered text-xs rounded-sm"
            name="email"
            autoComplete="email"
            id="email"
            maxLength={25}
            value={emailIDInput}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmailIDInput(e.target.value)
            }
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
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPasswordInput(e.target.value)
            }
          />
          {ErrorInputs.password && (
            <div className="label">
              <span className="label-text-alt text-error">
                {ErrorInputs.password}
              </span>
            </div>
          )}
        </label>
        <button
          onClick={emailSignIn}
          className="btn btn-primary w-full rounded-sm"
        >
          Sign In
        </button>
      </div>
      <div className="text-xs mt-2">
        Don{`&apos;`}t have an Account?{" "}
        <Link href={"/signup"} className="text-blue-500 hover:text-blue-900">
          Sign Up
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
