import React from "react";
import product1 from "../assets/images/po1.png";
import product2 from "../assets/images/po2.png";
import product3 from "../assets/images/8 (1).png";
import product4 from "../assets/images/9 (1).png";
import product5 from "../assets/images/10 (1).png";

export default function ProductOverivewList() {
  return (
    <div>
      {dataProductOverview.map((d) =>
        <div className="text-gray-400 flex items-center my-5 w-[800px]">
          <div className="flex items-center font-bold  gap-2 w-[350px] ">
            <div className="w-[50px] bg-gray-100  ">
              <img className="p-1" src={d.image} alt="" />
            </div>
            <div>
              <h1> {d.name} </h1>
            </div>
          </div>
          <div className="w-[100px]">
            <p> {d.productID} </p>
          </div>
          <div className="w-[100px]">
            <p> {d.price} </p>
          </div>
          <div className="w-[100px]">
            <p> 20 </p>
          </div>
          <div className="w-[100px]">
            <p> {d.sale} </p>
          </div>
          <div className="w-[100px]">
            <p> {d.revenue} </p>
          </div>
          <div className="w-[1]">
            <p> {d.status} </p>
          </div>
        </div>
      )}
    </div>
  );
}

const dataProductOverview = [
  {
    id: 1,
    image: product1,
    name: "Soft Fluffy Cats",
    productID: "#327",
    price: "$11.00",
    sale: "On Sale",
    revenue: "328.25",
    status: "Not Available",
  },

  {
    id: 1,
    image: product2,
    name: "Taste of the Wild Formula Finder",
    productID: "#380",
    price: "$8.99",
    sale: "On Sale",
    revenue: "105.55",
    status: "Not Available",
  },

  {
    id: 1,
    image: product3,
    name: "Wellness Natural Food",
    productID: "#126",
    price: "$5.22",
    sale: "--/--",
    revenue: "202.87",
    status: "Not Available",
  },

  {
    id: 1,
    image: product4,
    name: "Dog Food Rachael Ray",
    productID: "#582",
    price: "$11.00",
    sale: "On Sale",
    revenue: "328.25",
    status: "Available",
  },

  {
    id: 1,
    image: product5,
    name: "Best Buddy Bits Dog Treats",
    productID: "#293",
    price: "$6.48",
    sale: "On Sale",
    revenue: "219.78",
    status: "Not Available",
  },
];
