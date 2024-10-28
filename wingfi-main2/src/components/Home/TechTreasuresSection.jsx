import Link from "next/link";
import React from "react";
import processor from "../../../public/assets/tech-treasures/processor.png";
import battery from "../../../public/assets/tech-treasures/battery.png";
import data from "../../../public/assets/tech-treasures/data.png";
import Image from "next/image";

export default function TechTreasuresSection() {
  return (
    <div className="w-full px-5 py-10 lg:px-[50px] lg:py-[50px]">
      <div className="flex flex-col items-center justify-center lg:flex-row lg:items-start gap-10">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-5">
          <p className="font-bold uppercase text-sm border-[3px] border-[#5784ff] px-5 py-2 rounded-full text-[#5784ff] text-center">
            Tech Treasures
          </p>
          <p className="text-4xl lg:text-5xl font-bold text-center">
            Security Features
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:px-10 flex flex-col items-center lg:items-start">
          <p className="pb-5 text-[#707171] text-lg lg:text-base text-center lg:text-left">
            Non nisi est sit amet facilisis magna etiam tempor. Aliquam sem et
            tortor consequat. Dolor morbi neque aliquam non.
          </p>
          <Link
            href="#"
            className="font-semibold text-lg lg:text-base hover:text-[#5784ff] underline decoration-2 hover:decoration-[#5784ff] underline-offset-4 ease-in-out duration-300 text-center lg:text-left"
          >
            View All Features
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 h-full gap-y-10 lg:gap-10 pt-10">
        <div className="col-span-2 bg-[#fdeaef] h-full rounded-3xl border border-[#e4e1e1] px-5 lg:px-12 py-5 lg:py-5">
          <div className="h-full flex items-center justify-center flex-col gap-10">
            <div className="flex items-center justify-center flex-col gap-2 lg:gap-5">
              <h3 className="text-xl lg:text-2xl font-bold capitalize">
                Processor
              </h3>
              <h2 className="text-3xl lg:text-4xl font-bold capitalize">
                Brand-new k15
              </h2>
              <p className="text-lg text-center text-[#707171]">
                Quis risus sed vulputate odio ut enim blandit. Neque laoreet
                suspendisse interdum nisl.
              </p>
            </div>
            <div className="w-3/4 lg:w-full hover:scale-105 ease-in-out duration-300 cursor-pointer">
              <Image
                src={processor}
                alt="processor"
                className="transition-all duration-300 filter hover:contrast-125 hover:scale-105 ease-in-out cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="col-span-3 grid grid-cols-1 gap-10">
          <div className="bg-[#e1f1e4] h-full rounded-3xl border border-[#e4e1e1] px-5 lg:px-12 py-5 lg:py-0">
            <div className="h-full flex items-center flex-col lg:flex-row justify-center gap-10">
              <div className="w-full flex items-center lg:items-start justify-center flex-col gap-2 lg:gap-5">
                <h3 className="text-xl lg:text-2xl font-bold capitalize">
                  Battery Life
                </h3>
                <h2 className="text-3xl lg:text-4xl font-bold capitalize">
                  Upto 31 hrs
                </h2>
                <p className="text-lg text-[#707171] text-center lg:text-start">
                  Nunc pulvinar sapien et ligula ullamcorper malesuada proin
                  libero. Arcu cursus vitae congue mauris rhoncus.
                </p>
              </div>
              <div className="w-3/4 lg:w-full flex items-center justify-center">
                <Image
                  src={battery}
                  alt="battery"
                  className="transition-all duration-300 filter hover:contrast-125 hover:scale-105 ease-in-out cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="bg-[#ebfafe] h-full rounded-3xl border border-[#e4e1e1] px-5 lg:px-12 py-5 lg:py-0">
            <div className="h-full flex items-center justify-center flex-col lg:flex-row-reverse gap-10">
              <div className="w-full flex items-center lg:items-start justify-center flex-col gap-5">
                <h3 className="text-xl lg:text-2xl font-bold capitalize">
                  Data Storage
                </h3>

                <h2 className="text-3xl lg:text-4xl font-bold capitalize">
                  Presently 512GB+
                </h2>
                <p className="text-lg text-[#707171] text-center lg:text-start">
                  Mollis aliquam ut porttitor leo a. Vulputate odio ut enim
                  blandit volutpat maecenas. Pellentesque nulla facilisi.
                </p>
              </div>
              <div className="w-3/4 lg:w-full flex items-center justify-center">
                <Image
                  src={data}
                  alt="data"
                  className="transition-all duration-300 filter hover:contrast-125 hover:scale-105 ease-in-out cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
