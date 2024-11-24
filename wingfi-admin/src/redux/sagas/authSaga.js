/** @format */

import { call, put, takeEvery } from 'redux-saga/effects';
import Cookies from 'js-cookie';
import {
  authLoginRequest,
  authLoginSuccess,
  authLoginFailed,
  authLogoutSuccess,
  authLogoutRequest,
} from '../reducers/authReducer.js';
import { login } from '../../service/api.js';

function* loginSaga(action) {
  try {
    const response = yield call(login, action.payload);
    const user = response.data;

    const token = user.data.token;

    yield put(authLoginSuccess({ token, ...user.data })); // Ensure the token is set in your state
  } catch (error) {
    yield put(authLoginFailed(error));
  }
}

function* logoutSaga() {
  try {
    Cookies.remove('auth_token'); // Remove token from cookies
    localStorage.removeItem('persist:root'); // Clear persisted state
    yield put(authLogoutSuccess()); // Update state to reflect logout
  } catch (error) {
    console.error('Logout failed:', error);
  }
}

export function* loginSagaWatcher() {
  yield takeEvery(authLoginRequest.type, loginSaga);
  yield takeEvery(authLogoutRequest.type, logoutSaga);
}
