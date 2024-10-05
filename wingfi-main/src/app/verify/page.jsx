"use client";
import { Footer, NavBar } from "@/components";
import Image from "next/image";
import { useEffect, useState } from "react";
import getVerificationByID from "@/utils/getVerificationByID";

export default function VerifyProduct({ params }) {
  const [Error, setError] = useState("");
  const [Input, setInput] = useState("");
  const [IsVerified, setIsVerified] = useState(false);
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  const { slug } = params;

  const submit = async () => {
    if (Input.length < 20) {
      setError("Invalid Order ID");
    } else {
      const response = await getVerificationByID({ slug: Input, setIsLoading });
      console.log(response);
      if (response?.status) setIsVerified(true);
      setIsSubmitted(true);
    }
  };

  useEffect(() => {
    if (slug) setInput(slug[0]);
  }, [slug]);

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="container flex-1 flex flex-col md:flex-row justify-center items-center py-16 md:gap-8">
        <Image
          src={
            !IsSubmitted
              ? "/check-product.webp"
              : IsVerified
              ? "/verified.webp"
              : "/not-verified.webp"
          }
          width={800}
          height={800}
          alt=""
          style={{
            maxWidth: 350,
            maxHeight: 350,
            width: "100%",
          }}
        />
        <div className="flex-1 md:flex-none flex flex-col justify-center items-center gap-2 md:gap-4">
          {!IsLoading ? (
            !IsSubmitted ? (
              <>
                <h2 className="font-bold text-center text-xl">
                  Verify Your Product
                </h2>
                <label className="form-control w-full max-w-xs">
                  <input
                    type="text"
                    placeholder="Type your Serial Number"
                    value={Input}
                    onChange={(e) => setInput(e.target.value)}
                    className={[
                      "input input-bordered w-full max-w-xs",
                      Error ? "input-error" : "",
                    ].join(" ")}
                  />
                  {Error ? (
                    <div className="label">
                      <span className="label-text-alt text-red-500">
                        {Error}
                      </span>
                    </div>
                  ) : null}
                </label>
                <button
                  style={{
                    maxWidth: 320,
                  }}
                  className="btn btn-neutral w-full"
                  onClick={submit}
                >
                  Submit Verification
                </button>
              </>
            ) : (
              <>
                <h2 className="font-bold text-center text-xl md:text-3xl">
                  Your Product is <br />{" "}
                  <span className={IsVerified ? "text-success" : "text-error"}>
                    {IsVerified ? "Verified" : "Not Verified"}
                  </span>
                  <br /> With Us.
                </h2>
                {IsVerified && (
                  <p className="text-center">
                    ORDER ID : <span>{Input}</span>
                  </p>
                )}
                <p className="text-sm">
                  {IsVerified ? "Thank you for keep connected with us." : ""}
                </p>
              </>
            )
          ) : (
            <span
              style={{
                transform: "scale(2.5)",
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="loading loading-infinity loading-lg text-error"
            />
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
