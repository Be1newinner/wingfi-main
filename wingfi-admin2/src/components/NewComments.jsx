import React, { useState } from "react";
import NewCommentsList from "./NewCommentsList";

export default function NewComments() {
  const [view, setView] = useState(false);
  const handleViewAll = () => {
    setView(!view);
  };

  return (
    <>
      <div className="border-2 w-[97%] m-2 h-[500px] bg-white rounded-2xl shadow-xl p-4  overflow-hidden">
        <div className="flex justify-between items-center py-2">
          <h1 className="font-bold text-xl"> New Comments </h1>
          <p
            onClick={handleViewAll}
            className="text-xl items-center flex gap-2 font-bold cursor-pointer text-gray-400"
          >
            ...
            <div className="absolute w-24 -translate-x-[90%] mt-20 ">
              {view && (
                <div className="shadow-xl bg-white p-1 border-2 cursor-pointer">
                  <p className="text-sm font-bold hover:text-sky-500 text-gray-700 ">
                    {" "}
                    This Week{" "}
                  </p>
                  <p className="text-sm font-bold hover:text-sky-500 text-gray-700 ">
                    {" "}
                    last Week{" "}
                  </p>
                </div>
              )}
            </div>
          </p>
        </div>
      <div className=" overflow-y-scroll no-scrollbar h-[400px]">
        <NewCommentsList />
      </div>
      </div>
    </>
  );
}
