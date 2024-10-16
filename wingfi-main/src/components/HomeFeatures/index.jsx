import { PiShoppingCartSimpleLight } from 'react-icons/pi';
import { GrRotateLeft } from 'react-icons/gr';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { PiMedalLight } from 'react-icons/pi';

export function HomeFeatures() {
  const list = [
    {
      id: 0,
      item: 'Free Shipping',
      dec: 'When ordering over ₹1000/-',
      icon: <PiShoppingCartSimpleLight size={54} className="text-error" />,
    },
    {
      id: 1,
      item: 'Free Return',
      dec: 'Get Return within 30 days',
      icon: <GrRotateLeft size={54} className="text-error" />,
    },
    {
      id: 2,
      item: 'Secure Payment',
      dec: '100% Secure Online Payment',
      icon: <RiSecurePaymentLine size={54} className="text-error" />,
    },
    {
      id: 3,
      item: 'Best Quality',
      dec: 'Original Product Guarenteed',
      icon: <PiMedalLight size={54} className="text-error" />,
    },
  ];

  return (
    <div className="w-full max-w-full lg:px-[100px] px-[20px]  py-[50px] h-auto">
      <ul className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 gap-2 flex-wrap">
        {list?.map((item) => (
          <li
            key={item.id}
            className="flex flex-col justify-center items-center bg-gray-200 p-5 rounded-lg"
          >
            <div>{item.icon}</div>

            <div className="text-center">
              <h4 className="text-lg font-bold">{item.item}</h4>
              <p className="text-gray-500 sm:text-[10px">{item.dec}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
