"use client";

import { redirect } from "next/navigation";
import { PropsWithChildren, useEffect, useState } from "react";
import { LoadingIndicator } from "@/components";
import { selectIsUserLoading, selectUserUID } from "@/redux/selectors/auth";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const UserUID = useSelector(selectUserUID);
  const IsUserLoading = useSelector(selectIsUserLoading);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    if (!IsUserLoading) {
      if (!UserUID) {
        setShouldRedirect(true);
      }
    }
  }, [UserUID, IsUserLoading]);

  useEffect(() => {
    if (shouldRedirect) {
      redirect("/signin");
    }
  }, [shouldRedirect]);

  if (IsUserLoading) {
    return <LoadingIndicator />;
  }

  return children;
}
