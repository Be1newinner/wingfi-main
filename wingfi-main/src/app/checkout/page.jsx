import { NavBar, Footer, Newsletter } from "@/registry/components";
import Link from "next/link";
import CheckoutContainer from "./CheckoutContainer";
import { AuthProvider } from "@/registry/context";

export default function Checkout() {
  return (
    <AuthProvider>
      <div className="bg-gray-100">
        <NavBar />

        <main
          style={{
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2 className="text-2xl font-semibold mt-8 ml-2 sm:ml-0">Checkout</h2>
          <div className="text-sm breadcrumbs pb-0 ml-2 sm:ml-0">
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/cart">Cart</Link>
              </li>
              <li>Checkout</li>
            </ul>
          </div>
          <div className="divider" />

          <CheckoutContainer />

          <Newsletter />
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}
