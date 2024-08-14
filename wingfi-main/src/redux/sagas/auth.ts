import { call, put, takeLatest } from "redux-saga/effects";
import { setUser, setAuthErrors, setUserPhone } from "../actions/auth";

import {
  SIGN_IN_WITH_EMAIL,
  SIGN_UP_WITH_EMAIL,
  SIGN_IN_WITH_GOOGLE,
  SIGN_OUT_USER,
  CHANGE_USER_DETAILS,
} from "../constants/auth";

import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";

import {
  firebaseAuth,
  googleProvider,
  firebaseRealtime,
} from "@/infrastructure/firebase.config";

import { ref, set } from "firebase/database";

interface SignInWithEmailAction {
  type: typeof SIGN_IN_WITH_EMAIL;
  payload: {
    email: string;
    password: string;
  };
}

interface SignUpWithEmailAction {
  type: typeof SIGN_UP_WITH_EMAIL;
  payload: {
    email: string;
    password: string;
  };
}

interface ChangeUserDetailsAction {
  type: typeof CHANGE_USER_DETAILS;
  payload: string;
}

function* handleSignInWithEmail(action: SignInWithEmailAction) {
  const { email, password } = action.payload;
  try {
    const userCredential: UserCredential = yield call(
      signInWithEmailAndPassword,
      firebaseAuth,
      email,
      password
    );
    yield put(setUser(userCredential.user));
  } catch (error: any) {
    const errorMessage = error?.code.includes("auth/invalid-credential")
      ? "Email or Password is invalid!"
      : "Unknown Error! Try again!";
    yield put(setAuthErrors(errorMessage));
  }
}

function* handleSignUpWithEmail(action: SignUpWithEmailAction) {
  const { email, password } = action.payload;
  try {
    const userCredential: UserCredential = yield call(
      createUserWithEmailAndPassword,
      firebaseAuth,
      email,
      password
    );
    yield put(setUser(userCredential.user));
  } catch (error: any) {
    const errorMessage = error?.code.includes("auth/email-already-in-use")
      ? "Email is already in use!"
      : "Unknown Error! Try again!";
    yield put(setAuthErrors(errorMessage));
  }
}

function* handleSignInWithGoogle() {
  try {
    yield call(signInWithPopup, firebaseAuth, googleProvider);
  } catch (error: any) {
    console.error(error);
  }
}

function* handleSignOutUser() {
  try {
    yield call(signOut, firebaseAuth);
  } catch (error: any) {
    console.error(error);
  }
}

function* handleChangeUserDetails(action: ChangeUserDetailsAction) {
  const inputPhone = action.payload;
  try {
    yield call(
      set,
      ref(firebaseRealtime, `users/${firebaseAuth.currentUser?.uid}/phone`),
      inputPhone
    );
    yield put(setUserPhone(inputPhone));
  } catch (error: any) {
    console.error(error);
  }
}

function* watchAuthActions() {
  yield takeLatest(SIGN_IN_WITH_EMAIL, handleSignInWithEmail);
  yield takeLatest(SIGN_UP_WITH_EMAIL, handleSignUpWithEmail);
  yield takeLatest(SIGN_IN_WITH_GOOGLE, handleSignInWithGoogle);
  yield takeLatest(SIGN_OUT_USER, handleSignOutUser);
  yield takeLatest(CHANGE_USER_DETAILS, handleChangeUserDetails);
}

export default watchAuthActions;
