import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  signInWithPopup,
  signOut,
  getIdToken,
} from "firebase/auth";
import { firebaseAuth, googleProvider } from "../../constants/firebase.config";
import {
  loginRequestByGoogle,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
} from "../reducers/auth";

function* googleLoginSaga() {
  try {
    const result = yield call(signInWithPopup, firebaseAuth, googleProvider);
    const user = result.user;
    const token = yield call(getIdToken, user);

    const userData = {
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      phoneNumber: user.phoneNumber,
      photoURL: user.photoURL,
      displayName: user.displayName,
      isAdmin: false,
      token,
    };

    yield put(loginSuccess(userData));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}


function* logoutSaga() {
  try {
    yield call(signOut, firebaseAuth);
    yield put(logoutSuccess());
  } catch (error) {
    yield put(logoutFailure(error.message));
  }
}

export default function* authSagaWatcher() {
  yield takeEvery(loginRequestByGoogle.type, googleLoginSaga);
  yield takeLatest(logoutRequest.type, logoutSaga);
}
