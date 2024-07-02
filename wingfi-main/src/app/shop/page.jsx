import { NavBar, Footer, Newsletter } from "@/registry/components";
import { ShopProductsWrapper } from "@/registry/contextWrappers";
import Link from "next/link";

export default function Store() {
  return (
    <>
      <NavBar />
      <main
        className="pb-8"
        style={{
          backgroundColor: "#f6f9fc",
        }}
      >
        <div className="bg-slate-200">
          <div
            style={{
              maxWidth: 1200,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="py-0 sm:py-8"
          >
            <div className="text-sm breadcrumbs p-4">
              <ul>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>Shop</li>
              </ul>
            </div>

            <p className="text-xl sm:text-3xl pb-4 ps-3 font-semibold">
              Explore All Products
            </p>
          </div>
        </div>

        <div
          style={{
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 12,
          }}
        >
          {/* Filter and Sorting */}
          {/* <div className="flex px-4 gap-2 items-center justify-end">
            <select
              className="select select-bordered max-w-sm"
              defaultValue={0}
            >
              <option value={0}>Sort by Latest</option>
              <option value={1}>Sort by Popularity</option>
              <option value={2}>Sort by Name</option>
              <option value={3}>Sort by Price</option>
            </select>
          </div> */}

          <div className="m-3 flex flex-wrap">
            <ShopProductsWrapper />
          </div>
        </div>
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
