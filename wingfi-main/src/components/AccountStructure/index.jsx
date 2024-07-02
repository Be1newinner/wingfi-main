import { Footer, NavBar, AccountSidebar } from "@/registry/components";
import { ProtectedRoute } from "@/registry/context";
import Link from "next/link";
import { FaUserTie } from "react-icons/fa6";

export default function AccountStructure({
  children,
  pageName = "",
  state = 0,
  topButtonName = "",
  topButtonLink = "",
}) {
  return (
    <ProtectedRoute>
      <div
        style={{
          backgroundColor: "#f6f9fc",
        }}
      >
        <NavBar />
        <main
          className="p-2 mt-0 sm:mt-8 flex flex-col pb-0 sm:pb-20"
          style={{
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="flex mt-4 gap-6 flex-col sm:flex-row">
            <AccountSidebar state={state} />
            <div className="w-full rounded-sm flex flex-col gap-0 sm:gap-6">
              <div className="flex justify-between items-end">
                <span className="text-2xl font-semibold flex gap-2 items-start">
                  <FaUserTie size={26} className="text-error" />
                  {pageName}
                </span>

                {topButtonName && (
                  <Link
                    href={topButtonLink}
                    className="btn btn-error bg-red-200 border-none text-red-500 hover:text-white rounded-sm btn-wide hidden sm:flex"
                  >
                    {topButtonName}
                  </Link>
                )}
              </div>

              {children}
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ProtectedRoute>
  );
}
