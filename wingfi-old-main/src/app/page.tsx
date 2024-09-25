import Features from "@/components/Features";
import Products from "@/components/Products";
import ContactUS from "@/components/ContactUS";
import Header from "@/components/Header";
import Image from "next/image";
import styles from "./app.module.css";

export default function Home() {
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
      {/* Top Nav Bar */}

      <Header />

      {/* Hero Section */}
      <div id="home">
        <div className="w-full flex flex-col menu items-center bg-primary">
          <div className="container flex pt-12 pb-8 md:pt-24 md:pb-16 ">
            <div className="w-64 flex flex-1 flex-col gap-4 mx-4 md:mr-40 md:ml-0 justify-center">
              <h1 className="text-3xl text-white font-bold">
                Power Up Your Moments <br /> with
                <span className="text-secondary font-light">
                  Wingfi Power Banks!
                </span>
              </h1>
              <span className="text-white text-sm">
                At <span className="text-secondary">Wingfi</span>, we redefine
                charging experiences with our cutting-edge power banks
                meticulously crafted for your on-the-go lifestyle. Discover the
                freedom of limitless power, ensuring your devices stay charged,
                allowing you to capture, connect, and conquer every moment.
              </span>
              <div>
                <button
                  className="bg-secondary py-2 px-8 hover:border-solid hover:border-2 border-secondary"
                  style={{ color: "white" }}
                >
                  CONTACT US
                </button>
              </div>
            </div>
            <div className="justify-right hidden md:flex">
              <Image
                src="/pb/bb-w.webp"
                className="ml-auto"
                width={400}
                height={400}
                alt="Power Bank"
              />
            </div>
          </div>
        </div>
        <div className={styles.heroDivider}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            />
          </svg>
        </div>
      </div>
      <Features />
      <Products />
      <ContactUS />
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
