import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

import { NavBar, Footer, UserFeedBack2, CartButton } from '@/components';
import getProductFromURL from '@/service/getProductFromURL/getProductFromURLService';

import styles from './style.module.css';
import { ExtraFeaturesCards } from './ExtraFeaturesCards';

export default async function SingleStore({ params }) {
  const { slug } = params;
  let LoadingState = false;

  const FilteredProduct = await getProductFromURL({
    slug,
  });

  return (
    <div
      style={{
        backgroundColor: '#f6f9fc',
      }}
    >
      <NavBar />
      <main
        className="mb-8 static sm:relative"
        style={{
          maxWidth: 1200,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
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
            <div className="flex sm:pt-8 gap-8 flex-col sm:flex-row">
              <div className="flex flex-col gap-4 static sm:sticky top-20 h-full">
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
                        className="bg-slate-200 rounded-sm shadow px-2 sm:px-0 w-full"
                        src={`https://firebasestorage.googleapis.com/v0/b/wingfi-9b5b7.appspot.com/o/pro%2F${FilteredProduct.data.sku}%2F${item}.webp?alt=media`}
                        alt={`${FilteredProduct.data?.modal} Black Power Bank`}
                        width={1000}
                        height={1000}
                        style={{
                          objectFit: 'contain',
                        }}
                      />
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    gap: 5,
                  }}
                  className="flex justify-center items-center flex-row"
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
                            borderRadius: 2,
                            borderColor: 'silver',
                            borderWidth: 1,
                            width: 80,
                            height: 80,
                            objectFit: 'contain',
                          }}
                        />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Product Details */}
              <div className="px-1 flex flex-col gap-4">
                <h2 className="ml-1 mb-4 font-bold text-3xl">{FilteredProduct.data?.title}</h2>
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
                      color: 'gray',
                      textDecorationLine: 'line-through',
                      textDecorationColor: 'gray',
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
                  <span className="font-medium">SKU:</span> {FilteredProduct.data?.sku}
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

                <div className={styles.collapse}>
                  <div className="bg-slate-200 rounded-sm font-medium p-4">General</div>
                  <div className="px-4 pb-4">
                    <table className="mt-4">
                      <tbody>
                        <tr>
                          <td>Ports Input</td>
                          <td>{FilteredProduct.data?.inputPorts}</td>
                        </tr>
                        <tr>
                          <td>Ports Output</td>
                          <td>{FilteredProduct.data?.outputPorts}</td>
                        </tr>
                        <tr>
                          <td>Model Name</td>
                          <td>{FilteredProduct.data?.model}</td>
                        </tr>
                        <tr>
                          <td
                            style={{
                              textWrap: 'nowrap',
                            }}
                          >
                            Charging Cable Included
                          </td>
                          <td>Yes</td>
                        </tr>
                        <tr>
                          <td>Sales Package</td>
                          <td>
                            1 Power Bank, Charging Cable, <br /> User Manual, Warranty Card
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className={styles.collapse}>
                  <div className="bg-slate-200 rounded-sm font-medium p-4">Warranty</div>
                  <div className="px-4 pb-4">
                    <table className="mt-4">
                      <tbody>
                        <tr>
                          <td>Coverage</td>
                          <td>Manufacturing Defects</td>
                        </tr>
                        <tr>
                          <td>Warranty Summary</td>
                          <td>3 Months</td>
                        </tr>
                        <tr>
                          <td>Not Covered</td>
                          <td>Physical Damage</td>
                        </tr>
                        <tr>
                          <td>Contact</td>
                          <td>care@wingfiindia.com</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <ExtraFeaturesCards />
              </div>
            </div>
            <div className="mt-16">
              <div className="py-4 px-1 flex flex-col gap-4">
                <h1 className="text-xl font-bold underline">
                  Power Your Life On-the-Go with the Wingfi India {FilteredProduct.data?.model}{' '}
                  {FilteredProduct.data?.capacity}
                  Mah Power Bank
                </h1>

                <p>
                  <b>Wingfi India</b>, a prominent name in power solutions for over 4 years, brings
                  you the{' '}
                  <b>
                    {' '}
                    {FilteredProduct.data?.model} {FilteredProduct.data?.capacity}Mah Power Bank
                  </b>
                  , a reliable and powerful companion for your daily charge needs.
                </p>

                <h2 className="text-xl font-bold">Built with Quality and Convenience in Mind</h2>

                <ul
                  style={{
                    listStyleType: 'disc',
                  }}
                  className="flex flex-col gap-1"
                >
                  <li>
                    <b>Ample Capacity:</b> The {FilteredProduct.data?.capacity}
                    mAh capacity ensures you can charge your smartphone, tablet, or other compatible
                    devices multiple times on a single full charge.
                  </li>
                  <li>
                    <b>Versatility:</b> Equipped with{' '}
                    <b>{FilteredProduct.data?.inputPorts} ports</b>, the Power Bank caters to a wide
                    range of devices, allowing you to charge smartphones, tablets, cameras, and more
                    simultaneously.
                  </li>
                  <li>
                    <b>Convenience:</b> The <b>included charging cable </b>
                    eliminates the need to carry an extra one, while the{' '}
                    <b>user manual and warranty card</b> provide clear instructions and peace of
                    mind.
                  </li>
                </ul>

                <h2 className="text-xl font-bold">Beyond the Technical Specifications</h2>

                <p>The {FilteredProduct.data?.model} offers more than just technical features:</p>

                <ul
                  style={{
                    listStyleType: 'disc',
                  }}
                  className="flex flex-col gap-1"
                >
                  <li>
                    <b>Peace of mind:</b> Backed by a <b>3-month warranty</b> that covers
                    manufacturing defects, you can be assured of the product{`&apos`}s quality and
                    durability.
                  </li>
                  <li>
                    <b>Reliable performance:</b> Wingfi India{`&apos`}s <b>own manufacturing</b>{' '}
                    ensures rigorous quality control for consistent performance.
                  </li>
                  <li>
                    <b>Commitment to sustainability:</b> By choosing a reusable power bank, you
                    contribute to reducing reliance on disposable batteries and minimizing
                    environmental impact.
                  </li>
                </ul>

                <h2 className="text-xl font-bold">
                  Who is the {FilteredProduct.data?.model} Perfect For?
                </h2>

                <p>
                  The {FilteredProduct.data?.model} {FilteredProduct.data?.capacity}Mah Power Bank
                  is the perfect choice for:
                </p>

                <ul
                  style={{
                    listStyleType: 'disc',
                  }}
                  className="flex flex-col gap-1"
                >
                  <li>
                    <b>Professionals on the go:</b> Stay connected and productive throughout the day
                    with reliable charging for your essential devices.
                  </li>
                  <li>
                    <b>Travel enthusiasts:</b> Capture memories and stay connected with loved ones
                    without worrying about running out of battery.
                  </li>
                  <li>
                    <b>Students and young adults:</b> Keep your devices powered up for studies,
                    entertainment, or social media.
                  </li>
                </ul>

                <h2 className="text-xl font-bold">Invest in Reliable Power and Peace of Mind</h2>

                <p>
                  Choose the Wingfi India {FilteredProduct.data?.model}{' '}
                  {FilteredProduct.data?.capacity}Mah Power Bank and experience the freedom of
                  uninterrupted connectivity.
                </p>
              </div>
            </div>
            <div className="divider my-16" />
            <UserFeedBack2 rating={4.87} reviewsCount={142} />
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
            <span className="text-sm ">May be we can help find you what you are looking for?</span>
            <p>
              <Link href={'/shop'}>
                <span className="text-blue-500 hover:link">Navigate to our store</span>
              </Link>
              <span> to buy top quality powerbanks.</span>
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
