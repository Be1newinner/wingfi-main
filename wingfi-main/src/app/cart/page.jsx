import { NavBar, Footer } from "@/registry/components";
import Link from "next/link";
import PricingContainer from "./PricingContainer";
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
        <h2 className="text-2xl font-semibold ml-2 sm:ml-0">Shopping Cart</h2>
        <div className="text-sm breadcrumbs pb-0 ml-2 sm:ml-0">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
        <div className="divider" />

        <PricingContainer />
      </main>
      <Footer />
    </div>
  );
}
