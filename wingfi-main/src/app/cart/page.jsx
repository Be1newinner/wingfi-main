import { NavBar, Footer } from "@/components";
import CartComponent from "./CartComponent";

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
        className="sm:my-8"
      >
        <CartComponent />
      </main>
      <Footer />
    </div>
  );
}
