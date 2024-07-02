"use client";
import { AuthContext } from "@/registry/context";
import Link from "next/link";
import { useContext } from "react";
import { PiSignOutLight } from "react-icons/pi";

export default function SignOut({ styleType = 0 }) {
  const AuthContextData = useContext(AuthContext);

  const SignOutUser = AuthContextData?.signOutUser || function () {};
  const User = AuthContextData?.state?.user || {};

  return (
    <>
      {User?.uid ? (
        <div
          className={[
            "flex gap-1 items-center group cursor-pointer",
            styleType === 0 ? "p-3 px-6" : "",
          ].join(" ")}
          onClick={() => SignOutUser()}
        >
          <PiSignOutLight
            size={20}
            className={[
              "text-black",
              styleType === 0
                ? "group-hover:text-error"
                : "group-hover:text-white",
            ].join(" ")}
          />
          <span
            className={[
              "text-black",
              styleType === 0
                ? "group-hover:text-error"
                : "group-hover:text-white",
            ].join(" ")}
          >
            Sign Out
          </span>
        </div>
      ) : (
        <Link href={"/signin"}>
          <span>Sign In</span>
        </Link>
      )}
    </>
  );
}
