import { firebaseAuth } from "@/infrastructure/firebase.config";
import { rehydrateUser } from "@/redux/reducers/auth";
import { onAuthStateChanged } from "firebase/auth";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";

interface WrapperProps {
  children: ReactNode;
}

export default function RehydrationReducer({ children }: WrapperProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) dispatch(rehydrateUser({ ...user, isAdmin: false }));
      else
        dispatch(
          rehydrateUser({
            uid: null,
            email: null,
            emailVerified: false,
            phoneNumber: null,
            photoURL: null,
            displayName: null,
            isAdmin: false,
          })
        );
    });
  }, [dispatch]);

  return children;
}
