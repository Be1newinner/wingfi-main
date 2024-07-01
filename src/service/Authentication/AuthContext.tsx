"use client";

import React, {
  createContext,
  useReducer,
  useEffect,
  ReactNode,
  Dispatch,
} from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  firebaseAuth,
  googleProvider,
  firebaseRealtime,
} from "@/infrastructure/firebase.config";

import { get, ref, set } from "firebase/database";

// Define state and action types
interface State {
  user: any;
  authErrors: string;
  userPhone: string;
  isUserLoading: boolean;
}

type Action =
  | { type: "SET_USER"; payload: any }
  | { type: "SET_AUTH_ERRORS"; payload: string }
  | { type: "SET_USER_PHONE"; payload: string }
  | { type: "SET_IS_USER_LOADING"; payload: boolean };

const initialState: State = {
  user: null,
  authErrors: "",
  userPhone: "",
  isUserLoading: true,
};

// Reducer function
const authReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_AUTH_ERRORS":
      return { ...state, authErrors: action.payload };
    case "SET_USER_PHONE":
      return { ...state, userPhone: action.payload };
    case "SET_IS_USER_LOADING":
      return { ...state, isUserLoading: action.payload };
    default:
      return state;
  }
};

// Create context with types
interface AuthContextProps {
  state: State;
  dispatch: Dispatch<Action>;
  signInWithEmail: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  signUpWithEmail: ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => Promise<void>;
  signInWithGoogle: () => Promise<void>;
  signOutUser: () => Promise<void>;
  changeUserDetails: ({ inputPhone }: { inputPhone: string }) => Promise<any>;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const signOutUser = async () => {
    await firebaseAuth.signOut();
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      console.log("Auth Context => ", user);
      if (user) {
        dispatch({ type: "SET_USER", payload: user });
      } else {
        dispatch({ type: "SET_USER", payload: null });
      }
      dispatch({ type: "SET_IS_USER_LOADING", payload: false });
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (state.user?.uid) {
      ReadUserDetails({
        setUserPhone: (phone: string) =>
          dispatch({ type: "SET_USER_PHONE", payload: phone }),
      });
    }
  }, [state.user]);

  const changeUserDetails = async ({ inputPhone }: { inputPhone: string }) => {
    const response = {
      status: 503,
      data: null,
      error: "Unknown Error!",
    };

    try {
      await set(
        ref(firebaseRealtime, "users/" + state.user?.uid + "/p"),
        inputPhone
      );
      return {
        ...response,
        status: 200,
        data: "Phone Number Updated!",
        error: null,
      };
    } catch (error) {
      return {
        ...response,
        error,
      };
    }
  };

  const ReadUserDetails = ({
    setUserPhone,
  }: {
    setUserPhone: (phone: string) => void;
  }) => {
    if (state.user?.uid) {
      get(ref(firebaseRealtime, "users/" + state.user.uid + "/p"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUserPhone(snapshot.val());
          }
        })
        .catch((error) => console.error(error));
    }
  };

  const signInWithGoogle = async () => {
    try {
      const data = await signInWithPopup(firebaseAuth, googleProvider);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithEmail = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      dispatch({ type: "SET_USER", payload: userCredential.user });
    } catch (error: any) {
      if (JSON.stringify(error)?.includes("invalid-credential")) {
        dispatch({
          type: "SET_AUTH_ERRORS",
          payload: "Email or Password is invalid!",
        });
      } else {
        dispatch({
          type: "SET_AUTH_ERRORS",
          payload: "Unknown Error! try again!",
        });
      }
      console.warn("SignIn ERROR =>", error?.message);
    }
  };

  const signUpWithEmail = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );
      dispatch({ type: "SET_USER", payload: userCredential.user });
    } catch (error: any) {
      if (JSON.stringify(error)?.includes("email-already-in-use")) {
        dispatch({
          type: "SET_AUTH_ERRORS",
          payload: "Email is already in use!",
        });
      } else {
        dispatch({
          type: "SET_AUTH_ERRORS",
          payload: "Unknown Error! try again!",
        });
      }
      console.warn("SignUp ERROR =>", error?.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
        signInWithEmail,
        signUpWithEmail,
        signInWithGoogle,
        signOutUser,
        changeUserDetails,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function AuthProvider({ children }: { children: ReactNode }) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}

export default AuthContext;
