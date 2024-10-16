import Image from 'next/image';
import Link from 'next/link';
import image2 from './../../../public/hero/heroImage.png';
import { FaArrowRight } from 'react-icons/fa';

const HeroSwiper = () => {
  return (
    <div className="flex bg-gray-300 p-10 rounded-xl justify-center items-center">
      <div>
        <div>
          <p className="bg-yellow-500 px-4 py-2 font-bold rounded-2xl text-lg w-fit">
            Weekend Discount
          </p>
        </div>
        <div>
          <h3 className="font-[400] text-[70px]">Best</h3>
          <h2 className="font-[700] text-[70px]">Microphone</h2>
          <p className="leading-8 font-[500] mb-3">
            Last call for up to <span className="text-2xl text-red-600 font-semibold">25%</span>{' '}
            Off!
          </p>
          <Link
            href={'/'}
            className="bg-red-500 px-4 py-2 font-bold flex justify-center items-center w-fit text-white gap-4"
          >
            <span> Shop Now</span>
            <span>
              <FaArrowRight size={20} />
            </span>
          </Link>
        </div>
      </div>

      <div className="relative w-full">
        <div className="absolute rotate-[30deg] top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-40">
          <Image src={image2} width={200} height={100} className="w-[200px]" alt="image2" />
        </div>
      </div>
    </div>
  );
};

export default HeroSwiper;
