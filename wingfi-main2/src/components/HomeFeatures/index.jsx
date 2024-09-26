import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { GrRotateLeft } from "react-icons/gr";
import { RiSecurePaymentLine } from "react-icons/ri";
import { PiMedalLight } from "react-icons/pi";

export function HomeFeatures() {
  const list = [
    {
      id: 0,
      item: "Free Shipping",
      dec: "When ordering over ₹1000/-",
      icon: <PiShoppingCartSimpleLight size={54} className="text-error" />,
    },
    {
      id: 1,
      item: "Free Return",
      dec: "Get Return within 30 days",
      icon: <GrRotateLeft size={54} className="text-error" />,
    },
    {
      id: 2,
      item: "Secure Payment",
      dec: "100% Secure Online Payment",
      icon: <RiSecurePaymentLine size={54} className="text-error" />,
    },
    {
      id: 3,
      item: "Best Quality",
      dec: "Original Product Guarenteed",
      icon: <PiMedalLight size={54} className="text-error" />,
    },
  ];

  return (
    <div
      className="mt-12 mx-auto flex justify-between items-center"
      style={{
        width: "92%",
        maxWidth: 1200,
        height: "auto",
      }}
    >
      <ul className="flex gap-2 flex-wrap">
        {list?.map((item) => (
          <li
            key={item.id}
            className="flex gap-4 bg-white px-4 py-6 sm:py-8 border shadow"
            style={{
              flex: "1 0 24%",
            }}
          >
            {item.icon}
            <div className="flex flex-col">
              <span
                style={{
                  fontWeight: 700,
                }}
              >
                {item.item}
              </span>
              <span>{item.dec}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
