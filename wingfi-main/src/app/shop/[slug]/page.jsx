import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

import { CartButton, UserFeedBack2 } from "@/components";
import getProductFromURL from "@/service/getProductFromURL/getProductFromURLService";

// import styles from "./style.module.css";
import { ExtraFeaturesCards } from "./ExtraFeaturesCards";
import Tabs from "@/components/Tabs/Tabs";
// import Testimonials from "@/components/Testimonials";

export default async function SingleStore({ params }) {
  const { slug } = params;
  let LoadingState = false;

  const FilteredProduct = await getProductFromURL({
    slug,
  });
  
  const tabs = [
    {
      label: "Description",
    },
    {
      label: "Product Specification",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f6f9fc",
      }}
    >
      <main
        className="mb-8 static sm:relative"
        style={{
          maxWidth: 1200,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {LoadingState ? (
          <div
            style={{
              justifyContent: "center",
              alignItems: "center",
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
            <div className="flex sm:pt-8 gap-8 flex-col sm:flex-row">
              <div className="flex flex-col gap-4 static sm:sticky top-5 h-full">
                <div
                  className="carousel"
                  style={{
                    maxWidth: 510,
                  }}
                >
                  {FilteredProduct.data?.images?.map((item, index) => (
                    <div
                      key={index}
                      id={`head-carousal-item${index}`}
                      className="carousel-item w-full"
                    >
                      <Image
                        className="bg-slate-200 rounded-md shadow px-2 sm:px-0 w-full"
                        src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${FilteredProduct.data.sku}%2F${item}.webp?alt=media`}
                        alt={`${FilteredProduct.data?.modal} Black Power Bank`}
                        width={1000}
                        height={1000}
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    gap: 5,
                  }}
                  className="flex justify-between items-center flex-row w-full"
                >
                  {FilteredProduct.data?.images?.map((item, index) => {
                    return (
                      <a href={`#head-carousal-item${index}`} key={index}>
                        <Image
                          className="bg-slate-200 mx-auto sm:mx-0 rounded-sm shadow"
                          src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${FilteredProduct.data.sku}%2F${item}.webp?alt=media`}
                          alt={`${FilteredProduct.data?.model} Black Power Bank`}
                          width={200}
                          height={200}
                          style={{
                            borderRadius: 5,
                            borderColor: "silver",
                            borderWidth: 1,
                            width: 80,
                            height: 80,
                            objectFit: "contain",
                          }}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Product Details */}
              <div className="px-1 flex flex-col gap-4">
                <h2 className="ml-1 mb-4 font-bold text-3xl">
                  {FilteredProduct.data?.title}
                </h2>
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
                  <span
                    className="text-error"
                    style={{
                      fontWeight: 500,
                      fontSize: 24,
                    }}
                  >
                    ₹ {FilteredProduct.data?.price}/-
                  </span>
                  <span
                    style={{
                      color: "gray",
                      textDecorationLine: "line-through",
                      textDecorationColor: "gray",
                    }}
                  >
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
                  <span className="font-medium">SKU:</span>{" "}
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

                  <Link href={"/cart"}>
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

            <div className="mt-16 md:mt-24">
              <div className="container mx-auto px-4 md:px-0">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                  

                  
                </div>
              </div>
            </div>
            <div className="divider my-16" />
            <UserFeedBack2 rating={4.87} reviewsCount={142} />
            {/* <Testimonials /> */}
          </>
        ) : (
          <div className="flex flex-col justify-center items-center py-12 flex-1 gap-4">
            <span className="text-2xl font-medium">Hey, lost your way?</span>
            <Image
              src={"/images/not-found.webp"}
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
              <Link href={"/shop"}>
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
