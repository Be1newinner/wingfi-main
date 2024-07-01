"use client";

import { redirect } from "next/navigation";
import AuthContext from "./AuthContext";
import { useContext, useEffect } from "react";
import { LoadingIndicator } from "@/registry/components";

export default function ProtectedRoute({ children }) {
  const { User, IsUserLoading } = useContext(AuthContext);

  useEffect(() => {
    if (!IsUserLoading) {
      if (User) {
        // console.log("User at Protected Routes...", User);
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
