"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Footer, NavBar } from "@/components";
import getVerificationByID from "@/utils/getVerificationByID";

export default function VerifyProduct({ params }) {
  const [setError] = useState("");
  const [IsVerified, setIsVerified] = useState(false);
  const [IsSubmitted, setIsSubmitted] = useState(false);
  const [IsLoading, setIsLoading] = useState(false);

  const { slug } = params;

  useEffect(() => {
    const submit = async (slug) => {
      if (slug.length < 20) {
        setError("Invalid Order ID");
        setIsSubmitted(true);
        setIsVerified(false);
      } else {
        const response = await getVerificationByID({
          slug,
          setIsLoading,
        });
        if (response?.status) setIsVerified(true);
        setIsSubmitted(true);
      }
    };

    if (slug) {
      submit(slug[0]);
    }
  }, [slug, setError]);

  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <main className="container flex-1 flex flex-col md:flex-row justify-center items-center py-16 md:gap-8">
        {IsSubmitted && (
          <Image
            src={IsVerified ? "/verified.webp" : "/not-verified.webp"}
            width={800}
            height={800}
            alt=""
            style={{
              maxWidth: 350,
              maxHeight: 350,
              width: "100%",
            }}
          />
        )}
        <div className="flex-1 md:flex-none flex flex-col justify-center items-center gap-2 md:gap-4">
          {!IsLoading ? (
            IsSubmitted && (
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
                    ORDER ID : <span>{slug}</span>
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
