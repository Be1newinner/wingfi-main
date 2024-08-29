import { call, put, takeLatest, cancelled, take } from "redux-saga/effects";
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../../constants/firebase.config";
import {
  rehydrateUser,
  triggerRehydrate,
  loginRequest,
  loginSuccess,
  loginFailure,
  signupRequest,
  signupSuccess,
  signupFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  loginRequestByGoogle,
} from "../reducers/auth";
import { PayloadAction } from "@reduxjs/toolkit";
import { EventChannel, eventChannel } from "redux-saga";

function createAuthStateChannel(auth: Auth): EventChannel<User | null> {
  return eventChannel((emit) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        if (user) emit(user);
      },
      (error) => {
        console.error(error);
      }
    );
    return () => unsubscribe();
  });
}

function* rehydrateUserSaga(): Generator<any, void, any> {
  const authStateChannel = yield call(createAuthStateChannel, firebaseAuth);

  try {
    while (true) {
      const user: User | null = yield take(authStateChannel);
      if (user) {
        yield put(
          rehydrateUser({
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            displayName: user.displayName,
            isAdmin: false,
          })
        );
      } else {
        yield put(
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
      }
    }
  } finally {
    if (yield cancelled()) {
      authStateChannel.close();
    }
  }
}

function* signupSaga(
  action: PayloadAction<{ email: string; password: string }>
) {
  try {
    const { email, password } = action.payload;
    const userCredential: UserCredential = yield call(
      createUserWithEmailAndPassword,
      firebaseAuth,
      email,
      password
    );
    yield put(
      signupSuccess({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        emailVerified: userCredential.user.emailVerified,
        phoneNumber: userCredential.user.phoneNumber,
        photoURL: userCredential.user.photoURL,
        displayName: userCredential.user.displayName,
        isAdmin: false,
      })
    );
  } catch (error: any) {
    yield put(signupFailure(error.message));
  }
}

function* loginWithEmailSaga(
  action: PayloadAction<{ email: string; password: string }>
) {
  try {
    const { email, password } = action.payload;
    const userCredential: UserCredential = yield call(
      signInWithEmailAndPassword,
      firebaseAuth,
      email,
      password
    );
    yield put(
      loginSuccess({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        emailVerified: userCredential.user.emailVerified,
        phoneNumber: userCredential.user.phoneNumber,
        photoURL: userCredential.user.photoURL,
        displayName: userCredential.user.displayName,
        isAdmin: false,
      })
    );
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

function* loginWithGoogleSaga() {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential: UserCredential = yield call(
      signInWithPopup,
      firebaseAuth,
      provider
    );
    yield put(
      loginSuccess({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        emailVerified: userCredential.user.emailVerified,
        phoneNumber: userCredential.user.phoneNumber,
        photoURL: userCredential.user.photoURL,
        displayName: userCredential.user.displayName,
        isAdmin: false,
      })
    );
  } catch (error: any) {
    yield put(loginFailure(error.message));
  }
}

function* logoutSaga() {
  try {
    yield call(signOut, firebaseAuth);
    yield put(logoutSuccess());
  } catch (error: any) {
    yield put(logoutFailure(error.message));
  }
}

export default function* authSaga() {
  yield takeLatest(triggerRehydrate.type, rehydrateUserSaga);
  yield takeLatest(signupRequest.type, signupSaga);
  yield takeLatest(loginRequest.type, loginWithEmailSaga);
  yield takeLatest(loginRequestByGoogle.type, loginWithGoogleSaga);
  yield takeLatest(logoutRequest.type, logoutSaga);
}
