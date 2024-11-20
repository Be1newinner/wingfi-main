"use client";

import { firebaseAuth } from "../infrastructure/firebase.config";
import { rehydrateUser } from "../redux/reducers/auth";
import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

interface WrapperProps {
  children: ReactNode;
}

export default function RehydrationReducer({ children }: WrapperProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, async (user) => {
      if (user) {
        dispatch(
          rehydrateUser({
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            displayName: user.displayName,
            isAdmin: JSON.parse(user?.reloadUserInfo?.customAttributes)?.admin,
            token: await user.getIdToken(),
            refreshToken: user.refreshToken,
          })
        );
      } else
        dispatch(
          rehydrateUser({
            uid: null,
            email: null,
            emailVerified: false,
            phoneNumber: null,
            photoURL: null,
            displayName: null,
            isAdmin: false,
            token: null,
          })
        );
    });
  }, [dispatch]);

  return children;
}
