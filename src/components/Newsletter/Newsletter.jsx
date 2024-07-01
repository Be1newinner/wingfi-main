import Image from "next/image";
import { PiNewspaper } from "react-icons/pi";
import { IoMdMailUnread } from "react-icons/io";

export default function Newsletter() {
  return (
    <div
      className="bg-gray-200 rounded-sm px-4 my-24 flex justify-center items-center gap-0 lg:gap-16 shadow-md"
      style={{
        maxWidth: 1200,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <div className="p-8 sm:p-16 flex-1">
        <div className="flex gap-1 items-center text-error">
          <PiNewspaper size={22} />
          <h3 className="text-shadow font-semibold">News Letter</h3>
        </div>
        <h3 className="text-shadow font-bold text-xl sm:text-3xl mb-3">
          Products update Weekly
        </h3>
        <div className="flex flex-wrap gap-2">
          <label className="input input-bordered flex items-center gap-2 w-full sm:w-80 rounded-sm shadow ">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="#000"
              className=" w-4 h-4 opacity-70">
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg> */}
            &nbsp;
            <IoMdMailUnread />
            <input
              type="text"
              className="grow text-sm  py-4 outline-none"
              placeholder="Email"
            />
          </label>
          <button className="btn btn-error rounded-sm text-white font-medium px-12 shadow">
            Submit
          </button>
        </div>
      </div>

      <div className="flex-1 hidden md:flex">
        <Image
          src={"/images/newsletter.webp"}
          width={800}
          height={800}
          style={{
            transform: "scale(1.7)",
          }}
          alt=""
          className="max-w-40 lg:max-w-60 mx-auto"
        />
      </div>
    </div>
  );
}
