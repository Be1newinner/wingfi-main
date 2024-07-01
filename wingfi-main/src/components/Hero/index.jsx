import Image from "next/image";
import styles from "./styles.module.css";
import { Theme_colors } from "@/infrastructure/theme";
import bg from "@/../public/images/bg.jpg";

export default function HeroSection() {
  return (
    <div
      // className="bg-blue-200"
      style={{
        width: "100%",
        height: "auto",
        overflow: "hidden",
        backgroundColor: Theme_colors.secondary,
        color: "white",
        backgroundImage: `url(${bg.src})`,
        backgroundBlendMode: "multiply",
      }}
      className={styles.bg}
    >
      <div
        style={{
          maxWidth: 1200,
        }}
        className="py-16 px-4 sm:px-0 max-w-7xl mx-auto"
      >
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
          <Image
            src={"/hero/side-dots.webp"}
            width={34}
            height={200}
            alt=""
            style={{
              filter: "brightness(0.8)",
            }}
            className="hidden sm:flex"
          />

          <div className="flex gap-4 items-center justify-center">
            <div className="flex flex-col gap-4 items-center">
              <span className="text-5xl sm:text-7xl font-light text-justify">
                <span
                  style={{
                    letterSpacing: "0.27em",
                    wordSpacing: "-0.25em",
                  }}
                  className="tracking-widest"
                >
                  THE NEW
                </span>
                <br />
                <span className="tracking-widest">STANDARD</span>
              </span>

              <span className="text-2xl sm:text-4xl font-bold tracking-wider mr-4">
                <span className="text-error">C</span>rafted{" "}
                <span className="text-error">P</span>ower{" "}
                <span className="text-error">B</span>anks
              </span>

              <span
                style={{
                  lineHeight: 1,
                }}
                className="sm:text-2xl flex items-center"
              >
                STARTING FROM
                <span className="ml-3 font-semibold text-4xl">₹ 749/-</span>
              </span>

              <button
                style={{
                  padding: "0 60px",
                }}
                className="btn btn-error mt-2 btn-sm sm:btn-md rounded-sm text-white font-medium"
              >
                BUY NOW
              </button>
            </div>
          </div>

          <div className="hidden sm:flex">
            <Image
              src={"/hero/hero-img.webp"}
              width={546}
              height={700}
              alt="hero"
              style={{
                aspectRatio: 0.76,
              }}
              className="max-w-full sm:max-w-sm max-h-lg my-8 sm:my-0"
            />
          </div>
          <Image
            src={"/hero/side-dots.webp"}
            width={34}
            height={200}
            alt=""
            style={{
              filter: "brightness(0.8)",
            }}
            className="hidden sm:flex"
          />
        </div>
      </div>
    </div>
  );
}
