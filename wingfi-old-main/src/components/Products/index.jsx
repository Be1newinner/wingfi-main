import Image from "next/image";
import styles from "./styles.module.css";

export default function Products() {
  const ProductsData = [
    {
      img: "/pb/aJ-b.webp",
      title: "AJ Brown 20K Mah Power Bank",
      key: 1,
      desc: [
        "20,000 Mah Power Bank.",
        "Medium to Fast Charging.",
        "2 USB Output Port.",
        "Black & White Variants.",
      ],
    },
    {
      img: "/pb/bb-w.webp",
      title: "Double Beauty 30K Mah Power Bank",
      key: 2,
      desc: [
        "30,000 Mah Power Bank.",
        "Medium to Fast Charging.",
        "2 USB Output Port.",
        "White & Black Variants.",
      ],
    },
    {
      img: "/pb/d2-b.webp",
      title: "TLMP 20K Mah Power Bank",
      key: 3,
      desc: [
        "20,000 Mah Power Bank.",
        "Medium to Fast Charging.",
        "2 USB Output Port.",
        "Black, Red, Blue, Yellow, Green Variants.",
      ],
    },
    {
      img: "/pb/m5.webp",
      title: "TLMP 20K Mah Power Bank",
      key: 4,
      desc: [
        "20,000 Mah Power Bank.",
        "Medium to Fast Charging.",
        "2 USB Output Port.",
        "Black & White Variants.",
      ],
    },
    {
      img: "/pb/p2.webp",
      title: "TLMP 20K Mah Power Bank",
      key: 5,
      desc: [
        "20,000 Mah Power Bank.",
        "Medium to Fast Charging.",
        "2 USB Output Port.",
        "Black, Red, Blue, Yellow, Green Variants.",
      ],
    },
    {
      img: "/pb/pol-b.webp",
      title: "TLMP 20K Mah Power Bank",
      key: 1,
      desc: [
        "20,000 Mah Power Bank.",
        "Medium to Fast Charging.",
        "2 USB Output Port.",
        "Black & White Variants.",
      ],
    },
    {
      img: "/pb/solid.webp",
      title: "TLMP 20K Mah Power Bank",
      key: 2,
      desc: [
        "20,000 Mah Power Bank.",
        "Medium to Fast Charging.",
        "2 USB Output Port.",
        "RED, BLUE Variants.",
      ],
    },
    {
      img: "/pb/tlwp-b.webp",
      title: "TLMP 20K Mah Power Bank",
      key: 0,
      desc: [
        "20,000 Mah Power Bank.",
        "Medium to Fast Charging.",
        "2 USB Output Port.",
        "Black, White, Pink Variants.",
      ],
    },
  ];
  return (
    <div className="w-full flex menu items-center py-8 md:py-16" id="product">
      <div className="container flex flex-col gap-4 md:gap-16">
        <div className="text-center">
          <h1>Beautifully Crafted Power Banks</h1>
          <span>
            Beautiful and Affordable Power banks with 3 Months Warranty.
          </span>
        </div>
        <div
          className={[
            "flex flex-1 flex-wrap justify-center md:justify-start",
            styles.featureRight,
          ].join(" ")}
        >
          {ProductsData?.map((item, index) => (
            <div
              key={item?.key || index}
              style={{
                maxWidth: 346,
                borderColor: "rgba(0,0,0,0.2)",
                boxShadow: "0px 0px 4px 1px rgba(0,0,0,0.1)",
                borderWidth: 2,
                borderRadius: 10,
                backgroundColor: "rgba(0,0,0,0.05)",
              }}
              className="flex flex-col gap-1"
            >
              <Image
                src={item.img}
                width={400}
                height={225}
                alt="High Capacity Power Bank"
              />
              <div className="p-2">
                <h3 className="font-semibold text-lg md:text-xl">
                  {item?.title}
                </h3>
                <ul
                  className="ml-4"
                  style={{
                    listStyleType: "disc",
                  }}
                >
                  {item?.desc?.map((e, i) => (
                    <li key={i} className="text-sm md:text-base">
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
