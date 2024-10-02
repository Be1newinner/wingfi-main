import Link from "next/link";
import {
  FaHeadphonesAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import BasicDetails from "@/constants/BasicDetails.json";

export function Footer() {
  return (
    <footer className="footer mt-3 p-4 sm:p-10  pt-12 bg-white text-base-content rounded flex flex-col">
      <div
        style={{
          maxWidth: 1200,
        }}
        className="mx-auto flex w-full justify-between md:flex-wrap gap-12 px-4 flex-col sm:flex-row"
      >
        {/* 1st Column */}
        <div className="flex flex-col gap-2 max-w-72">
          <span className="font-bold text-2xl">{BasicDetails.company}</span>
          <p>
            We help delivers quality securely. Let&apos;s Shop. We help delivers
            quality securely. Let&apos;s Shop. We help delivers.
          </p>

          <p>
            Developed with love by{" "}
            <a href="https://shipsar.in" className="hover:text-error">
              Shipsar Developers
            </a>
          </p>

          {/* Social Icons */}
          <div className="text-gray-200 flex gap-2 mt-2">
            {BasicDetails.support.facebook && (
              <Link
                href={BasicDetails.support.facebook}
                className="bg-gray-100 p-4 text-black rounded-lg duration-200 hover:bg-gray-200"
              >
                <FaFacebookF size={20} />
              </Link>
            )}
            {BasicDetails.support.linkedin && (
              <Link
                href={BasicDetails.support.linkedin}
                className="bg-gray-100 p-4 text-black rounded-lg duration-200 hover:bg-gray-200"
              >
                <FaLinkedinIn size={20} />
              </Link>
            )}
            {BasicDetails.support.twitter && (
              <Link
                href={BasicDetails.support.twitter}
                className="bg-gray-100 p-4 text-black rounded-lg duration-200 hover:bg-gray-200"
              >
                <FaTwitter size={20} />
              </Link>
            )}
            {BasicDetails.support.instagram && (
              <Link
                href={BasicDetails.support.instagram}
                className="bg-gray-100 p-4 text-black rounded-lg duration-200 hover:bg-gray-200"
              >
                <FaInstagram size={20} />
              </Link>
            )}
            {BasicDetails.support.whatsapp && (
              <Link
                href={BasicDetails.support.whatsapp}
                className="bg-gray-100 p-4 text-black rounded-lg duration-200 hover:bg-gray-200"
              >
                <FaWhatsapp size={20} />
              </Link>
            )}
          </div>
        </div>

        {/* 2nd Column */}
        <div>
          <h3 className="text-lg font-bold">My Account</h3>
          <ul
            className="flex flex-col gap-2 mt-2 pl-4 sm:pl-0"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="font-medium hover:font-semibold">
              <Link href="/shop">Shop</Link>
            </li>
            {/* <li className="font-medium hover:font-semibold">
              <Link href="/">Track Order</Link>
            </li> */}
            <li className="font-medium hover:font-semibold">
              <Link href="/orders-info">Orders History</Link>
            </li>
            <li className="font-medium hover:font-semibold">
              <Link href="/wishlist">Wish List</Link>
            </li>
            <li className="font-medium hover:font-semibold">
              <Link href="/cart">Cart</Link>
            </li>
            <li className="font-medium hover:font-semibold">
              <Link href="/checkout">Checkout</Link>
            </li>
            <li className="font-medium hover:font-semibold">
              <Link href="/register-your-product">Register Your Product</Link>
            </li>
          </ul>
        </div>

        {/* 3rd Column */}
        <div>
          <h3 className="text-lg font-bold">Informations</h3>
          <ul
            className="flex flex-col gap-2 mt-2 pl-4 sm:pl-0"
            style={{
              listStyleType: "disc",
            }}
          >
            <li className="font-medium hover:font-semibold">
              <Link href="/contact">About Us</Link>
            </li>
            <li className="font-medium hover:font-semibold">
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li className="font-medium hover:font-semibold">
              <Link href="/terms-conditions">Terms & Conditions</Link>
            </li>
            <li className="font-medium hover:font-semibold">
              <Link href="/return-policy">Return Policy</Link>
            </li>
            <li className="font-medium hover:font-semibold">
              <Link href="/shipping-policy">Shipping Policy</Link>
            </li>
          </ul>
        </div>

        {/* 4th Column */}
        <div className="flex flex-col gap-2 max-w-72">
          <h2 className="font-bold text-xl">Talk to Us</h2>
          <div className="flex gap-3">
            <FaHeadphonesAlt size={40} className="hidden sm:block" />
            <div>
              <p>Got Questions? Contact us 24/7</p>
              <p className="font-medium text-lg">
                <a href={`tel:+91${BasicDetails.Phone}`}>
                  +91 {BasicDetails.Phone}
                </a>
              </p>
            </div>
          </div>

          <p className="flex gap-2 items-center">
            <MdOutlineMailOutline size={24} />
            {BasicDetails.email}
          </p>

          <p className="flex gap-1 items-center">
            <FiMapPin size={40} />
            {BasicDetails.address}
          </p>
        </div>
      </div>
      <aside className="mx-auto">
        <p>Copyright © 2024 - All Rights Reserved by {BasicDetails.company}</p>
      </aside>
    </footer>
  );
}
