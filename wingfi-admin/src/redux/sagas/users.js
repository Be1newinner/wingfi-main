import { call, put, takeEvery } from "redux-saga/effects";

import loadUsersService from "../../services/users/loadAllUsers";
import {
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

export function* usersSagaWatcher() {
  yield takeEvery(loadAllUsersRequest.type, loadAllUsersSaga);
}
