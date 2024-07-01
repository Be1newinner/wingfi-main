"use client";

import { redirect } from "next/navigation";
import AuthContext from "./AuthContext";
import { PropsWithChildren, useContext, useEffect } from "react";
import { LoadingIndicator } from "@/registry/components";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const authContextData = useContext(AuthContext);
  const User = authContextData?.state.user ?? {};
  const IsUserLoading = authContextData?.state.isUserLoading;

  useEffect(() => {
    if (!IsUserLoading) {
      if (User?.uid) {
        console.log("User at Protected Routes...", User);

      } else {
        // console.log("User at Protected Routes... No User");
        redirect("/signin");
      }
    }
    // else {
    //   console.log("Protected Routes is Loading...", User);
    // }
  }, [User, IsUserLoading]);

  return IsUserLoading ? <LoadingIndicator /> : <>{children}</>;
}
