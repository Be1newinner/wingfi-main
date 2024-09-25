"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getProductBySlug } from "@/services/products/ProductsService";
import { ImgProductsURL } from "@/infrastructure/constants";

export default function SinglePowerBank({ params }) {
  const [isLoading, setIsLoading] = useState(true);
  const [Product, setProduct] = useState({
    status: false,
    data: null,
  });
  const { slug } = params;

  useEffect(() => {
    (async function () {
      if (slug) {
        const response = await getProductBySlug({
          slug: slug[0],
          setIsLoading,
        });
        if (response?.status) setProduct(response);
      } else {
        setIsLoading(false);
      }
      // console.log("slug =>", slug[0]);
    })();
  }, [slug]);

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#fff",
        paddingBottom: 40,
        height: "100vh",
      }}
    >
      <div
        style={{
          zIndex: 2,
        }}
      >
        <Header />
      </div>

      {isLoading ? (
        <span
          style={{
            transform: "scale(2.5)",
            marginTop: "auto",
            marginBottom: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="loading loading-infinity loading-lg text-error"
        ></span>
      ) : !Product.status ? (
        <div>
          <Image
            className="mx-auto mt-2"
            src={"/not-found.webp"}
            alt="Energy Hub Black Power Bank"
            width={500}
            height={500}
            style={{
              borderRadius: 10,
            }}
          />
        </div>
      ) : (
        <div className="text-sm container">
          <div
            style={{
              gap: 15,
              flex: 1,
            }}
            className="flex flex-col md:flex-row"
          >
            <div
              style={{
                paddingBottom: 10,
                height: "max-content",
              }}
              className="flex flex-col md:flex-row-reverse md:justify-end md:pl-0 gap-2"
            >
              <div
                className="carousel w-full"
                style={{
                  maxWidth: 500,
                  maxHeight: 500,
                  flex: 1,
                }}
              >
                {Product?.data?.imgs?.map((item, index) => (
                  <div
                    key={index}
                    id={`head-carousal-item${index}`}
                    className="carousel-item w-full p-1"
                  >
                    <Image
                      className="mx-auto mt-2 w-11/12 h-11/12 shadow shadow-slate-500"
                      src={ImgProductsURL + item}
                      alt="Energy Hub Black Power Bank"
                      width={500}
                      height={500}
                      style={{
                        borderRadius: 10,
                      }}
                    />
                  </div>
                ))}
              </div>

              <div
                style={{
                  gap: 5,
                }}
                className="flex justify-center items-center flex-row md:flex-col "
              >
                {Product?.data?.imgs?.map((item, index) => {
                  return (
                    <a href={`#head-carousal-item${index}`} key={index}>
                      <Image
                        src={ImgProductsURL + item}
                        alt="Energy Hub Black Power Bank"
                        width={60}
                        height={60}
                        style={{
                          borderRadius: 2,
                          borderColor: "silver",
                          borderWidth: 1,
                        }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Details Section */}
            <div
              style={{
                backgroundColor: "white",
                padding: "20px 10px",
                gap: 5,
              }}
              className="flex flex-col shadow shadow-black md:shadow-none"
            >
              <h2 className="text-base font-medium">
                {Product?.data?.slug?.toUpperCase().replaceAll("-", " ")}
              </h2>

              <div className="ms-2">
                <h3 className="underline font-bold">Specifications</h3>
                <ul className="list-disc ml-4 mb-4">
                  {Product?.data?.spec?.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <hr
                style={{
                  backgroundColor: "rgba(0,0,0,0.15)",
                  height: 2,
                  marginBottom: 8,
                }}
              />

              <div className="ms-2">
                <h3 className="underline font-bold">General</h3>
                <table>
                  <tbody>
                    {Product?.data?.gen &&
                      Object.keys(Product?.data?.gen)?.map((item, index) => (
                        <tr key={index}>
                          <td>{item}</td>
                          <td className="pl-2">{Product?.data?.gen[item]}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
              <hr
                style={{
                  backgroundColor: "rgba(0,0,0,0.15)",
                  height: 2,
                  marginTop: 8,
                  marginBottom: 8,
                }}
              />
              <div className="ms-2">
                <h3 className="underline font-bold">Warranty</h3>
                <table>
                  <tbody>
                    {Product?.data?.Warranty &&
                      Object.keys(Product?.data?.Warranty)?.map(
                        (item, index) => (
                          <tr key={index}>
                            <td>{item}</td>
                            <td className="pl-2">
                              {Product?.data?.Warranty[item]}
                            </td>
                          </tr>
                        )
                      )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {Product?.data?.ex?.length > 0 ? (
            <div
              style={{
                padding: "20px 0px",
                display: "flex",
                flexDirection: "column",
                gap: 10,
              }}
            >
              <h3 className="underline font-bold ml-4"> Photo Gallery</h3>

              <div
                className="flex flex-col gap-4 md:flex-row mx-auto flex-wrap"
                style={{
                  justifyContent: "left",
                  alignItems: "flex-start",
                }}
              >
                {Product?.data?.ex?.map((item, index) => (
                  <Image
                    key={index}
                    className="w-max"
                    src={ImgProductsURL + item}
                    alt="Energy Hub Black Power Bank"
                    width={500}
                    height={500}
                    style={{
                      borderRadius: 10,
                      boxShadow: "0px 0px 4px 2px silver",
                      maxWidth: 349,
                      maxHeight: 349,
                    }}
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}
