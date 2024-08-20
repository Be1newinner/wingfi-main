
import { BsBagCheck } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { PiMapPinLineLight } from "react-icons/pi";
import Link from "next/link";
import SignOut from "./SignOut";

export function AccountSidebar({ state = 0 }) {
  return (
    <div
      className="hidden sm:flex flex-col bg-white py-8 border shadow rounded-sm"
      style={{
        minWidth: 200,
        height: "min-content",
      }}
    >
      <p className="text-xs text-gray-500 px-6">DASHBOARD</p>
      <ul className="text-sm flex flex-col mt-4">
        <li>
          <Link
            href={"/orders-info"}
            className={[
              "px-6 flex gap-2 items-center group cursor-pointer py-3",
              state === 0 ? "bg-red-100 text-error" : "",
            ].join(" ")}
          >
            <BsBagCheck size={20} className="group-hover:text-error" />
            <span className="group-hover:text-error">Orders</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/wishlist"}
            className={[
              "px-6 flex gap-2 items-center group cursor-pointer py-3",
              state === 1 ? "bg-red-100 text-error" : "",
            ].join(" ")}
          >
            <IoIosHeartEmpty size={20} className="group-hover:text-error" />
            <span className="group-hover:text-error">Wishlist</span>
          </Link>
        </li>
      </ul>

      <p className="text-xs text-gray-500 mt-4 px-6">ACCOUNT SETTINGS</p>
      <ul className="text-sm flex flex-col mt-4">
        <li>
          <Link
            href={"/account"}
            className={[
              "px-6 flex gap-2 items-center group cursor-pointer py-3",
              state === 2 ? "bg-red-100 text-error" : "",
            ].join(" ")}
          >
            <AiOutlineUser size={20} className="group-hover:text-error" />
            <span className="group-hover:text-error">Profile Info</span>
          </Link>
        </li>
        <li>
          <Link
            href={"/saved-addresses"}
            className={[
              "px-6 flex gap-1 items-center group cursor-pointer py-3",
              state === 3 ? "bg-red-100 text-error" : "",
            ].join(" ")}
          >
            <PiMapPinLineLight size={24} className="group-hover:text-error" />
            <span className="group-hover:text-error">Addresses</span>
          </Link>
        </li>
      </ul>

      <SignOut />
    </div>
  );
}
