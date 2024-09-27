import React from "react";
import dataNewComments from "@/offline/NewCommentsList.json";
import Image from "next/image";

export default function NewCommentsList() {
  return (
    <div>
      {dataNewComments.map((d, index) => (
        <div key={index} className="flex gap-2 my-3">
          <div className="w-[50px] overflow-hidden rounded-full">
            {d.image && (
              <Image src={d.image} alt="" width={1080} height={1080} />
            )}
          </div>
          <div>
            <h1 className="text-xl font-bold"> {d.name} </h1>
            <span className="flex text-yellow-400">
              {d.ratings}
              {d.ratings}
              {d.ratings}
              {d.ratings}
              {d.ratings}
            </span>
            <p> {d.desc} </p>
          </div>
        </div>
      ))}
    </div>
  );
}
