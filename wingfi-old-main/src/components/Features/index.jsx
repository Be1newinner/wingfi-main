import Image from "next/image";
import styles from "./styles.module.css";
import { featureData } from "@/services/offlineData";

export default function Features() {
  return (
    <div
      className="container w-full flex menu items-center w-11/12"
      id="feature"
    >
      <div className="flex flex-col md:flex-row pt-20 gap-8 md:gap-16">
        <Image
          src={"/bigb.webp"}
          alt="bigb power bank"
          className="w-11/12 h-11/12 mx-auto md:mx-0 rounded-lg"
          width={390}
          height={520}
          style={{
            boxShadow: "0px 0px 8px 2px rgba(0,0,0,0.4)",
            maxWidth: 390,
            maxHeight: 520,
          }}
        />
        <div
          className={[
            "flex flex-1 flex-wrap w-11/12 mx-auto",
            styles.featureRight,
          ].join(" ")}
        >
          {featureData?.map((item, index) => (
            <div key={item?.key || index} className="flex flex-col gap-1">
              <Image
                src={"/" + item.img}
                width={100}
                height={50}
                alt="High Capacity Power Bank"
              />
              <h3 className="text-secondary font-semibold text-2xl">
                {item?.title}
              </h3>
              <span>{item?.desc}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
