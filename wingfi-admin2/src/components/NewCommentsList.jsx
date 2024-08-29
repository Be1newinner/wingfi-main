import React from "react";
import dataNewComments from "../offline/NewCommentsList.json"

export default function NewCommentsList() {
  return (
    <div>
      {dataNewComments.map((d) => (
        <div className="flex gap-2 my-3">
          <div className="w-[50px] overflow-hidden rounded-full">
            <img src={d.image} alt="" />
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

