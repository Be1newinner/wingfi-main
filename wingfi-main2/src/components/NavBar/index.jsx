import MenuItems from "@/service/Offline/Menu";
import Link from "next/link";
import CartIcons from "./CartIcons";
import SignOut from "../AccountSidebar/SignOut";

export function NavBar() {
  return (
    <header
      className="navbar bg-base-100 shadow-md "
      style={{
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <div
        className="flex justify-between flex-1 mx-auto"
        style={{
          maxWidth: 1200,
        }}
      >
        <div className="flex flex-1">
          <div className="flex sm:hidden">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>

              {/* Phone Menu Navbar */}
              <ul
                tabIndex={0}
                className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {MenuItems?.filter((e) => e.phoneOnly !== 2)?.map((item) => (
                  <li key={item.id}>
                    {item.path ? (
                      <Link href={item.path}>{item.title}</Link>
                    ) : (
                      <>
                        <SignOut styleType={1} />
                      </>
                    )}
                    <ul>
                      {item?.sub?.map((item) => (
                        <li key={item.id}>
                          <Link href={item.path}>{item.title}</Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <Link
            className="text-xl sm:text-3xl font-semibold flex flex-1 sm:flex-none items-center"
            href={"/"}
          >
            <span className="mx-auto">Wingfi India</span>
          </Link>
          <div className="navbar-center hidden sm:flex flex-1 justify-center">
            <ul className="menu menu-horizontal px-1">
              {MenuItems?.filter((e) => e.phoneOnly !== 1)?.map((item) => (
                <li key={item.id}>
                  <Link href={item.path} className="font-bold">
                    {item?.icon}
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex mr-1">
          {/* <button className="btn btn-ghost btn-circle btn-sm sm:btn-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button> */}

          <CartIcons />
        </div>
      </div>
    </header>
  );
}
