import { call, put, takeEvery } from "redux-saga/effects";

import {
  loadAllProductsRequest,
  loadAllProductsSuccess,
  loadAllProductsFailure,
} from "../reducers/products";

import loadProductService from "../../services/products/loadProductService";

function* loadAllProductsSaga(action) {
  try {
    console.log("payload => ", action.payload);
    const products = yield call(loadProductService, action.payload);
    yield put(loadAllProductsSuccess(products));
  } catch (error) {
    if (error instanceof Error) {
      yield put(loadAllProductsFailure(error.message));
    } else {
      yield put(loadAllProductsFailure("Unknown error occurred"));
    }
  }
}

export function* productsSagaWatcher() {
  yield takeEvery(loadAllProductsRequest.type, loadAllProductsSaga);
}
