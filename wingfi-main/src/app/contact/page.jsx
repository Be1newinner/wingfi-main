/** @format */

import { Footer, NavBar } from "@/registry/components";
import Faq from "./Faq";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <NavBar />

      <main className="pb-4">
        <div
          style={{
            maxWidth: 1200,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {/* Header */}
          <div className="flex flex-col items-center p-12">
            <h1 className="text-xl font-semibold">Keep in Touch With Us</h1>
            <div className="text-sm breadcrumbs">
              <ul>
                <li>
                  <Link href={"/"}>Home</Link>
                </li>
                <li>Contact</li>
              </ul>
            </div>
          </div>

          {/* Contact Us Page */}

          <div className="flex items-center justify-center gap-4 flex-col sm:flex-row">
            <div className="min-h-[700px] bg-white p-6 rounded-md max-w-xl">
              <h3 className="text-orange-500 font-medium">How It Started</h3>
              <h1 className="text-6xl font-medium mt-12">
                Our Dream is Global Learning Transfomation
              </h1>
              <p className="mt-20 text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                provident exercitationem voluptatibus. Ipsa soluta tempora
                voluptas ipsum temporibus perferendis veniam sequi id
                reprehenderit sed blanditiis hic vero, laboriosam quo a quae
                excepturi quod similique, corrupti error nemo dicta illo
                accusamus! Et nihil natus quod voluptas ut quia ea maxime, eaque
                deleniti officia quas inventore doloremque fugit, odio ab ipsum?
                A quaerat expedita voluptates, odio inventore blanditiis eius
                maiores aspernatur perspiciatis?
              </p>
            </div>
            <div className="">
              <div className="h-[350px]  w-full">
                <img
                  src="./images/1.jpg"
                  alt="img"
                  className="h-full w-full rounded-t-md"
                />
              </div>
              <div className="flex flex-col justify-center item-center gap-5  w-1/1 h-[350px] bg-white p-6 rounded-b-md">
                <div className="flex flex-row gap-4 item-center justify-center">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h1 className="text-3xl font-bold">3.5</h1>
                    <p>Years Experiences</p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h1 className="text-3xl font-bold">23</h1>
                    <p>Project Challenge</p>
                  </div>
                </div>

                <div className="flex flex-row gap-4 item-center justify-center">
                  <div className="bg-gray-100 p-4 px-[20px] rounded-lg">
                    <h1 className="text-3xl font-bold">830+</h1>
                    <p>Positive Reviews</p>
                  </div>

                  <div className="bg-gray-100 p-4 px-[20px] rounded-lg">
                    <h1 className="text-3xl font-bold">100K</h1>
                    <p>Trusted Students</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Faq />
        </div>
      </main>
      <Footer />
    </div>
  );
}
