"use client";
import { AuthContext } from "@/registry/context";
import { useContext } from "react";
import { PiSignOutLight } from "react-icons/pi";

export default function SignOut() {
  const { SignOutUser } = useContext(AuthContext);

  return (
    <div
      className={[
        "px-6 flex gap-1 items-center group cursor-pointer py-3",
      ].join(" ")}
      onClick={SignOutUser}
    >
      <PiSignOutLight size={24} className="group-hover:text-error" />
      <span className="group-hover:text-error">Sign Out</span>
    </div>
  );
}
