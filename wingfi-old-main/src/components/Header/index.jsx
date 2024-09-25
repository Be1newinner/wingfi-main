import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import NavBar from "@/components/NavBar";

export default function Header() {
  return (
    <>
      <div
        style={{
          position: "fixed",
          zIndex: 99,
          maxWidth: "100vw",
        }}
        className="w-full bg-primary h-12 menu items-center md:flex px-2 hidden"
      >
        <div className="container flex gap-8 justify-between">
          <div className="flex items-center gap-2">
            <IoCall className="dark-icon" />
            <a href="tel:+918130506284">
              <span className="text-sm text-white">+91 9717 099 259</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MdEmail className="dark-icon" />
            <a href="mailto:care@wingfiindia.com">
              <span className="text-sm text-white">care@wingfiindia.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="dark-icon" />
            <span className="text-sm text-white ">
              Plot 112, Besides Bata Showroom, deoli, ND-62{" "}
            </span>
          </div>
        </div>
      </div>

      {/* Menu Bar */}
      <NavBar />

      <div
        className="bg-gray-300"
        style={{
          height: 1,
        }}
      ></div>
    </>
  );
}
