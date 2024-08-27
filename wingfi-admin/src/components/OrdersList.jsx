import React from "react";
import product1 from "../assets/images/11 (1).png";
import product2 from "../assets/images/12.png";
import product3 from "../assets/images/13.png";
import product4 from "../assets/images/14.png";
import product5 from "../assets/images/15.png";

export default function OrdersList() {
  return (
    <div>
      {dataOrderList.map((d) => (
        <div className="my-4 flex w-[600px] hover:bg-gray-200 hover:rounded-lg hover:text-sky-400 duration-300 mx-5  items-center">
          <div className="flex gap-2 items-center w-[300px]">
            <div className="">
              <img src={d.image} alt="img" />
            </div>
            <div>
              <h3>{d.name}</h3>
            </div>
          </div>
          <div className="w-[150px] mr-14">
            <p>20 Nov 2024</p>
          </div>
          <div>
            <p>20 Nov 2024</p>
          </div>
        </div>
      ))}
    </div>
  );
}

const dataOrderList = [

  {
    image: product1,
    name: "Prodotti per il tuo cane...",
  },

  {
    image: product2,
    name: "Wholesome Pride...",
  },

  {
    image: product3,
    name: "Beneful Baked Delights...",
  },

  {
    image: product4,
    name: "Taste of the Wild...",
  },

  {
    image: product5,
    name: "Canagan - Britain's...",
  },
];
