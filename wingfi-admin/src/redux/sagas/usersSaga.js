/** @format */

import {
  getDashboardCorporateData,
  getDashboardRetailData,
  getDashboardVendorData,
} from '../../service/api';
import { call, put, takeEvery } from 'redux-saga/effects';
// import Cookie from "js-cookie";
import {
  userCorporateRequest,
  userCorporateSuccess,
  userCorporateFailiure,
  userRetailRequest,
  userRetailSuccess,
  userRetailFailiure,
  userVendorRequest,
  userVendorSuccess,
  userVendorFailiure,
} from '../reducers/usersReducer';

function* userCorporateSaga(action) {
  try {
    const { page, limit } = action.payload;
    const response = yield call(getDashboardCorporateData, page, limit);
    const res = response.data.data;

    yield put(userCorporateSuccess(res));
  } catch (error) {
    yield put(userCorporateFailiure(error));
  }
}

function* userRetailSaga(action) {
  try {
    const { page, limit } = action.payload;
    const response = yield call(getDashboardRetailData, page, limit);
    const res = response.data.data;

    yield put(userRetailSuccess(res));
  } catch (error) {
    yield put(userRetailFailiure(error));
  }
}

function* userVendorSaga(action) {
  try {
    const { page, limit } = action.payload;
    const response = yield call(getDashboardVendorData, page, limit);
    const res = response.data.data;

    yield put(userVendorSuccess(res));
  } catch (error) {
    yield put(userVendorFailiure(error));
  }
}

export function* userSagaWatcher() {
  yield takeEvery(userCorporateRequest.type, userCorporateSaga);
  yield takeEvery(userRetailRequest.type, userRetailSaga);
  yield takeEvery(userVendorRequest.type, userVendorSaga);
}
