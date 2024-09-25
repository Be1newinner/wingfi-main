import Header from "@/components/Header";
import Image from "next/image";
import Forms from "./Forms";

export default function RegisterProduct() {
  return (
    <div
      style={{
        maxWidth: "100vw",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
      }}
    >
      <Header />

      <main>
        <div className="container flex justify-between mb-8 pt-4 pb-8 px-2 md:px-0 flex-wrap">
          <Forms />
          <div className="hidden md:flex w-96 h-96 lg:w-full lg:h-auto max-w-lg aspect-square">
            <Image
              src={"/check-product.webp"}
              width={800}
              height={800}
              alt=""
              style={{
                aspectRatio: 1,
                maxWidth: 576,
                maxHeight: 576,
              }}
            />
          </div>
        </div>
      </main>

      <div
        style={{
          padding: 5,
        }}
      >
        <p
          style={{
            fontSize: 13,
            textAlign: "center",
          }}
        >
          Copyright 2023 @ wingfi.in . Website Designed by{" "}
          <a href="https://www.shipsar.in">Shipsar Developers.</a>
        </p>
      </div>
    </div>
  );
}
