// import Image from "next/image";
// import { PiNewspaper } from "react-icons/pi";
// import { IoMdMailUnread } from "react-icons/io";

// export function Newsletter() {
//   return (
//     <div
//       className="bg-gray-200 rounded-sm px-4 my-8 sm:my-24 flex justify-center items-center gap-0 lg:gap-16 shadow-md"
//       style={{
//         maxWidth: 1200,
//         marginLeft: "auto",
//         marginRight: "auto",
//       }}
//     >
//       <div className="p-8 sm:p-16 flex-1">
//         <div className="flex gap-1 items-center text-error">
//           <PiNewspaper size={22} />
//           <h3 className="text-shadow font-semibold">News Letter</h3>
//         </div>
//         <h3 className="text-shadow font-bold text-xl sm:text-3xl mb-3">
//           Products update Weekly
//         </h3>
//         <div className="flex flex-wrap gap-2">
//           <label className="input input-bordered flex items-center gap-2 w-full sm:w-80 rounded-sm shadow ">
//             {/* <svg
//               xmlns="http://www.w3.org/2000/svg"
//               viewBox="0 0 16 16"
//               fill="#000"
//               className=" w-4 h-4 opacity-70">
//               <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//               <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//             </svg> */}
//             &nbsp;
//             <IoMdMailUnread />
//             <input
//               type="text"
//               className="grow text-sm  py-4 outline-none"
//               placeholder="Email"
//             />
//           </label>
//           <button className="btn btn-error rounded-sm text-white font-medium px-12 shadow">
//             Submit
//           </button>
//         </div>
//       </div>

//       <div className="flex-1 hidden md:flex">
//         <Image
//           src={"/images/newsletter.webp"}
//           width={800}
//           height={800}
//           style={{
//             transform: "scale(1.7)",
//           }}
//           alt=""
//           className="max-w-40 lg:max-w-60 mx-auto"
//         />
//       </div>
//     </div>
//   );
// }

import { FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const socialLinks = [
  {
    icon: <FaLinkedinIn />,
    link: 'http://www.linkedin.com/feed',
  },
  {
    icon: <FaFacebookF />,
    link: 'http://www.facebook.com',
  },
  {
    icon: <FaInstagram />,
    link: 'http://www.instagram.com',
  },
  {
    icon: <FaTwitter />,
    link: 'http://www.twitter.com',
  },
];

export function Newsletter() {
  return (
    <div className="flex justify-center items-center bg-gray-400 py-[42px] xl:px-0 px-[20px]">
      <div className="container flex lg:justify-between justify-center lg:flex-row flex-col items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-[40px] font-[600] text-black">Newsletter</h2>
          <form action="" className="flex items-center gap-4">
            <div>
              <input
                type="text"
                placeholder="Enter your email"
                className="outline-none rounded-[50px] h-[58px] px-[18px] text-[18px] font-[600]"
              />
            </div>
            <button
              type="submit"
              className="rounded-[50px] h-[58px] px-[18px] text-[18px] font-[400] bg-red-500 text-white"
            >
              Submit
            </button>
          </form>
        </div>

        <div className="flex gap-4 mt-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center w-10 h-10 bg-white rounded-full transition-transform duration-300 hover:bg-red-500 hover:-translate-y-1"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
