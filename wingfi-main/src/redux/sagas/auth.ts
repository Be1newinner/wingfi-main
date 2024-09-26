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
import { firebaseAuth } from "@/infrastructure/firebase.config";
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

function* rehydrateUserSaga(): Generator<unknown, void, EventChannel<User>> {
  const authStateChannel: EventChannel<User> = yield call(
    createAuthStateChannel,
    firebaseAuth
  );

  try {
    getUserFromChannel(authStateChannel);
  } finally {
    if (yield cancelled()) {
      authStateChannel.close(); // Close the channel if the saga is cancelled
    }
  }
}

function* getUserFromChannel(authStateChannel: EventChannel<User>) {
  while (true) {
    // Take a User object from the EventChannel
    const user: User = yield take(authStateChannel); // This should yield a User object

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
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(signupFailure(error.message));
    } else {
      yield put(signupFailure("An unknown error occurred"));
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

    console.log("userCredential => ", userCredential);
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
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(loginFailure(error.message));
    } else {
      yield put(loginFailure("An unknown error occurred"));
    }
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
    console.log("userCredential => ", userCredential);

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
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(loginFailure(error.message));
    } else {
      yield put(loginFailure("An unknown error occurred"));
    }
  }
}

function* logoutSaga() {
  try {
    yield call(signOut, firebaseAuth);
    yield put(logoutSuccess());
  } catch (error: unknown) {
    if (error instanceof Error) {
      yield put(logoutFailure(error.message));
    } else {
      yield put(logoutFailure("An unknown error occurred"));
    }
  }
}

export default function* authSaga() {
  yield takeLatest(triggerRehydrate.type, rehydrateUserSaga);
  yield takeLatest(signupRequest.type, signupSaga);
  yield takeLatest(loginRequest.type, loginWithEmailSaga);
  yield takeLatest(loginRequestByGoogle.type, loginWithGoogleSaga);
  yield takeLatest(logoutRequest.type, logoutSaga);
}
