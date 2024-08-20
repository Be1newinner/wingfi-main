"use client";

import { redirect } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import { LoadingIndicator } from "@/components";
import { selectIsUserLoading, selectUserUID } from "@/redux/selectors/auth";
import { useSelector } from "react-redux";

export default function ProtectedRoute({ children }: PropsWithChildren) {
  const UserUID = useSelector(selectUserUID);
  const IsUserLoading = useSelector(selectIsUserLoading);

  useEffect(() => {
    if (!IsUserLoading && !UserUID) redirect("/signin");
  }, [UserUID, IsUserLoading]);

  return IsUserLoading ? <LoadingIndicator /> : <>{children}</>;
}
