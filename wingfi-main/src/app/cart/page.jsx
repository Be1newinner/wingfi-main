import { NavBar, Footer } from "@/registry/components";
// import Link from "next/link";
// import PricingContainer from "./PricingContainer";
import { MdSecurity } from "react-icons/md";
import PricingCart from "@/components/PricingCart";
import Link from "next/link";
import CartProduct from "@/components/CartProduct";
import { cartProductsData } from "@/service/Offline/CartProducts";

export default function Cart() {
  return (
    <div className="bg-gray-100">
      <NavBar />

      <main
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
        className="my-8"
      >
        <div className="flex w-full gap-4">
          <div className="bg-white basis-2/3 shadow">
            <p className="text-white font-semibold text-sm p-4 px-8 shadow-md bg-blue-500">
              CART ITEMS
            </p>
            {cartProductsData?.map((item) => {
              return (
                <CartProduct
                  key={item.sku}
                  sku={item.sku}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  mrp={item.mrp}
                  price={item.price}
                />
              );
            })}
            <div
              className="shadow-md flex justify-end items-center pr-2 py-4"
              style={{
                boxShadow: "0px -2px 5px rgba(0,0,0,0.2)",
              }}
            >
              <Link href={"/checkout"}>
                <button className="btn bg-blue-500 hover:bg-blue-600 rounded-none text-white px-16 shadow">
                  PLACE ORDER
                </button>
              </Link>
            </div>
          </div>
          <div className="basis-1/3">
            <div className="flex flex-col bg-white shadow items-between">
              <PricingCart />
            </div>
            <p className="flex gap-2 text-xs p-2 text-gray-500 font-medium mt-2">
              <MdSecurity size={24} />
              Safe and Secure Payments.Easy returns.100% Authentic products.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
