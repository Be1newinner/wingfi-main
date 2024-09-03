import { call, put, takeLatest, cancelled, take } from "redux-saga/effects";
import {
  Auth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
  onAuthStateChanged,
  IdTokenResult,
} from "firebase/auth";
import { firebaseAuth } from "../../constants/firebase.config";
import {
  rehydrateUser,
  triggerRehydrate,
  loginRequest,
  loginSuccess,
  loginFailure,
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
      const result: IdTokenResult | null = user
        ? yield user.getIdTokenResult()
        : null;

      console.log("rehydrate user => ", result);

      if (user) {
        const token = yield user.getIdToken();
        yield put(
          rehydrateUser({
            uid: user.uid,
            email: user.email,
            emailVerified: user.emailVerified,
            phoneNumber: user.phoneNumber,
            photoURL: user.photoURL,
            displayName: user.displayName,
            isAdmin:
              result?.claims?.admin &&
              typeof result?.claims?.admin === "boolean"
                ? result?.claims?.admin
                : false,
            token,
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
            token: null,
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
    const token: string = yield userCredential.user.getIdToken();
    const result: IdTokenResult = yield userCredential.user.getIdTokenResult();
    yield put(
      loginSuccess({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        emailVerified: userCredential.user.emailVerified,
        phoneNumber: userCredential.user.phoneNumber,
        photoURL: userCredential.user.photoURL,
        displayName: userCredential.user.displayName,
        isAdmin:
          result?.claims?.admin && typeof result?.claims?.admin === "boolean"
            ? result?.claims?.admin
            : false,
        token,
      })
    );
    console.log("userCredential => ", result.claims);
  } catch (error: any) {
    console.log(error);
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
    const token: string = yield userCredential.user.getIdToken();
    const result: IdTokenResult = yield userCredential.user.getIdTokenResult();

    yield put(
      loginSuccess({
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        emailVerified: userCredential.user.emailVerified,
        phoneNumber: userCredential.user.phoneNumber,
        photoURL: userCredential.user.photoURL,
        displayName: userCredential.user.displayName,
        isAdmin:
          result?.claims?.admin && typeof result?.claims?.admin === "boolean"
            ? result?.claims?.admin
            : false,
        token,
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
  yield takeLatest(loginRequest.type, loginWithEmailSaga);
  yield takeLatest(loginRequestByGoogle.type, loginWithGoogleSaga);
  yield takeLatest(logoutRequest.type, logoutSaga);
}
