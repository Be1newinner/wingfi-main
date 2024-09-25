"use client";

import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { IoMdClose } from "react-icons/io";

export default function NavBar() {
  let [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    {
      title: "HOME",
      link: "/#home",
      key: 0,
    },
    {
      title: "FEATURES",
      link: "/#feature",
      key: 1,
    },
    {
      title: "PPRODUCTS",
      link: "/#product",
      key: 2,
    },
    {
      title: "CONTACT US",
      link: "/#contact",
      key: 3,
    },
    {
      title: "REGISTER PRODUCT",
      link: "/register-your-product",
      key: 4,
    },
  ];

  return (
    <div
      className="md:pt-12 md:h-28 bg-white flex menu items-center"
      style={{
        width: "100vw",
      }}
    >
      <div className="container flex items-center justify-between pe-4">
        <Link href={"/"}>
          <Image
            src={"/wingfi.png"}
            style={{
              padding: 10,
            }}
            width={100}
            height={200}
            alt="Logo"
          />
        </Link>

        <ul className={[styles.menu, "gap-4 hidden md:flex"].join(" ")}>
          {menuItems?.map((items) => {
            return (
              <li key={items.key}>
                <Link href={items.link}>{items.title}</Link>
              </li>
            );
          })}
        </ul>

        <AiOutlineMenu
          onClick={() => setIsOpen(true)}
          className="block md:hidden"
          style={{
            fontSize: 32,
          }}
        />
      </div>

      <Dialog
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          zIndex: 99,
          backgroundColor: "rgba(0,0,0,0.7)",
          height: "100vh",
          width: "100vw",
        }}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <Dialog.Panel
          style={{
            backgroundColor: "#fff",
            width: "60vw",
            height: "100%",
            marginLeft: "auto",
          }}
        >
          <div className="h-16 flex justify-end items-center pe-4">
            <IoMdClose
              onClick={() => setIsOpen(false)}
              style={{
                fontSize: 32,
              }}
            />
          </div>
          <Dialog.Description>
            <ul className={"flex flex-col gap-1 items-center"}>
              {menuItems?.map((items) => {
                return (
                  <Link
                    href={items.link}
                    key={items.key}
                    className="font-bold text-lg hover:bg-slate-200 w-full text-center py-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <li>{items.title}</li>
                  </Link>
                );
              })}
            </ul>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
