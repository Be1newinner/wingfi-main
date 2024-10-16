import Image from 'next/image';
import styles from './styles.module.css';
import { Theme_colors } from '@/infrastructure/theme';
import bg from '@/../public/images/bg.jpg';
import { FaArrowRight } from 'react-icons/fa6';
import image1 from './../../../public/hero/camerahero.png';
import image2 from './../../../public/hero/heroImage.png';
import HeroSwiper from './HeroSwiper';

import Link from 'next/link';

export function HeroSection() {
  return (
    // <div
    //   // className="bg-blue-200"
    //   style={{
    //     width: '100%',
    //     height: 'auto',
    //     overflow: 'hidden',
    //     backgroundColor: Theme_colors.secondary,
    //     color: 'white',
    //     backgroundImage: `url(${bg.src})`,
    //     backgroundBlendMode: 'multiply',
    //   }}
    //   className={styles.bg}
    // >
    //   <div
    //     style={{
    //       maxWidth: 1200,
    //     }}
    //     className="py-16 px-4 sm:px-0 max-w-7xl mx-auto"
    //   >
    //     <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
    //       <Image
    //         src={'/hero/side-dots.webp'}
    //         width={34}
    //         height={200}
    //         alt=""
    //         style={{
    //           filter: 'brightness(0.8)',
    //         }}
    //         className="hidden sm:flex"
    //       />

    //       <div className="flex gap-4 items-center justify-center">
    //         <div className="flex flex-col gap-4 items-center">
    //           <span className="text-5xl sm:text-7xl font-light text-justify">
    //             <span
    //               style={{
    //                 letterSpacing: '0.27em',
    //                 wordSpacing: '-0.25em',
    //               }}
    //               className="tracking-widest"
    //             >
    //               THE NEW
    //             </span>
    //             <br />
    //             <span className="tracking-widest">STANDARD</span>
    //           </span>

    //           <span className="text-2xl sm:text-4xl font-bold tracking-wider mr-4">
    //             <span className="text-error">C</span>rafted <span className="text-error">P</span>
    //             ower <span className="text-error">B</span>anks
    //           </span>

    //           <span
    //             style={{
    //               lineHeight: 1,
    //             }}
    //             className="sm:text-2xl flex items-center"
    //           >
    //             STARTING FROM
    //             <span className="ml-3 font-semibold text-4xl">₹ 749/-</span>
    //           </span>

    //           <button
    //             style={{
    //               padding: '0 60px',
    //             }}
    //             className="btn btn-error mt-2 btn-sm sm:btn-md rounded-sm text-white font-medium"
    //           >
    //             BUY NOW
    //           </button>
    //         </div>
    //       </div>

    //       <div className="hidden sm:flex">
    //         <Image
    //           src={'/hero/hero-img.webp'}
    //           width={546}
    //           height={700}
    //           alt="hero"
    //           style={{
    //             aspectRatio: 0.76,
    //           }}
    //           className="max-w-full sm:max-w-sm max-h-lg my-8 sm:my-0"
    //         />
    //       </div>
    //       <Image
    //         src={'/hero/side-dots.webp'}
    //         width={34}
    //         height={200}
    //         alt=""
    //         style={{
    //           filter: 'brightness(0.8)',
    //         }}
    //         className="hidden sm:flex"
    //       />
    //     </div>
    //   </div>
    // </div>

    <div className="flex justify-center items-center w-full mt-4 md:px-0 px-[20px]">
      <div className="container grid lg:grid-cols-[1fr_2fr_1fr] grid-cols-1 gap-4">
        <div className="lg:flex hidden flex-col bg-red-300 p-10 rounded-xl">
          <div className="flex justify-center items-center">
            <Image src={image1} width={100} height={100} className="w-[200px]" alt="image1" />
          </div>
          <div>
            <div className="text-left">
              <h2 className="text-[36px] font-bold">Special</h2>
              <h3 className="text-[18px]">Controller Collection</h3>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-lg uppercase">UPTO</h4>
              <h2 className="font-extrabold text-[50px]">60% OFF</h2>
            </div>

            <div>
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
        </div>

        <HeroSwiper />

        <div className="grid lg:grid-cols-1 xs:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col bg-red-300 p-10 rounded-xl">
            <div className="flex justify-center items-center">
              <Image src={image1} width={100} height={100} className="w-[200px]" alt="image1" />
            </div>
            <div>
              <div className="text-left">
                <h2 className="text-[36px] font-bold">Special</h2>
                <h3 className="text-[18px]">Controller Collection</h3>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-lg uppercase">UPTO</h4>
                <h2 className="font-extrabold text-[50px]">60% OFF</h2>
              </div>

              <div>
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
          </div>

          <div className="flex flex-col bg-red-300 p-10 rounded-xl lg:hidden">
            <div className="flex justify-center items-center">
              <Image src={image1} width={100} height={100} className="w-[200px]" alt="image1" />
            </div>
            <div>
              <div className="text-left">
                <h2 className="text-[36px] font-bold">Special</h2>
                <h3 className="text-[18px]">Controller Collection</h3>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-lg uppercase">UPTO</h4>
                <h2 className="font-extrabold text-[50px]">60% OFF</h2>
              </div>

              <div>
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
          </div>
        </div>
      </div>
    </div>
  );
}
