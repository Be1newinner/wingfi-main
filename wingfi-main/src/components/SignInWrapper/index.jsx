"use client";
import { Footer, NavBar } from "@/registry/components";
import { AuthProvider } from "@/registry/context";
import Lottie from "lottie-react";
import animationData from "@/../public/animation/auth-animation.json";

export default function SignInWrapper({ children }) {
  return (
    <AuthProvider>
      <NavBar />
      <div className="bg-slate-100 p-4 flex flex-col items-center justify-center bg-white">
        <div
          className="flex flex-row-reverse w-full justify-between"
          style={{
            maxWidth: 1200,
          }}
        >
          <div className="w-full flex flex-col items-center justify-center">
            <div
              className="w-full flex flex-col"
              style={{
                maxWidth: 400,
              }}
            >
              <Lottie
                animationData={animationData}
                className="flex justify-center items-center"
                loop={true}
                style={{
                  maxWidth: 250,
                }}
              />

              <div>
                <div className="mt-2 text-xl">Introducing</div>
                <div className="mb-2 mt-1 text-2xl font-medium">
                  High Quality Power Banks
                </div>
              </div>

              <div className="p1 mv2 text-xs">
                Never get your phone out of charge again. Get Fast Charging,
                Premium Quality Power Banks at very Offordable Price. Only with
                WIngfi India Power Banks.
              </div>
            </div>
          </div>
          <form className="p-8 shadow border rounded rounded-sm mt-8 flex flex-col gap-1">
            {children}
          </form>
        </div>
      </div>
      <Footer />
    </AuthProvider>
  );
}
