import {
    NavBar,
    Footer,
    Newsletter,
  } from "@/registry/components";
  import Link from "next/link";
  import ReviewContainer from "./ReviewContainer";
  
  export default function Checkout() {
    return (
      <div className="bg-gray-100">
        <NavBar />
  
        <main
          style={{
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <h2 className="text-2xl font-semibold mt-8">Checkout</h2>
          <div className="text-sm breadcrumbs pb-0">
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
  
          <div className="flex flex-wrap">
            <ReviewContainer />
          </div>
  
          <Newsletter />
        </main>
        <Footer />
      </div>
    );
  }
  