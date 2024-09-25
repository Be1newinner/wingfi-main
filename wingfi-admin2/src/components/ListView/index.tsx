import { Product } from "@/constants/types";
import { AiOutlineEdit } from "react-icons/ai";

interface ListViewProps {
  Header: { title: string; id: number }[];
  Data: Product[];
}

export function ListView({ Header, Data }: ListViewProps) {
  return (
    <table className="overflow-x-scroll no-scrollbar py-4 w-full border-collapse">
      <thead>
        <tr className="font-bold flex justify-between bg-gray-50 h-10 rounded-xl items-center p-2 w-full  ">
          {Header?.map((item) => (
            <th key={item.id} className="h-16 flex items-center flex-1">
              {item.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Data?.map((item) => (
          <tr className="flex items-center justify-between flex-1 hover:bg-gray-200 duration-300 rounded-xl cursor-pointer border-b">
            <td className="font-bold h-16 flex items-center flex-1">
              {item.image && (
                <img src={item.image} alt="" className="max-h-10" />
              )}
            </td>
            <td className="h-16 flex items-center flex-1">
              <h1>{item.title}</h1>
            </td>
            <td className=" h-16 flex items-center flex-1">
              ₹ {item.price} /-
            </td>
            <td className=" h-16 flex items-center flex-1">₹ {item.mrp} /-</td>
            <td className=" h-16 flex items-center flex-1">{item.sku}</td>
            <td className=" h-16 flex items-center flex-1">{item.rating}</td>
            <td className=" h-16 flex items-center flex-1 justify-center">
              <AiOutlineEdit size={24} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
