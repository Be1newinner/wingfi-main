import { Footer, NavBar } from "@/components";
import Image from "next/image";
import RegisterForm from "./components/RegisterForm";

export default function RegisterYourProduct({ params }) {
  const { slug } = params;

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="container flex-1 flex flex-col md:flex-row justify-center items-center py-16 md:gap-8">
        <Image
          className="hidden md:inline w-full max-w-xs max-h-xs lg:max-w-sm lg:max-h-sm"
          src={"/register-product.webp"}
          width={400}
          height={400}
          alt=""
          priority={true}
          placeholder="empty"
        />
        <RegisterForm slug={slug} />
      </main>
      <Footer />
    </div>
  );
}
