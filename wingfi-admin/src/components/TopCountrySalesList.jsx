import Image from "next/image";
import { selectCountry } from "../redux/selectors/country";
import React from "react";
import { useSelector } from "react-redux";

export default function TopCountrySalesList() {
  const country = useSelector(selectCountry);
  return (
    <div>
      {country.map((d, index) => (
        <div key={index} className="flex justify-between items-center">
          <div className="w-[50px] m-1">
            {d.image && (
              <Image src={d.image} alt="" height={1080} width={1080} />
            )}
          </div>
          <div className="w-[350px] font-bold">
            <h1>{d.name}</h1>
          </div>
          <div className="w-[300px] text-xl font-bold">{d.trend}</div>
          <div className="font-bold">
            <p>6,972</p>
          </div>
        </div>
      ))}
    </div>
  );
}
