import React from "react";
// import image1 from "../assets/images/Best1.png";
// import image2 from "../assets/images/Best2.png";
// import image3 from "../assets/images/Best3.png";
// import image4 from "../assets/images/Best4.png";
// import image5 from "../assets/images/best5.png";
// import image6 from "../assets/images/best6.png";
// import image7 from "../assets/images/best7.png";

export default function BestShopSellerList() {
  return (
    <div>
      {/* {dataBestShopSellerList.map((data) => ( */}
        <div className="flex justify-between my-2 w-[600px] items-center  ">
          <div className="flex gap-1 w-[190px]">
            <div className="w-[50px] rounded-full overflow-hidden">
              <img src={data.image} alt="" />
            </div>
            <div className="font-semibold">
              <h1 className="text-xl">{data.name}</h1>
              <p>{data.purchase} Purchases</p>
            </div>
          </div>
          <div className=" text-lg w-[150px]">
            <h1>{data.categories}</h1>
          </div>
          <div className="w-[100px]">
            <p>$ {data.total}</p>
          </div>
          <div className="w-[100px] bg-gray-200 rounded-full h-2.5">
            <div className="bg-blue-500 h-2.5 rounded-full w-[70%] "></div>
          </div>
          <div className="font-bold text-gray-400">100%</div>
        </div>
      {/* ))} */}
    </div>
  );
}

