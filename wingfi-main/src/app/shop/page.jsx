import {  ShopProductsWrapper } from "@/components";
import Link from "next/link";

export default function Store() {
  return (
    <>
      <main
        className="pb-8"
        style={{
          backgroundColor: "#f9f9f8",
        }}
      >
        <div className="bg-[#f9f9f8]">
          <div
            style={{
              maxWidth: 1200,
              marginLeft: "auto",
              marginRight: "auto",
            }}
            className="py-0 sm:py-4"
          >
            <div className="text-sm breadcrumbs p-4">
              <ul>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>Shop</li>
              </ul>
            </div>

            <p className="text-xl sm:text-4xl ps-3 font-bold">
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
          className="bg-[#f9f9f8]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full p-5">
            <ShopProductsWrapper />
          </div>
        </div>
        {/* <Newsletter /> */}
      </main>
    </>
  );
}
