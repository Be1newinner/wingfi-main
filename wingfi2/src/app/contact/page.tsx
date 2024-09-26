import { Footer, NavBar } from "@/components";
import Faq from "./Faq";
import Link from "next/link";
import Image from "next/image";

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
            <div className="w-full sm:min-h-[700px] bg-white p-6 rounded-md max-w-xl">
              <h3 className="text-orange-500 font-medium">How It Started</h3>
              <h1 className="text-4xl sm:text-6xl font-medium mt-4 sm:mt-12">
                Empowering Your Mobile Lifestyle with Innovative Power Solutions
              </h1>
              <p className="mt-4 sm:mt-20 text-lg">
                our vision is to revolutionize the way you stay connected by
                providing innovative, reliable, and high-quality power
                solutions. We believe in empowering your mobile lifestyle with
                products that keep your devices charged and ready, no matter
                where you are. Our commitment to cutting-edge technology,
                exceptional design, and customer satisfaction drives us to
                deliver power banks and accessories that enhance your everyday
                experiences. We strive to set new standards in convenience,
                portability, and sustainability, ensuring that you can always
                rely on our products to keep you powered up and connected in
                today&apos;s fast-paced world.
              </p>
            </div>
            <div className="">
              <div className="h-[350px]  w-full">
                <Image
                  src="./images/1.jpg"
                  alt="img"
                  className="h-full w-full rounded-t-md"
                />
              </div>
              <div className="flex flex-col justify-center item-center gap-5  w-1/1 h-[350px] bg-white p-6 rounded-b-md">
                <div className="flex flex-row gap-4 item-center justify-center flex-1">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h1 className="text-3xl font-bold">5+</h1>
                    <p>Years Experiences</p>
                  </div>

                  <div className="bg-gray-100 p-4 rounded-lg  flex-1">
                    <h1 className="text-3xl font-bold">100K+</h1>
                    <p>Products Sold</p>
                  </div>
                </div>

                <div className="flex flex-row gap-4 item-center justify-center  flex-1">
                  <div className="bg-gray-100 p-4 px-[20px] rounded-lg">
                    <h1 className="text-3xl font-bold">800+</h1>
                    <p>Positive Reviews</p>
                  </div>

                  <div className="bg-gray-100 p-4 px-[20px] rounded-lg flex-1">
                    <h1 className="text-3xl font-bold">10+</h1>
                    <p>Our Offices</p>
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
