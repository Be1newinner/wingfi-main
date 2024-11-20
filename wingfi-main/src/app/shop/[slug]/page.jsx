/** @format */
"use client"

import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

import { CartButton } from '@/components';
import getProductFromURL from '@/service/getProductFromURL/getProductFromURLService';

// import styles from "./style.module.css";
import { ExtraFeaturesCards } from './ExtraFeaturesCards';
import Tabs from '@/components/Tabs/Tabs';
import Testimonials from '@/components/Testimonials';
// import Testimonials from "@/components/Testimonials";

export default async function SingleStore({ params }) {
  const { slug } = params;
  let LoadingState = false;

  const FilteredProduct = await getProductFromURL({
    slug,
  });

  const tabs = [
    {
      label: 'Description',
    },
    {
      label: 'Product Specification',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#f6f9fc',
      }}
    >
      <main className="static sm:relative max-w-7xl mx-auto">
        {LoadingState ? (
          <div
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {/* <Player
              autoplay
              loop
              src={"/animation/loading-progess.json"}
              style={{
                width: 500,
                height: 500,
                fill: "red",
                color: "red",
                transform: "scale(2)",
              }}
            >
              <Controls visible={false} />
            </Player> */}
          </div>
        ) : FilteredProduct.data ? (
          <>
            {/* Top Image View */}
            <div className="flex sm:pt-8 gap-6 md:gap-10 flex-col sm:flex-row w-full p-5">
              <div className="flex flex-row gap-4 static sm:sticky top-5 h-full w-full md:w-1/2">
                <div className="flex flex-col gap-2">
                  {FilteredProduct.data?.images?.map((item, index) => (
                    <a
                      href={`#head-carousal-item${index}`}
                      key={index}
                      className="flex-shrink-0"
                    >
                      <Image
                        className="bg-slate-200 rounded-sm shadow object-contain"
                        src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${FilteredProduct.data.sku}%2F${item}.webp?alt=media`}
                        alt={`${FilteredProduct.data?.model} Black Power Bank`}
                        width={80}
                        height={80}
                        style={{
                          borderRadius: 10,
                          borderColor: 'silver',
                          borderWidth: 1,
                        }}
                      />
                    </a>
                  ))}
                </div>

                <div className="carousel w-full">
                  {FilteredProduct.data?.images?.map((item, index) => (
                    <div
                      key={index}
                      id={`head-carousal-item${index}`}
                      className="carousel-item w-full"
                    >
                      <Image
                        className="bg-slate-200 rounded-xl shadow px-2 sm:px-0 w-full object-contain"
                        src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${FilteredProduct.data.sku}%2F${item}.webp?alt=media`}
                        alt={`${FilteredProduct.data?.modal} Black Power Bank`}
                        width={1000}
                        height={1000}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="px-1 flex flex-col gap-4 w-full md:w-1/2">
                <h2 className="font-bold text-2xl md:text-4xl line-clamp-2">
                  {FilteredProduct.data?.title}
                </h2>
                <p className="line-clamp-3">
                  Wingfi India, a prominent name in power solutions for over 4
                  years, brings you the EnergyHub 20000Mah Power Bank, a
                  reliable and powerful companion for your daily charge needs.
                </p>
                <div className="flex items-end gap-2">
                  <div className="text-error flex">
                    {Array?.from({
                      length: Math.floor(FilteredProduct.data?.rating),
                    })?.map((item, index) => (
                      <FaStar key={index} />
                    ))}
                  </div>
                  <div className="divider divider-horizontal" />
                  <span className="text-xs">15 Customer Ratings</span>
                </div>

                <div>
                  <span className="text-error text-2xl font-bold">
                    ₹ {FilteredProduct.data?.price}/-
                  </span>
                  <span className="text-xs text-gray-600 line-through ml-2">
                    ₹ {FilteredProduct.data?.mrp}/-
                  </span>
                </div>

                {/* Color Selection */}
                {/* <div>
                  <span className="text-md font-medium">
                    Color:{" "}
                    <span>{Variants[FilteredProduct.data?.color]?.name}</span>
                  </span>
                  <div className="flex mt-2 gap-2">
                    <div
                      className={["border"].join(" ")}
                      style={{
                        borderRadius: 60,
                        borderWidth: 2,
                        borderColor:
                          Variants[FilteredProduct.data?.color]?.color,
                      }}
                    >
                      <div
                        style={{
                          height: 30,
                          width: 50,
                          borderRadius: 50,
                          backgroundColor:
                            Variants[FilteredProduct.data?.color]?.color,
                          margin: 2,
                        }}
                      />
                    </div>
                    {FilteredProduct.data?.variants
                      ? FilteredProduct.data?.variants?.map((item) => (
                          <div key={item.s}>
                            <Link href={"/shop/" + item.s}>
                              <div
                                style={{
                                  height: 30,
                                  width: 50,
                                  borderRadius: 50,
                                  backgroundColor: Variants[item.c]?.color,
                                  cursor: "pointer",
                                  margin: 2,
                                }}
                              ></div>
                            </Link>
                          </div>
                        ))
                      : null}
                  </div>
                </div> */}

                <p>
                  <span className="font-medium">SKU:</span>{' '}
                  {FilteredProduct.data?.sku}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-6">
                  <CartButton
                    item={FilteredProduct.data}
                    text="Add to Cart"
                    size="btn-md"
                    flex="flex-1"
                    color="btn-neutral"
                  />

                  <Link href={'/cart'}>
                    <button className="btn btn-error rounded-sm hover:text-white px-8 btn-outline">
                      Go To Cart
                    </button>
                  </Link>
                  {/* <AddRemoveWishListIcon
                    item={FilteredProduct.data}
                    text="Add to Wishlist"
                    size="btn-md"
                  /> */}
                </div>

                {/* <div className="divider divider-sm" /> */}
                <ExtraFeaturesCards />
              </div>
            </div>

            {/* Product Description Tabs */}
            <Tabs tabs={tabs} data={FilteredProduct.data} />

            <Testimonials />
          </>
        ) : (
          <div className="flex flex-col justify-center items-center py-12 flex-1 gap-4">
            <span className="text-2xl font-medium">Hey, lost your way?</span>
            <Image
              src={'/images/not-found.webp'}
              width={800}
              height={800}
              alt="not found"
              style={{
                maxWidth: 350,
                maxHeight: 350,
              }}
            />
            <span className="text-sm ">
              May be we can help find you what you are looking for?
            </span>
            <p>
              <Link href={'/shop'}>
                <span className="text-blue-500 hover:link">
                  Navigate to our store
                </span>
              </Link>
              <span> to buy top quality powerbanks.</span>
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
