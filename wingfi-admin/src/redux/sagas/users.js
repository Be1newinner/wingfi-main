import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import loginAdminApi from "../../services/users/adminLogin";
import loadUsersService from "../../services/users/loadAllUsers";
import {
  adminUserFailure,
  adminUserRequest,
  adminUserSuccess,
  loadAllUsersFailure,
  loadAllUsersRequest,
  loadAllUsersSuccess,
} from "../reducers/users";

function* loadAllUsersSaga(action) {
  try {
    console.log("payload => ", action.payload);
    const users = yield call(loadUsersService, action.payload);
    yield put(loadAllUsersSuccess(users));
  } catch (error) {
    if (error instanceof Error) {
      yield put(loadAllUsersFailure(error.message));
    } else {
      yield put(loadAllUsersFailure("Unknown error occurred"));
    }
  }
}

export function* adminUserSaga(action) {
  try {
    console.log("payload => ", action.payload);
    const users = yield call(loginAdminApi, action.payload);
    yield put(adminUserSuccess(users));
  } catch (error) {
    if (error instanceof Error) {
      yield put(adminUserFailure(error.message));
    } else {
      yield put(adminUserFailure("Unknown error occurred"));
    }
  }
}

export function* usersSagaWatcher() {
  yield takeEvery(loadAllUsersRequest.type, loadAllUsersSaga);
  yield takeLatest(adminUserRequest.type, adminUserSaga);
}
