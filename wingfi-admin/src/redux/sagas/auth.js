
import { call, put, takeLatest } from "redux-saga/effects";
import {
  signOut,
  signInWithEmailAndPassword,
  getIdTokenResult,
} from "firebase/auth";
import { firebaseAuth } from "../../constants/firebase.config";
import {
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  loginRequest,
} from "../reducers/auth";

function* emailLoginSaga({ payload: { email, password } }) {
  console.log({ email, password });
  try {
    const response = yield call(signInWithEmailAndPassword, firebaseAuth, email, password);
    const user = response.user
    const data = yield call(getIdTokenResult, user);
    // const data = yield call(getIdTokenResult(user, false));

    console.log({ data });

    if (user?.reloadUserInfo?.customAttributes &&
      JSON.parse(user?.reloadUserInfo?.customAttributes)?.admin
    ) {
      yield put(loginSuccess({
        uid: user.uid,
        email: user.email,
        emailVerified: user.emailVerified,
        phoneNumber: user.phoneNumber,
        photoURL: user.photoURL,
        displayName: user.displayName,
        isAdmin: JSON.parse(user?.reloadUserInfo?.customAttributes)?.admin,
        token: user.stsTokenManager.accessToken,
        refreshToken: user.stsTokenManager.refreshToken,
        tokenExpiry: user.stsTokenManager.refreshToken
      }));
    } else {
      console.log("ACCESS DENIED!");
      yield put(loginFailure("ACCESS DENIED!"));
    }
  } catch (error) {
    console.log("ERROR IN LOGIN SAGA!", error)
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
  yield takeLatest(loginRequest.type, emailLoginSaga);
  yield takeLatest(logoutRequest.type, logoutSaga);
}
