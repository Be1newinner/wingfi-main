"use client";
import { logoutRequest } from "@/redux/reducers/auth";
import { selectUserUID } from "@/redux/selectors/auth";
import Link from "next/link";
import { PiSignOutLight } from "react-icons/pi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function SignOut({ styleType = 0 }) {
  const UserUID = useSelector(selectUserUID);
  const dispatch = useDispatch();

  return UserUID ? (
    <div
      className={[
        "flex gap-1 items-center group cursor-pointer",
        styleType === 0 ? "p-3 px-6" : "",
      ].join(" ")}
      onClick={() => dispatch(logoutRequest())}
    >
      <PiSignOutLight
        size={20}
        className={[
          "text-black",
          styleType === 0 ? "group-hover:text-error" : "group-hover:text-white",
        ].join(" ")}
      />
      <span
        className={[
          "text-black",
          styleType === 0 ? "group-hover:text-error" : "group-hover:text-white",
        ].join(" ")}
      >
        Sign Out
      </span>
    </div>
  ) : (
    <Link href={"/signin"}>
      <span>Sign In</span>
    </Link>
  );
}
